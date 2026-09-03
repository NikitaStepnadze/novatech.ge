import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import ServiceSection from "../../Components/Services/service";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import PricingPlanSection from "../../Components/Pricing/Pricing";
import HeadTitle from "../../Components/Head/HeadTitle";

function ServicePage(){
    return(
        <>
            <HeadTitle title="სერვისები - NOVATECH - ვებსაიტების დამზადება" />
            <BannerInnerSection title="ჩვენი სერვისები" currentPage="სერვისები" />
            <ServiceSection />
            <GuideBannerSection />
            <ModalVideoSection />
            <PricingPlanSection />
        </>
    );
}

export default ServicePage;