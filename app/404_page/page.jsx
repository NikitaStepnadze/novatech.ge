import NotFoundPage from "../../src/Page/NotFound";
import { pageMetadata } from "../../src/seo/site";

export const metadata = pageMetadata({
    path: "/404_page/",
    title: "გვერდი ვერ მოიძებნა",
    description:
        "მოთხოვნილი გვერდი ვერ მოიძებნა.",
    noindex: true,
});

export default function Page() {
    return <NotFoundPage />;
}
