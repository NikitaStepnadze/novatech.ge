import FAQsPage from "../../src/Page/FAQs";
import JsonLd from "../../src/Components/Seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "../../src/seo/site";

export const metadata = pageMetadata({
    path: "/faq/",
    title: "კითხვები — ვებსაიტის დამზადება, ვადები და ფასი",
    description:
        "პასუხები ხშირად დასმულ კითხვებზე: რა ღირს ვებსაიტის დამზადება, რამდენ ხანს გრძელდება, იქნება თუ არა მობილურზე მორგებული და გაქვთ თუ არა მხარდაჭერა.",
});

export default function Page() {
    return (
        <>
            <JsonLd data={breadcrumbSchema([{ name: "კითხვები", path: "/faq/" }])} />
            <FAQsPage />
        </>
    );
}
