import React, { useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = "/content/3d/smartphone_screen/Iphone pro 3.glb";
// The GLB file actually contains two duplicate phones under the scene root
// (nodes "Plane.015" and "Plane.004"); we only want one on screen.
const PHONE_NODE_NAME = "Plane.004";
const SCREEN_MATERIAL_NAME = "WALLPAPER.003";
// Measured from the screen mesh's local bounding box (width / height).
const SCREEN_ASPECT = 0.473;

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

function PhoneModel({ mediaUrl, mediaType = "video", screenColor = "#0a0f1c" }) {
    const { scene, materials } = useGLTF(MODEL_URL);

    const cloned = useMemo(() => {
        const phoneNode = scene.getObjectByName(PHONE_NODE_NAME);
        return phoneNode ? phoneNode.clone(true) : scene.clone(true);
    }, [scene]);

    useEffect(() => {
        const screenMaterial = materials[SCREEN_MATERIAL_NAME];
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
        screenReplacement.name = SCREEN_MATERIAL_NAME;

        cloned.traverse((child) => {
            if (!child.isMesh || !child.material) return;

            if (Array.isArray(child.material)) {
                child.material = child.material.map((mat) =>
                    mat.name === SCREEN_MATERIAL_NAME ? screenReplacement : mat
                );
            } else if (child.material.name === SCREEN_MATERIAL_NAME) {
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

    return <primitive object={cloned} rotation={[0, 0, 0]} />;
}

useGLTF.preload(MODEL_URL);

export default PhoneModel;
