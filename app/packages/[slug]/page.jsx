import { notFound } from "next/navigation";
import PackageDetailPage from "../../../src/Page/PackageDetail";
import JsonLd from "../../../src/Components/Seo/JsonLd";
import { packages, getPackage, packagePath } from "../../../src/Data/PackagesData";
import { pageMetadata, breadcrumbSchema, packageSchema } from "../../../src/seo/site";

// Static export can only serve the pages generated at build time, so any slug
// outside the list 404s instead of rendering on demand.
export const dynamicParams = false;

export function generateStaticParams() {
    return packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const pkg = getPackage(slug);
    if (!pkg) return {};

    return pageMetadata({
        path: packagePath(pkg.slug),
        title: `${pkg.shortName} პაკეტი — ვებსაიტი ${pkg.price}₾`,
        description: `${pkg.name} — ${pkg.price}₾. ${pkg.tagline}. ${pkg.overview}`,
    });
}

export default async function Page({ params }) {
    const { slug } = await params;
    const pkg = getPackage(slug);
    if (!pkg) notFound();

    const path = packagePath(pkg.slug);

    return (
        <>
            <JsonLd data={packageSchema(pkg, path)} />
            <JsonLd
                data={breadcrumbSchema([
                    { name: "პაკეტები", path: "/packages/" },
                    { name: pkg.name, path },
                ])}
            />
            <PackageDetailPage pkg={pkg} />
        </>
    );
}
