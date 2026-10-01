import { absoluteUrl } from "../src/seo/site";
import { packages, packagePath } from "../src/Data/PackagesData";

// Static export writes this out as /sitemap.xml at build time.
export const dynamic = "force-static";

// Every indexable page. /404_page/ is left out on purpose (it is noindex).
// changefreq and priority are omitted (Google ignores both), and so is
// lastmod: stamping every URL with the build date would make it meaningless.
const PAGES = [
    "/",
    "/about/",
    "/service/",
    "/single_services/",
    "/packages/",
    ...packages.map((pkg) => packagePath(pkg.slug)),
    "/pricing/",
    "/projects/",
    "/case_studies/",
    "/why_us/",
    "/process/",
    "/team/",
    "/testimonial/",
    "/faq/",
    "/blog/",
    "/single_post/",
    "/contact/",
];

export default function sitemap() {
    return PAGES.map((path) => ({ url: absoluteUrl(path) }));
}
