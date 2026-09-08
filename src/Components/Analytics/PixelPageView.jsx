import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "./pixel";

// The base code already fires PageView on the first load, so this only reports
// the client-side route changes that follow it.
function PixelPageView() {
    const location = useLocation();
    const isInitialLoad = useRef(true);

    useEffect(() => {
        if (isInitialLoad.current) {
            isInitialLoad.current = false;
            return;
        }
        trackEvent("PageView");
    }, [location.pathname, location.search]);

    return null;
}

export default PixelPageView;
