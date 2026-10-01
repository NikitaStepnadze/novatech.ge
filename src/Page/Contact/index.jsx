import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import ContactSection from "../../Components/Contact/contact";
import MapsSection from "../../Components/Maps/map";

function ContactPage(){
    return(
        <>
            <BannerInnerSection title="დაგვიკავშირდი — NOVATECH კონტაქტი" currentPage="კონტაქტი" />
            <ContactSection />
            <MapsSection />
        </>
    );
}

export default ContactPage;