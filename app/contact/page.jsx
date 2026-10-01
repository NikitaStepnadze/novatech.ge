import ContactPage from "../../src/Page/Contact";
import JsonLd from "../../src/Components/Seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "../../src/seo/site";

export const metadata = pageMetadata({
    path: "/contact/",
    title: "კონტაქტი — დაგვიკავშირდი",
    description:
        "დაგვიკავშირდი ვებსაიტის შესაკვეთად: ტელ. 575 75 38 28, ელ. ფოსტა info@novatech.ge. თბილისი, საქართველო. უფასო კონსულტაცია.",
});

export default function Page() {
    return (
        <>
            <JsonLd data={breadcrumbSchema([{ name: "კონტაქტი", path: "/contact/" }])} />
            <ContactPage />
        </>
    );
}
