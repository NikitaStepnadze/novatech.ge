import SingleServicePage from "../../src/Page/SingleService";
import JsonLd from "../../src/Components/Seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "../../src/seo/site";

export const metadata = pageMetadata({
    path: "/single_services/",
    title: "ბიზნეს ვებსაიტის დამზადება",
    description:
        "ბიზნეს ვებსაიტის დამზადება სტრუქტურის დაგეგმვიდან გაშვებამდე: ინდივიდუალური დიზაინი, მობილურზე მორგება, SEO და სისწრაფის ოპტიმიზაცია, ტექნიკური მხარდაჭერა.",
});

export default function Page() {
    return (
        <>
            <JsonLd data={breadcrumbSchema([{ name: "ბიზნეს ვებსაიტის დამზადება", path: "/single_services/" }])} />
            <SingleServicePage />
        </>
    );
}
