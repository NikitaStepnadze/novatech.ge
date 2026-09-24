import React from "react";

// Static CSS device frame shared by the home page portfolio and the projects
// page. `device` is "monitor" or "phone"; both frame the same desktop capture.
function DeviceMockup({ device, item, className = "" }) {
    return (
        <div className={`device-frame device-${device} ${className}`.trim()}>
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
    );
}

export default DeviceMockup;
