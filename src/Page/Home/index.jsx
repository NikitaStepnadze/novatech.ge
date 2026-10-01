import React from "react";
import BannerHomeSection from "../../Components/Banner";
import ExpertiseSection from "../../Components/Expertise/expertise";
import ChooseUsSection from "../../Components/ChooseUs/choose";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import ServiceSection from "../../Components/Services/service";
import CaseStudiesSection from "../../Components/CaseStudies/CaseStudies";
import WorksSection from "../../Components/Works/Works";
import ShowreelSection from "../../Components/Showreel/showreel";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";
import PricingPlanSection from "../../Components/Pricing/Pricing";
import PartnershipSection from "../../Components/Partnership/Partnership";
import NewsletterSection from "../../Components/Form/Newsletter";
import BlogSection from "../../Components/Blog/blog";

function HomePage(){
    return(
        <>
            <BannerHomeSection />
            <ExpertiseSection />
            <PartnershipSection />
            <ServiceSection />
            <PricingPlanSection />
            <GuideBannerSection />
            <ModalVideoSection />
            <WorksSection />
            <ShowreelSection />
            <ChooseUsSection />
            <TestimonialSection />
            <DigitalProcessSection />
            <NewsletterSection />
            <BlogSection />
            <CaseStudiesSection noPadding={true} />
        </>
    );
}

export default HomePage;