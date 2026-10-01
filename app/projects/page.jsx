import ProjectsPage from "../../src/Page/Projects";
import JsonLd from "../../src/Components/Seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "../../src/seo/site";

export const metadata = pageMetadata({
    path: "/projects/",
    title: "პროექტები — ჩვენ მიერ შექმნილი ვებსაიტები",
    description:
        "NOVATECH-ის მიერ შექმნილი რეალური ვებსაიტები — სპორტული აკადემიის, კოტეჯებისა და დასასვენებელი სახლების საიტები ონლაინ დაჯავშნით.",
});

export default function Page() {
    return (
        <>
            <JsonLd data={breadcrumbSchema([{ name: "პროექტები", path: "/projects/" }])} />
            <ProjectsPage />
        </>
    );
}
