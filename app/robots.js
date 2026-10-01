import { SITE_URL } from "../src/seo/site";

// Static export writes this out as /robots.txt at build time. /404_page/ is not
// disallowed here: it carries a noindex tag, and a disallow would stop
// crawlers from ever reading it.
export const dynamic = "force-static";

export default function robots() {
    return {
        rules: { userAgent: "*", allow: "/" },
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
