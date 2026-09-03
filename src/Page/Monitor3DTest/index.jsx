import React, { useState } from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import DeviceViewer from "../../Components/Monitor3D/DeviceViewer";
import "../../Components/Monitor3D/monitor3d.css";

const MEDIA_OPTIONS = {
    monitor: [
        {
            key: "image",
            label: "Static Image",
            type: "image",
            url: "/assets/images/dummy-img-900x600.jpg",
        },
        {
            key: "video",
            label: "Video",
            type: "video",
            url: "/content/abstract-blue-fluid-light-waves-background-animati-2026-01-28-02-53-41-utc.mp4",
        },
    ],
    phone: [
        {
            key: "video",
            label: "Video",
            type: "video",
            url: "/content/abstract-blue-fluid-light-waves-background-animati-2026-01-28-02-53-41-utc.mp4",
        },
    ],
};

function Monitor3DTestPage() {
    const [deviceType, setDeviceType] = useState("monitor");
    const [activeKey, setActiveKey] = useState(MEDIA_OPTIONS.monitor[0].key);

    const options = MEDIA_OPTIONS[deviceType];
    const active = options.find((option) => option.key === activeKey) || options[0];

    return (
        <>
            <HeadTitle title="3D Device Mockup Test - NOVATECH" />
            <section className="monitor3d-test-section">
                <div className="container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-lg-8 text-center">
                            <h2>3D Device Mockup Test</h2>
                            <p>
                                Envato device mockups rendered with react-three-fiber. The
                                screen surface is swapped for a live video or image texture —
                                drag to orbit the model.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="monitor3d-controls justify-content-center">
                                <button
                                    type="button"
                                    className={deviceType === "monitor" ? "is-active" : ""}
                                    onClick={() => {
                                        setDeviceType("monitor");
                                        setActiveKey(MEDIA_OPTIONS.monitor[0].key);
                                    }}
                                >
                                    Monitor
                                </button>
                                <button
                                    type="button"
                                    className={deviceType === "phone" ? "is-active" : ""}
                                    onClick={() => {
                                        setDeviceType("phone");
                                        setActiveKey(MEDIA_OPTIONS.phone[0].key);
                                    }}
                                >
                                    Phone
                                </button>
                            </div>
                            <div className="monitor3d-controls justify-content-center">
                                {options.map((option) => (
                                    <button
                                        key={option.key}
                                        type="button"
                                        className={option.key === activeKey ? "is-active" : ""}
                                        onClick={() => setActiveKey(option.key)}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                            <DeviceViewer
                                deviceType={deviceType}
                                mediaUrl={active.url}
                                mediaType={active.type}
                                height={520}
                                background="linear-gradient(180deg, #1c1030 0%, #05070d 100%)"
                                bezelColor="#1a1a1a"
                                screenColor="#0a0f1c"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Monitor3DTestPage;
