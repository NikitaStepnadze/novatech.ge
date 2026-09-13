"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackEvent } from "./pixel";

// The base code already fires PageView on the first load, so this only reports
// the client-side route changes that follow it.
function PixelPageView() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const isInitialLoad = useRef(true);

    useEffect(() => {
        if (isInitialLoad.current) {
            isInitialLoad.current = false;
            return;
        }
        trackEvent("PageView");
    }, [pathname, searchParams]);

    return null;
}

export default PixelPageView;
