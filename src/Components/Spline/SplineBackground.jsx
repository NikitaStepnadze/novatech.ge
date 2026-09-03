import React, { Suspense, lazy, useCallback, useEffect, useRef, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const SCENE_URL = "https://prod.spline.design/rpJS3OgwpNHXV7pF/scene.splinecode";

// The Spline runtime is ~2MB of JS and renders continuously via WebGL, so it is
// only mounted when the device can reasonably afford it: wide viewport, no
// reduced-motion preference, and WebGL actually available.
function useCanRenderSpline() {
    const [canRender, setCanRender] = useState(false);

    useEffect(() => {
        const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const widthQuery = window.matchMedia("(min-width: 992px)");

        const hasWebGL = () => {
            try {
                const canvas = document.createElement("canvas");
                return !!(
                    window.WebGLRenderingContext &&
                    (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
                );
            } catch (e) {
                return false;
            }
        };

        const evaluate = () => {
            setCanRender(widthQuery.matches && !motionQuery.matches && hasWebGL());
        };

        evaluate();
        motionQuery.addEventListener("change", evaluate);
        widthQuery.addEventListener("change", evaluate);

        return () => {
            motionQuery.removeEventListener("change", evaluate);
            widthQuery.removeEventListener("change", evaluate);
        };
    }, []);

    return canRender;
}

// Only mount once the section is near the viewport, so the runtime download does
// not compete with everything above it.
function useIsNearViewport(ref) {
    const [isNear, setIsNear] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node || typeof IntersectionObserver === "undefined") {
            setIsNear(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsNear(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "300px" }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [ref]);

    return isNear;
}

function SplineBackground() {
    const hostRef = useRef(null);
    const canRender = useCanRenderSpline();
    const isNear = useIsNearViewport(hostRef);
    const [failed, setFailed] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const splineAppRef = useRef(null);
    const cleanupRef = useRef(null);

    useEffect(() => () => {
        if (cleanupRef.current) cleanupRef.current();
    }, []);

    // The camera is left entirely alone so the scene animates and stays
    // mouse-reactive. Framing is handled in CSS instead.
    const handleLoad = useCallback((splineApp) => {
        setLoaded(true);
        splineAppRef.current = splineApp;
    }, []);

    const showScene = canRender && isNear && !failed;

    return (
        <div className="guide-spline" ref={hostRef} aria-hidden="true">
            {showScene && (
                <Suspense fallback={null}>
                    <Spline
                        scene={SCENE_URL}
                        onLoad={handleLoad}
                        onError={() => setFailed(true)}
                        className={loaded ? "guide-spline-canvas is-loaded" : "guide-spline-canvas"}
                    />
                </Suspense>
            )}
        </div>
    );
}

export default SplineBackground;
