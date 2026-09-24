import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import PackageDetailSection from "../../Components/Packages/PackageDetail";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import FaqSection from "../../Components/FAQs/faq";

function PackageDetailPage({ pkg }){
    return(
        <>
            <BannerInnerSection title={pkg.name} currentPage="პაკეტის დეტალები" />
            <PackageDetailSection slug={pkg.slug} />
            <DigitalProcessSection />
            <TestimonialSection />
            <FaqSection />
        </>
    );
}

export default PackageDetailPage;
