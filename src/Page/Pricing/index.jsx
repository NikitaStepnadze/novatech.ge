import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import PricingPlanSection from "../../Components/Pricing/Pricing";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";
import ChooseUsSection from "../../Components/ChooseUs/choose";

function PricingPage(){
    return(
        <>
            <BannerInnerSection title="ვებსაიტის დამზადების ფასები" currentPage="ფასები" />
            <PricingPlanSection />
            <DigitalProcessSection />
            <ChooseUsSection />
        </>
    );
}

export default PricingPage;