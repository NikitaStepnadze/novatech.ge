// Single source for the business facts and URL rules that page metadata,
// structured data, robots.txt and the sitemap all depend on, so the phone
// number or a canonical URL can't drift between them.

export const SITE_URL = "https://nova-tech.ge";
export const SITE_NAME = "NOVATECH";
export const SITE_TAGLINE = "ვებსაიტების დამზადება";

export const PHONE_DISPLAY = "575 75 38 28";
export const PHONE_E164 = "+995575753828";
export const EMAIL = "info@novatech.ge";

// Same handles the portfolio page embeds (Data/SocialFeedsData).
export const SOCIAL_PROFILES = [
    { platform: "facebook", icon: "fa-facebook", url: "https://www.facebook.com/novatech.ge" },
    { platform: "instagram", icon: "fa-instagram", url: "https://www.instagram.com/novatech.ge/" },
    { platform: "tiktok", icon: "fa-tiktok", url: "https://www.tiktok.com/@novatech.ge" },
];

export const LOGO_URL = `${SITE_URL}/assets/novatech/favicon/icon-512.png`;
export const OG_IMAGE = {
    url: "/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "NOVATECH — ვებსაიტების დამზადება",
};

// trailingSlash is on, so every canonical URL ends in "/".
export const absoluteUrl = (path = "/") => {
    const withSlash = path.endsWith("/") ? path : `${path}/`;
    return `${SITE_URL}${withSlash.startsWith("/") ? withSlash : `/${withSlash}`}`;
};

// Per-page metadata. Next merges metadata shallowly, so openGraph is rebuilt
// in full here rather than inherited from the layout, otherwise every page
// would share the homepage's og:url and og:title.
export function pageMetadata({ path, title, description, absoluteTitle = false, noindex = false }) {
    const url = absoluteUrl(path);
    const shareTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;

    return {
        title: absoluteTitle ? { absolute: title } : title,
        description,
        alternates: { canonical: url },
        openGraph: {
            type: "website",
            locale: "ka_GE",
            siteName: SITE_NAME,
            url,
            title: shareTitle,
            description,
            images: [OG_IMAGE],
        },
        twitter: {
            card: "summary_large_image",
            title: shareTitle,
            description,
            images: [OG_IMAGE.url],
        },
        ...(noindex && { robots: { index: false, follow: true } }),
    };
}

// ---- Structured data (JSON-LD) ----

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: SITE_NAME,
    alternateName: "NOVATECH Digital Agency",
    description:
        "ვებ სააგენტო თბილისში — ბიზნეს ვებსაიტების, ონლაინ მაღაზიების, UI/UX დიზაინისა და SEO ოპტიმიზაციის სერვისები.",
    url: `${SITE_URL}/`,
    logo: LOGO_URL,
    image: `${SITE_URL}${OG_IMAGE.url}`,
    telephone: PHONE_E164,
    email: EMAIL,
    priceRange: "150₾ – 750₾",
    currenciesAccepted: "GEL",
    address: {
        "@type": "PostalAddress",
        addressLocality: "თბილისი",
        addressCountry: "GE",
    },
    areaServed: { "@type": "Country", name: "საქართველო" },
    knowsLanguage: ["ka", "en"],
    sameAs: SOCIAL_PROFILES.map((profile) => profile.url),
};

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    inLanguage: "ka",
    publisher: { "@id": ORG_ID },
};

// crumbs: [{ name, path }] after the homepage, which is always first.
export const breadcrumbSchema = (crumbs) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "მთავარი", path: "/" }, ...crumbs].map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.path),
    })),
});

export const packageSchema = (pkg, path) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: pkg.name,
    serviceType: "ვებსაიტის დამზადება",
    description: pkg.overview,
    url: absoluteUrl(path),
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "საქართველო" },
    offers: {
        "@type": "Offer",
        price: pkg.price,
        priceCurrency: "GEL",
        availability: "https://schema.org/InStock",
        url: absoluteUrl(path),
    },
});
