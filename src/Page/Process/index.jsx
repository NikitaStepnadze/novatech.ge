import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import ProcessSection from "../../Components/Process/process";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import FaqSection from "../../Components/FAQs/faq";

function ProcessPage(){
    return(
        <>
            <BannerInnerSection title="ვებსაიტის შექმნის პროცესი" currentPage="პროცესი"/>
            <ProcessSection />
            <TestimonialSection />
            <FaqSection />
        </>
    );
}

export default ProcessPage;
