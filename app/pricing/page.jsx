import PricingPage from "../../src/Page/Pricing";
import JsonLd from "../../src/Components/Seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "../../src/seo/site";

export const metadata = pageMetadata({
    path: "/pricing/",
    title: "ფასები — რა ღირს ვებსაიტის დამზადება",
    description:
        "ვებსაიტის დამზადების ფასები: ერთგვერდიანი საიტი 150₾, მრავალგვერდიანი SEO-ით 250₾, პრემიუმ დიზაინი და ონლაინ მაღაზია 400₾-დან. ნახე, რას მოიცავს თითოეული.",
});

export default function Page() {
    return (
        <>
            <JsonLd data={breadcrumbSchema([{ name: "ფასები", path: "/pricing/" }])} />
            <PricingPage />
        </>
    );
}
