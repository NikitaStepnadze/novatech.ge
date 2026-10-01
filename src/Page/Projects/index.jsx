import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import ProjectsSection from "../../Components/Projects/Projects";
import GuideBannerSection from "../../Components/Banner/guide";

function ProjectsPage(){
    return(
        <>
            <BannerInnerSection title="ჩვენ მიერ შექმნილი ვებსაიტები" />
            <ProjectsSection />
            <GuideBannerSection />
        </>
    );
}

export default ProjectsPage;
