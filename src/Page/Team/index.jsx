import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import PartnershipSection from "../../Components/Partnership/Partnership";
import ChooseUsSection from "../../Components/ChooseUs/choose";
import TeamExtendSection from "../../Components/Team/TeamExtend";

function TeamPage(){
    return(
        <>
            <HeadTitle title="ჩვენი გუნდი - NOVATECH - ვებსაიტების დამზადება" />
            <BannerInnerSection title="გაიცანი ჩვენი გუნდი" currentPage="ჩვენი გუნდი"/>
            <TeamExtendSection />
            <PartnershipSection />
            <ChooseUsSection />
        </>
    );
}

export default TeamPage;