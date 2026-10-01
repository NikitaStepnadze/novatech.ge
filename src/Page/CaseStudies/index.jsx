import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import CaseStudiesSection from "../../Components/CaseStudies/CaseStudies";
import SocialFeedsSection from "../../Components/Portfolio/SocialFeeds";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import TestimonialSection from "../../Components/Testimonial/testimonial";

function CaseStudiesPage(){
    return(
        <>
            <BannerInnerSection title="პორტფოლიო — ჩვენი პროექტები" currentPage="პორტფოლიო"/>
            <CaseStudiesSection />
            <SocialFeedsSection />
            <GuideBannerSection />
            <ModalVideoSection />
            <TestimonialSection />
        </>
    );
}

export default CaseStudiesPage;