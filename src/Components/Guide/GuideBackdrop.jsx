import React from "react";

// Replaces the previous Spline/WebGL scene. That runtime was ~2MB of JS, drew
// continuously, and its camera reacted to scroll — the zoom in/out effect we
// wanted gone. This is the same look built from static layers: a CSS aurora,
// a grid, and flat 3D artwork that never animates on scroll.
const FLOATING = [
    { src: "/assets/novatech/icons/cloud-hosting.webp", className: "guide-object-1" },
    { src: "/assets/novatech/icons/framework.webp", className: "guide-object-2" },
    { src: "/assets/novatech/icons/code-editor.webp", className: "guide-object-3" },
    { src: "/assets/novatech/icons/deployment.webp", className: "guide-object-4" },
];

function GuideBackdrop() {
    return (
        <div className="guide-static" aria-hidden="true">
            <span className="guide-aurora"></span>
            <span className="guide-grid"></span>
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
