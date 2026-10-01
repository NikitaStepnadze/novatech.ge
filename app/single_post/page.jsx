import SinglePostPage from "../../src/Page/SinglePost";
import JsonLd from "../../src/Components/Seo/JsonLd";
import { pageMetadata, breadcrumbSchema, absoluteUrl, SITE_URL, LOGO_URL } from "../../src/seo/site";

const PATH = "/single_post/";
const TITLE = "რატომ სჭირდება ბიზნესს ვებსაიტი?";
const DESCRIPTION =
    "ვებსაიტი ბიზნესის მთავარი ციფრული ინსტრუმენტია — მუშაობს 24/7, ზრდის ნდობას და SEO-ს დახმარებით ახალ მომხმარებლებს მოგიყვანს. გაიგე, რატომ არის ის ინვესტიცია და არა ხარჯი.";

export const metadata = pageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

// Matches the date and author printed on the article itself.
const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    image: `${SITE_URL}/assets/novatech/img/post-hero.webp`,
    datePublished: "2025-03-27",
    inLanguage: "ka",
    mainEntityOfPage: absoluteUrl(PATH),
    author: { "@type": "Organization", name: "NOVATECH", url: `${SITE_URL}/` },
    publisher: {
        "@type": "Organization",
        name: "NOVATECH",
        logo: { "@type": "ImageObject", url: LOGO_URL },
    },
};

export default function Page() {
    return (
        <>
            <JsonLd data={articleSchema} />
            <JsonLd
                data={breadcrumbSchema([
                    { name: "ბლოგი", path: "/blog/" },
                    { name: TITLE, path: PATH },
                ])}
            />
            <SinglePostPage />
        </>
    );
}
