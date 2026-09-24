import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import ProcessSection from "../../Components/Process/process";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import FaqSection from "../../Components/FAQs/faq";

function ProcessPage(){
    return(
        <>
            <HeadTitle title="სამუშაო პროცესი - NOVATECH - ვებსაიტების დამზადება" />
            <BannerInnerSection title="სამუშაო პროცესი" currentPage="პროცესი"/>
            <ProcessSection />
            <TestimonialSection />
            <FaqSection />
        </>
    );
}

export default ProcessPage;
