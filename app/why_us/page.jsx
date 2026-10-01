import WhyUsPage from "../../src/Page/WhyUs";
import JsonLd from "../../src/Components/Seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "../../src/seo/site";

export const metadata = pageMetadata({
    path: "/why_us/",
    title: "რატომ NOVATECH — რით გამოვირჩევით",
    description:
        "რატომ ირჩევენ NOVATECH-ს: ინდივიდუალური დიზაინი, სწრაფი და SEO-სთვის მომზადებული საიტები, გამჭვირვალე ფასები და მხარდაჭერა გაშვების შემდეგაც.",
});

export default function Page() {
    return (
        <>
            <JsonLd data={breadcrumbSchema([{ name: "რატომ ჩვენ", path: "/why_us/" }])} />
            <WhyUsPage />
        </>
    );
}
