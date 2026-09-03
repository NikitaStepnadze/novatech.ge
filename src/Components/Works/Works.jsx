import React, { useState } from "react";
import { worksData } from "../../Data/WorksData";
import DeviceViewer from "../Monitor3D/DeviceViewer";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import "../Monitor3D/monitor3d.css";
import "./works.css";

function WorksSection() {
    // Phone view is wired up (DeviceViewer + PhoneModel already support it)
    // but disabled until a web-sized phone .glb replaces the current 83MB one.
    const [deviceType, setDeviceType] = useState("monitor");
    const phoneReady = false;

    return (
        <div className="section">
            <div className="works-container">
                <div className="d-flex flex-column gspace-2 works-header">
                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gspace-2">
                            <div className="d-flex flex-column gspace-2">
                                <div className="sub-heading">
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>პორტფოლიო</span>
                                </div>
                                <h2 className="title-heading">ჩვენი ნამუშევრები</h2>
                            </div>
                            <div
                                className="works-device-switch"
                                role="group"
                                aria-label="მოწყობილობის შეცვლა"
                            >
                                <button
                                    type="button"
                                    className={deviceType === "monitor" ? "is-active" : ""}
                                    onClick={() => setDeviceType("monitor")}
                                    aria-pressed={deviceType === "monitor"}
                                    title="მონიტორის ხედი"
                                >
                                    <i className="fa-solid fa-desktop"></i>
                                </button>
                                <button
                                    type="button"
                                    className={deviceType === "phone" ? "is-active" : ""}
                                    onClick={() => phoneReady && setDeviceType("phone")}
                                    aria-pressed={deviceType === "phone"}
                                    disabled={!phoneReady}
                                    title={
                                        phoneReady
                                            ? "მობილურის ხედი"
                                            : "მობილურის ხედი მალე დაემატება"
                                    }
                                >
                                    <i className="fa-solid fa-mobile-screen-button"></i>
                                </button>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>

                <div className="works-grid">
                    {worksData.map((item, index) => (
                        <AnimateOnScroll
                            key={item.id}
                            animation="fadeInUp"
                            speed="normal"
                            delay={index * 100}
                        >
                            <div className="works-item">
                                <DeviceViewer
                                    deviceType={deviceType}
                                    mediaUrl={item.image}
                                    mediaType="image"
                                    height={480}
                                    background="transparent"
                                    bezelColor="#15161a"
                                    screenColor="#0a0f1c"
                                    fitMargin={1.15}
                                />
                                <h6 className="works-item-title">{item.title}</h6>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WorksSection;
