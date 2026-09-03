import React, { useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = "/content/3d/computer_screen/monitor.glb";
// Measured from the "grey r" screen mesh's UV-mapped bounding box in the GLB.
const SCREEN_ASPECT = 1.53;

// Mimics CSS `object-fit: cover`: crops the texture instead of stretching it
// so any source image/video fills the screen without distortion.
function applyCoverFit(texture, mediaAspect) {
    if (!mediaAspect) return;

    if (mediaAspect > SCREEN_ASPECT) {
        const repeatX = SCREEN_ASPECT / mediaAspect;
        texture.repeat.set(repeatX, 1);
        texture.offset.set((1 - repeatX) / 2, 0);
    } else {
        const repeatY = mediaAspect / SCREEN_ASPECT;
        texture.repeat.set(1, repeatY);
        texture.offset.set(0, (1 - repeatY) / 2);
    }
}

// The GLB has two meshes: the monitor head (bezel material "black r" +
// screen material "grey r") and the stand (single "black r" mesh). We swap
// the screen material for a video texture so any media can be dropped in.
function MonitorModel({
    mediaUrl,
    mediaType = "video",
    screenColor = "#0a0f1c",
    bezelColor = "#111318",
}) {
    const { scene, materials } = useGLTF(MODEL_URL);

    const cloned = useMemo(() => scene.clone(true), [scene]);

    // Bezel/stand color ("black r" material) is static, so it only needs to
    // run once per clone rather than on every media change.
    useEffect(() => {
        const bezelMaterial = materials["black r"];
        if (bezelMaterial) bezelMaterial.color.set(bezelColor);
    }, [materials, bezelColor]);

    useEffect(() => {
        const screenMaterial = materials["grey r"];
        if (!screenMaterial) return;

        let texture;
        let video;
        let cancelled = false;

        if (mediaType === "video" && mediaUrl) {
            video = document.createElement("video");
            video.src = mediaUrl;
            video.crossOrigin = "anonymous";
            video.loop = true;
            video.muted = true;
            video.playsInline = true;
            video.play().catch(() => {});

            texture = new THREE.VideoTexture(video);
            video.addEventListener("loadedmetadata", () => {
                if (cancelled) return;
                applyCoverFit(texture, video.videoWidth / video.videoHeight);
            });
        } else if (mediaType === "image" && mediaUrl) {
            texture = new THREE.TextureLoader().load(mediaUrl, (loaded) => {
                if (cancelled) return;
                applyCoverFit(loaded, loaded.image.width / loaded.image.height);
            });
        }

        if (texture) {
            texture.colorSpace = THREE.SRGBColorSpace;
            texture.flipY = false;
            texture.wrapS = THREE.ClampToEdgeWrapping;
            texture.wrapT = THREE.ClampToEdgeWrapping;
        }

        const screenReplacement = texture
            ? new THREE.MeshBasicMaterial({ map: texture })
            : new THREE.MeshStandardMaterial({ color: screenColor });
        // Keep the "grey r" name on the replacement so a later swap (e.g.
        // image -> video) can still find the screen slot on re-traversal.
        screenReplacement.name = "grey r";

        // The monitor head mesh has two material slots ("black r" for the
        // bezel, "grey r" for the panel), so child.material is an array here
        // rather than a single material.
        cloned.traverse((child) => {
            if (!child.isMesh || !child.material) return;

            if (Array.isArray(child.material)) {
                child.material = child.material.map((mat) =>
                    mat.name === "grey r" ? screenReplacement : mat
                );
            } else if (child.material.name === "grey r") {
                child.material = screenReplacement;
            }
        });

        return () => {
            cancelled = true;
            if (video) {
                video.pause();
                video.src = "";
            }
            texture?.dispose();
            screenReplacement.dispose();
        };
    }, [cloned, materials, mediaUrl, mediaType, screenColor]);

    return <primitive object={cloned} />;
}

useGLTF.preload(MODEL_URL);

export default MonitorModel;
