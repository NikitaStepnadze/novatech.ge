// Meta Pixel helpers. The base code in index.html defines window.fbq and fires
// the initial PageView; these wrappers stay safe when the script is blocked.
export function trackEvent(name, params) {
    if (typeof window === "undefined" || typeof window.fbq !== "function") return;
    if (params) {
        window.fbq("track", name, params);
    } else {
        window.fbq("track", name);
    }
}

export function trackCustomEvent(name, params) {
    if (typeof window === "undefined" || typeof window.fbq !== "function") return;
    if (params) {
        window.fbq("trackCustom", name, params);
    } else {
        window.fbq("trackCustom", name);
    }
}
