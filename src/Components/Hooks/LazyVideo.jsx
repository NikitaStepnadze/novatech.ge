"use client";

import React from "react";
import { useInView } from "react-intersection-observer";

// Autoplaying <video> starts downloading as soon as it is in the DOM, which
// makes a below-the-fold background clip compete with the hero. Attaching `src`
// only once the element is close to the viewport keeps the poster on screen
// until the visitor is actually heading for it.
function LazyVideo({ src, poster, className = "", rootMargin = "600px", ...rest }) {
    const { ref, inView } = useInView({ triggerOnce: true, rootMargin });

    return (
        <video
            ref={ref}
            className={className}
            src={inView ? src : undefined}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            {...rest}
        />
    );
}

export default LazyVideo;
