import { useEffect, useRef, useState } from "react";

// Same reasoning as the Spline scenes: WebGL canvases are expensive, so only
// mount once we know the device can afford it and the section is in view.
function useCanRender3D() {
    const [canRender, setCanRender] = useState(false);

    useEffect(() => {
        const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

        const hasWebGL = () => {
            try {
                const canvas = document.createElement("canvas");
                return !!(
                    window.WebGLRenderingContext &&
                    (canvas.getContext("webgl2") || canvas.getContext("webgl"))
                );
            } catch {
                return false;
            }
        };

        const evaluate = () => setCanRender(!motionQuery.matches && hasWebGL());
        evaluate();
        motionQuery.addEventListener("change", evaluate);
        return () => motionQuery.removeEventListener("change", evaluate);
    }, []);

    return canRender;
}

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

// Combines both gates behind one hook: pass a host element ref, get back
// whether a WebGL canvas should actually be mounted inside it.
export function use3DCanvasGate() {
    const hostRef = useRef(null);
    const canRender = useCanRender3D();
    const isNear = useIsNearViewport(hostRef);
    const [failed, setFailed] = useState(false);

    return {
        hostRef,
        showScene: canRender && isNear && !failed,
        onError: () => setFailed(true),
    };
}
