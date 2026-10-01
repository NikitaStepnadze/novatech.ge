import BlogPage from "../../src/Page/Blog";
import JsonLd from "../../src/Components/Seo/JsonLd";
import { pageMetadata, breadcrumbSchema } from "../../src/seo/site";

export const metadata = pageMetadata({
    path: "/blog/",
    title: "ბლოგი — რჩევები ვებსაიტებსა და SEO-ზე",
    description:
        "NOVATECH-ის ბლოგი: პრაქტიკული რჩევები ვებსაიტების, ვებ დიზაინის, SEO-სა და ბიზნესის ონლაინ განვითარების შესახებ.",
});

export default function Page() {
    return (
        <>
            <JsonLd data={breadcrumbSchema([{ name: "ბლოგი", path: "/blog/" }])} />
            <BlogPage />
        </>
    );
}
