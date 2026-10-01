import AboutPage from "../../src/Page/About";
import JsonLd from "../../src/Components/Seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "../../src/seo/site";

export const metadata = pageMetadata({
    path: "/about/",
    title: "ჩვენ შესახებ — ვებ სააგენტო თბილისში",
    description:
        "გაიცანი NOVATECH — ვებ სააგენტო თბილისში, რომელიც ქმნის სწრაფ, თანამედროვე და Google-ში მოსაძებნ ვებსაიტებს მცირე და საშუალო ბიზნესისთვის.",
});

export default function Page() {
    return (
        <>
            <JsonLd data={breadcrumbSchema([{ name: "ჩვენ შესახებ", path: "/about/" }])} />
            <AboutPage />
        </>
    );
}
