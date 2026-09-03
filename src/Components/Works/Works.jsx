import React, { useState } from "react";
import { worksData } from "../../Data/WorksData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import "./works.css";

// The screenshots are captured at desktop width, so the phone frame shows the
// same shot scaled into a narrow viewport rather than a separate capture.
const DEVICES = [
    { key: "monitor", icon: "fa-desktop", label: "მონიტორის ხედი" },
    { key: "phone", icon: "fa-mobile-screen-button", label: "მობილურის ხედი" },
];

function WorksSection() {
    const [deviceType, setDeviceType] = useState("monitor");

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
                                {DEVICES.map((device) => (
                                    <button
                                        key={device.key}
                                        type="button"
                                        className={deviceType === device.key ? "is-active" : ""}
                                        onClick={() => setDeviceType(device.key)}
                                        aria-pressed={deviceType === device.key}
                                        title={device.label}
                                    >
                                        <i className={`fa-solid ${device.icon}`}></i>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>

                <div className={`works-grid is-${deviceType}`}>
                    {worksData.map((item, index) => (
                        <AnimateOnScroll
                            key={item.id}
                            animation="fadeInUp"
                            speed="normal"
                            delay={index * 100}
                        >
                            <figure className="works-item">
                                <div className={`device-frame device-${deviceType}`}>
                                    <div className="device-screen">
                                        <div className="device-bar">
                                            <span className="device-dot"></span>
                                            <span className="device-dot"></span>
                                            <span className="device-dot"></span>
                                            <span className="device-url">{item.url}</span>
                                        </div>
                                        <div className="device-shot">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                    </div>
                                    <span className="device-stand" aria-hidden="true"></span>
                                    <span className="device-glow" aria-hidden="true"></span>
                                </div>
                                <figcaption className="works-item-meta">
                                    <span className="works-item-category">{item.category}</span>
                                    <h5 className="works-item-title">{item.title}</h5>
                                </figcaption>
                            </figure>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WorksSection;
