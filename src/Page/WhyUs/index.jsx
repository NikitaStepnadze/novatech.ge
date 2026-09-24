import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import ChooseUsSection from "../../Components/ChooseUs/choose";
import ExpertiseSection from "../../Components/Expertise/expertise";
import ChooseUsAboutSection from "../../Components/ChooseUs/chooseusabout";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import FaqSection from "../../Components/FAQs/faq";

function WhyUsPage(){
    return(
        <>
            <HeadTitle title="რატომ ჩვენ - NOVATECH - ვებსაიტების დამზადება" />
            <BannerInnerSection title="რატომ NOVATECH" currentPage="რატომ ჩვენ" />
            <ChooseUsSection />
            <ExpertiseSection />
            <ChooseUsAboutSection />
            <GuideBannerSection />
            <ModalVideoSection />
            <DigitalProcessSection />
            <TestimonialSection />
            <FaqSection />
        </>
    );
}

export default WhyUsPage;
