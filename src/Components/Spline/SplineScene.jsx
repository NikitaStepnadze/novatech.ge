import React, { Suspense, lazy, useCallback, useEffect, useRef, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

// The Spline runtime is ~2MB of JS and renders continuously via WebGL, so it is
// only mounted when the device can reasonably afford it: wide viewport, no
// reduced-motion preference, and WebGL actually available.
function useCanRenderSpline(minWidth) {
    const [canRender, setCanRender] = useState(false);

    useEffect(() => {
        const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const widthQuery = window.matchMedia(`(min-width: ${minWidth}px)`);

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
    }, [minWidth]);

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

// Spline only receives pointer events that land on its own canvas, so a scene
// occupying part of the page stops tracking as soon as the cursor leaves it.
// Forwarding window-level cursor moves onto the canvas keeps the robot looking
// at the real cursor anywhere on the page.
function useGlobalCursorForwarding(hostRef, enabled) {
    useEffect(() => {
        if (!enabled) return;

        const host = hostRef.current;
        if (!host) return;

        let canvas = null;
        let frame = 0;
        let pending = null;

        const findCanvas = () => {
            canvas = host.querySelector("canvas");
            return canvas;
        };

        const dispatch = () => {
            frame = 0;
            if (!pending) return;
            if (!canvas && !findCanvas()) return;

            // Replay the pointer at its true page position. The runtime maps the
            // event against the canvas box itself, so coordinates outside that
            // box still resolve to a sensible look-at direction.
            canvas.dispatchEvent(
                new PointerEvent("pointermove", {
                    clientX: pending.clientX,
                    clientY: pending.clientY,
                    bubbles: false,
                    cancelable: true,
                    pointerType: "mouse",
                })
            );
            pending = null;
        };

        const onPointerMove = (event) => {
            if (event.target && host.contains(event.target)) return; // already handled
            pending = { clientX: event.clientX, clientY: event.clientY };
            if (!frame) frame = requestAnimationFrame(dispatch);
        };

        window.addEventListener("pointermove", onPointerMove, { passive: true });
        return () => {
            window.removeEventListener("pointermove", onPointerMove);
            if (frame) cancelAnimationFrame(frame);
        };
    }, [hostRef, enabled]);
}

function SplineScene({
    scene,
    className = "",
    canvasClassName = "",
    minWidth = 992,
    trackGlobalCursor = false,
}) {
    const hostRef = useRef(null);
    const canRender = useCanRenderSpline(minWidth);
    const isNear = useIsNearViewport(hostRef);
    const [failed, setFailed] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const splineAppRef = useRef(null);

    useGlobalCursorForwarding(hostRef, trackGlobalCursor && loaded);

    // The camera is left entirely alone so the scene animates and stays
    // mouse-reactive. Framing is handled in CSS instead.
    const handleLoad = useCallback((splineApp) => {
        setLoaded(true);
        splineAppRef.current = splineApp;
    }, []);

    const showScene = canRender && isNear && !failed;

    return (
        <div className={`spline-host ${className}`.trim()} ref={hostRef} aria-hidden="true">
            {showScene && (
                <Suspense fallback={null}>
                    <Spline
                        scene={scene}
                        onLoad={handleLoad}
                        onError={() => setFailed(true)}
                        className={`${canvasClassName} ${loaded ? "is-loaded" : ""}`.trim()}
                    />
                </Suspense>
            )}
        </div>
    );
}

export default SplineScene;
