"use client";

import { useEffect } from "react";

// main.jsx imported the bootstrap JS bundle at module scope. That bundle reaches
// for `document` as soon as it is evaluated, so under SSR it has to be pulled in
// from the browser instead. Importing it here keeps the dropdowns and the
// collapse toggle behaving exactly as before.
export default function BootstrapClient() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return null;
}
