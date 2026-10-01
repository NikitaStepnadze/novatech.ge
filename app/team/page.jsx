import TeamPage from "../../src/Page/Team";
import JsonLd from "../../src/Components/Seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "../../src/seo/site";

export const metadata = pageMetadata({
    path: "/team/",
    title: "ჩვენი გუნდი — დიზაინერები და დეველოპერები",
    description:
        "გაიცანი NOVATECH-ის გუნდი — ვებ დეველოპერები, UI/UX დიზაინერები, SEO სპეციალისტი და პროექტის მენეჯერი, რომლებიც შენს ვებსაიტზე იმუშავებენ.",
});

export default function Page() {
    return (
        <>
            <JsonLd data={breadcrumbSchema([{ name: "ჩვენი გუნდი", path: "/team/" }])} />
            <TeamPage />
        </>
    );
}
