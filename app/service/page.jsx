import ServicePage from "../../src/Page/Service";
import JsonLd from "../../src/Components/Seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "../../src/seo/site";

export const metadata = pageMetadata({
    path: "/service/",
    title: "სერვისები — ვებსაიტი, ონლაინ მაღაზია, SEO",
    description:
        "ბიზნეს ვებსაიტი, ონლაინ მაღაზია, UI/UX დიზაინი, ბრენდინგი, SEO ოპტიმიზაცია და ტექნიკური მხარდაჭერა — ყველა ვებ სერვისი ერთ გუნდთან. ფასი 150₾-დან.",
});

export default function Page() {
    return (
        <>
            <JsonLd data={breadcrumbSchema([{ name: "სერვისები", path: "/service/" }])} />
            <ServicePage />
        </>
    );
}
