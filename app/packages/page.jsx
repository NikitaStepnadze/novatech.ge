import PackagesPage from "../../src/Page/Packages";

export const metadata = {
    title: "პაკეტები - NOVATECH - ვებსაიტების დამზადება",
    description:
        "NOVATECH-ის ვებსაიტის პაკეტები — PLUS, PRO, ULTRA და ALL IN. შეადარე ფასები და ფუნქციონალი და აირჩიე შენს ბიზნესზე მორგებული პაკეტი.",
    alternates: { canonical: "https://novatech.ge/packages/" },
};

export default function Page() {
    return <PackagesPage />;
}
