import { Suspense } from "react";
import Script from "next/script";

// Global stylesheets, in the same order main.jsx loaded them so the cascade is
// unchanged.
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/main.css";
import "../src/assets/css/responsive.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "animate.css";

import Navbar from "../src/Components/Header/header";
import Footer from "../src/Components/Footer/footer";
import Sidebar from "../src/Components/Sidebar/Sidebar";
import { ModalVideoProvider } from "../src/Components/Video/ModalVideoContext";
import { NavProvider } from "../src/Components/Context/NavContext";
import PixelPageView from "../src/Components/Analytics/PixelPageView";
import BootstrapClient from "../src/Components/Bootstrap/BootstrapClient";

const PIXEL_ID = "1757431905546688";

export const metadata = {
    metadataBase: new URL("https://novatech.ge"),
    title: "NOVATECH - ვებსაიტების დამზადება",
    description:
        "NOVATECH — ვქმნით ვებსაიტებს, რომლებიც შენს ბრენდს პროფესიონალურად წარმოაჩენს. ვებსაიტების დამზადება 150₾-დან.",
    alternates: { canonical: "https://novatech.ge/" },
    manifest: "/site.webmanifest",
    icons: {
        icon: [
            { url: "/assets/novatech/favicon/favicon.ico", sizes: "any" },
            { url: "/assets/novatech/favicon/icon-16.png", type: "image/png", sizes: "16x16" },
            { url: "/assets/novatech/favicon/icon-32.png", type: "image/png", sizes: "32x32" },
            { url: "/assets/novatech/favicon/icon-48.png", type: "image/png", sizes: "48x48" },
            { url: "/assets/novatech/favicon/icon-192.png", type: "image/png", sizes: "192x192" },
        ],
        apple: [{ url: "/assets/novatech/favicon/apple-touch-icon.png", sizes: "180x180" }],
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#1B44E8",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ka">
            <head>
                {/* Vendor stylesheets served from /public. They were @imported at the
                    top of main.css; as <link> tags they load from the same URLs and
                    stay ahead of the bundled CSS, so the cascade is unchanged. */}
                <link rel="stylesheet" href="/assets/css/vendor/font-family-plus-jakarta-sans.css" />
                <link rel="stylesheet" href="/assets/css/vendor/fontawesome.css" />
                <link rel="stylesheet" href="/assets/css/vendor/brands.css" />
                <link rel="stylesheet" href="/assets/css/vendor/regular.css" />
                <link rel="stylesheet" href="/assets/css/vendor/solid.css" />
            </head>
            <body>
                {/* Meta Pixel base code. beforeInteractive keeps it in the document
                    head like the old index.html snippet, so fbq exists before any
                    component tries to track through it. */}
                <Script id="meta-pixel" strategy="beforeInteractive">
                    {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');`}
                </Script>
                {/* Meta Pixel fallback for browsers without JavaScript */}
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: "none" }}
                        src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
                        alt=""
                    />
                </noscript>

                <BootstrapClient />
                {/* useSearchParams needs a Suspense boundary so the static export
                    can still prerender the surrounding page. */}
                <Suspense fallback={null}>
                    <PixelPageView />
                </Suspense>
                <NavProvider>
                    <ModalVideoProvider>
                        <Navbar />
                        <Sidebar />
                        {children}
                        <Footer />
                    </ModalVideoProvider>
                </NavProvider>
            </body>
        </html>
    );
}
