"use client";

import React, { useEffect, useState } from "react";
import LazyVideo from "./LazyVideo";

// Safari (and every iOS browser, which all run WebKit) plays VP9 WebM but drops
// its alpha channel, so transparent artwork would sit in a black box there.
// Those visitors get the transparent poster still instead.
function supportsAlphaWebm(){
    const ua = navigator.userAgent;
    const isWebKitOnly = /AppleWebKit/.test(ua) && !/Chrome|Chromium|Edg|Android/.test(ua);
    const isIOS = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    return !isWebKitOnly && !isIOS;
}

// Transparent VP9 clip with a transparent WebP still as the WebKit fallback.
function AlphaVideo({ src, poster, alt = "", className = "", ...rest }){
    const [alphaVideo, setAlphaVideo] = useState(true);

    useEffect(() => {
        setAlphaVideo(supportsAlphaWebm());
    }, []);

    if (!alphaVideo) {
        return <img src={poster} alt={alt} className={className} loading="lazy" decoding="async" />;
    }

    return <LazyVideo src={src} poster={poster} className={className} aria-label={alt || undefined} {...rest} />;
}

export default AlphaVideo;
