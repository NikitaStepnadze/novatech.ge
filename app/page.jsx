import HomePage from "../src/Page/Home";
import JsonLd from "../src/Components/Seo/JsonLd";
import { pageMetadata, organizationSchema, websiteSchema } from "../src/seo/site";

export const metadata = pageMetadata({
    path: "/",
    title: "ვებსაიტების დამზადება 150₾-დან | NOVATECH",
    absoluteTitle: true,
    description:
        "NOVATECH ქმნის თანამედროვე, სწრაფ და Google-ში მოსაძებნ ვებსაიტებს — ბიზნეს საიტი, ონლაინ მაღაზია, UI/UX დიზაინი და SEO. ვებსაიტის დამზადება 150₾-დან.",
});

export default function Page() {
    return (
        <>
            <JsonLd data={organizationSchema} />
            <JsonLd data={websiteSchema} />
            <HomePage />
        </>
    );
}
