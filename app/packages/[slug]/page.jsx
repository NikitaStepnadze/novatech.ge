import { notFound } from "next/navigation";
import PackageDetailPage from "../../../src/Page/PackageDetail";
import { packages, getPackage, packagePath } from "../../../src/Data/PackagesData";

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

    return {
        title: `${pkg.name} - NOVATECH - ვებსაიტების დამზადება`,
        description: `${pkg.name} — ${pkg.price}₾. ${pkg.overview}`,
        alternates: { canonical: `https://novatech.ge${packagePath(pkg.slug)}` },
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    const pkg = getPackage(slug);
    if (!pkg) notFound();

    return <PackageDetailPage pkg={pkg} />;
}
