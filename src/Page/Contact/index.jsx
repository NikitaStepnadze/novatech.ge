import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import ContactSection from "../../Components/Contact/contact";
import MapsSection from "../../Components/Maps/map";

function ContactPage(){
    return(
        <>
            <HeadTitle title="კონტაქტი - NOVATECH - ვებსაიტების დამზადება" />
            <BannerInnerSection title="დაგვიკავშირდი" currentPage="კონტაქტი" />
            <ContactSection />
            <MapsSection />
        </>
    );
}

export default ContactPage;