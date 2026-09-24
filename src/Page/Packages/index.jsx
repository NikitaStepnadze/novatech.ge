import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import PricingPlanSection from "../../Components/Pricing/Pricing";
import PackageCompareSection from "../../Components/Packages/PackageCompare";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";
import FaqSection from "../../Components/FAQs/faq";

function PackagesPage(){
    return(
        <>
            <BannerInnerSection title="პაკეტები" currentPage="პაკეტები" />
            <PricingPlanSection />
            <PackageCompareSection />
            <DigitalProcessSection />
            <FaqSection />
        </>
    );
}

export default PackagesPage;
