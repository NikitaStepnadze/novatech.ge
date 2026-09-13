import React from "react";

const FLOATING = [
    { src: "/assets/novatech/icons/cloud-hosting.webp", className: "guide-object-1" },
    { src: "/assets/novatech/icons/framework.webp", className: "guide-object-2" },
    { src: "/assets/novatech/icons/code-editor.webp", className: "guide-object-3" },
    { src: "/assets/novatech/icons/deployment.webp", className: "guide-object-4" },
];

function GuideBackdrop() {
    return (
        <div className="guide-static" aria-hidden="true">
            <video
                className="guide-bg-video"
                src="/assets/novatech/video/guide-bg.mp4"
                poster="/assets/novatech/video/guide-bg-poster.webp"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            ></video>
            {FLOATING.map((item) => (
                <img
                    key={item.className}
                    src={item.src}
                    alt=""
                    className={`guide-object ${item.className}`}
                    loading="lazy"
                    decoding="async"
                />
            ))}
        </div>
    );
}

export default GuideBackdrop;
