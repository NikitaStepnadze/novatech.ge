/** @type {import('next').NextConfig} */
const nextConfig = {
    // The site was deployed as a static SPA bundle (public/_redirects pointed
    // every path at index.html). Exporting keeps that same "upload a folder of
    // static files" deployment instead of requiring a Node server.
    output: "export",

    // Static export has no image optimisation server, and every <img> in the
    // markup is a plain tag pointing at /assets/..., so nothing is resized.
    images: { unoptimized: true },

    // Vite's dev server served /about, and the SPA fallback made the deployed
    // /about work too. trailingSlash makes the export emit about/index.html so
    // those same URLs keep resolving on a plain static host.
    trailingSlash: true,
};

export default nextConfig;
