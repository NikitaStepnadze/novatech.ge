import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, Environment, OrbitControls } from "@react-three/drei";
import MonitorModel from "./MonitorModel";
import PhoneModel from "./PhoneModel";
import { use3DCanvasGate } from "./use3DCanvasGate";

const DEVICE_CAMERA = {
    monitor: { position: [0, 0.3, 3.2], fov: 35 },
    phone: { position: [0, 0.1, 2.6], fov: 35 },
};

const DEVICE_FIT_MARGIN = {
    monitor: 1.1,
    phone: 1.25,
};

function DeviceViewer({
    deviceType = "monitor",
    mediaUrl,
    mediaType = "video",
    className = "",
    width = "100%",
    height = 640,
    background = "linear-gradient(180deg, #12172b 0%, #05070d 100%)",
    screenColor,
    bezelColor,
    enableRotate = true,
    fitMargin,
}) {
    const { hostRef, showScene, onError } = use3DCanvasGate();

    const DeviceModel = deviceType === "phone" ? PhoneModel : MonitorModel;
    const camera = DEVICE_CAMERA[deviceType] || DEVICE_CAMERA.monitor;
    const margin = fitMargin ?? DEVICE_FIT_MARGIN[deviceType] ?? 1.1;

    return (
        <div
            className={`monitor3d-host ${className}`.trim()}
            ref={hostRef}
            style={{ width, height, background }}
        >
            {showScene ? (
                <Canvas camera={camera} onError={onError} dpr={[1, 2]}>
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[3, 4, 5]} intensity={1.2} />
                    <Suspense fallback={null}>
                        <Bounds fit clip margin={margin}>
                            <DeviceModel
                                mediaUrl={mediaUrl}
                                mediaType={mediaType}
                                screenColor={screenColor}
                                bezelColor={bezelColor}
                            />
                        </Bounds>
                        <Environment preset="city" />
                    </Suspense>
                    <OrbitControls
                        enablePan={false}
                        enableZoom={false}
                        enableRotate={enableRotate}
                        minDistance={1.5}
                        maxDistance={8}
                        makeDefault
                    />
                </Canvas>
            ) : (
                <div className="monitor3d-fallback" aria-hidden="true" />
            )}
        </div>
    );
}

export default DeviceViewer;
