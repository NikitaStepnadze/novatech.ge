import ProcessPage from "../../src/Page/Process";
import JsonLd from "../../src/Components/Seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "../../src/seo/site";

export const metadata = pageMetadata({
    path: "/process/",
    title: "ვებსაიტის შექმნის პროცესი — ნაბიჯ-ნაბიჯ",
    description:
        "როგორ ვქმნით ვებსაიტს: კონსულტაცია, შეთავაზება და შეთანხმება, სტრუქტურა და დიზაინი, დამზადება და ტესტირება, გაშვება და მხარდაჭერა. გაიგე, რას უნდა ელოდო თითოეულ ეტაპზე.",
});

export default function Page() {
    return (
        <>
            <JsonLd data={breadcrumbSchema([{ name: "სამუშაო პროცესი", path: "/process/" }])} />
            <ProcessPage />
        </>
    );
}
