import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import NewsletterSection from "../../Components/Form/Newsletter";
import BlogSection from "../../Components/Blog/blog";
import TestimonialSection from "../../Components/Testimonial/testimonial";

function TestimonialPage(){
    return(
        <>
            <HeadTitle title="შეფასებები - NOVATECH - ვებსაიტების დამზადება" />
            <BannerInnerSection title="მომხმარებელთა შეფასებები" currentPage="შეფასებები" />
            <TestimonialSection />
            <NewsletterSection />
            <BlogSection />
        </>
    );
}

export default TestimonialPage;