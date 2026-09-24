import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import ProjectsSection from "../../Components/Projects/Projects";
import GuideBannerSection from "../../Components/Banner/guide";

function ProjectsPage(){
    return(
        <>
            <HeadTitle title="პროექტები - NOVATECH - ვებსაიტების დამზადება" />
            <BannerInnerSection />
            <ProjectsSection />
            <GuideBannerSection />
        </>
    );
}

export default ProjectsPage;
