import TestimonialPage from "../../src/Page/Testimonial";
import JsonLd from "../../src/Components/Seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "../../src/seo/site";

export const metadata = pageMetadata({
    path: "/testimonial/",
    title: "მომხმარებელთა შეფასებები",
    description:
        "რას ამბობენ კლიენტები NOVATECH-ზე — შეფასებები ვებსაიტების, ონლაინ მაღაზიებისა და დიზაინის შესახებ.",
});

export default function Page() {
    return (
        <>
            <JsonLd data={breadcrumbSchema([{ name: "შეფასებები", path: "/testimonial/" }])} />
            <TestimonialPage />
        </>
    );
}
