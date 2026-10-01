import PackagesPage from "../../src/Page/Packages";
import JsonLd from "../../src/Components/Seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "../../src/seo/site";

export const metadata = pageMetadata({
    path: "/packages/",
    title: "ვებსაიტის პაკეტები და ფასები — PLUS, PRO, ULTRA, ALL IN",
    description:
        "NOVATECH-ის ვებსაიტის პაკეტები — PLUS, PRO, ULTRA და ALL IN. შეადარე ფასები და ფუნქციონალი და აირჩიე შენს ბიზნესზე მორგებული პაკეტი.",
});

export default function Page() {
    return (
        <>
            <JsonLd data={breadcrumbSchema([{ name: "პაკეტები", path: "/packages/" }])} />
            <PackagesPage />
        </>
    );
}
