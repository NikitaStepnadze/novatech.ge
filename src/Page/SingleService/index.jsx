import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import NewsletterSection from "../../Components/Form/Newsletter";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import FaqSection from "../../Components/FAQs/faq";
import SingleServiceSection from "../../Components/Services/singleservice";

function SingleServicePage(){
    return(
        <>
            <BannerInnerSection title="ბიზნეს ვებსაიტის დამზადება" currentPage="სერვისის დეტალები" />
            <SingleServiceSection />
            <TestimonialSection />
            <NewsletterSection />
            <FaqSection />
        </>
    );
}

export default SingleServicePage;