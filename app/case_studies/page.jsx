import CaseStudiesPage from "../../src/Page/CaseStudies";
import JsonLd from "../../src/Components/Seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "../../src/seo/site";

export const metadata = pageMetadata({
    path: "/case_studies/",
    title: "პორტფოლიო — შესრულებული სამუშაოები",
    description:
        "NOVATECH-ის პორტფოლიო: ბიზნეს ვებსაიტები, ონლაინ მაღაზიები, რედიზაინი და ბრენდინგი. ნახე ჩვენი ნამუშევრები და სოციალური ქსელები.",
});

export default function Page() {
    return (
        <>
            <JsonLd data={breadcrumbSchema([{ name: "პორტფოლიო", path: "/case_studies/" }])} />
            <CaseStudiesPage />
        </>
    );
}
