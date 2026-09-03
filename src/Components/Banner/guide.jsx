import React from "react";
import VideoButton from "../Video/VideoButton";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import SplineBackground from "../Spline/SplineBackground";

function GuideBannerSection(){
    return(
        <>
            <div className="section-guide">
                <div className="guide-banner">
                    <SplineBackground />
                    <div className="hero-container">
                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <div className="guide-content">
                                <div className="guide-video-container">
                                    <VideoButton videoUrl="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1" />
                                    <p>ნახე, როგორ ვეხმარებით ბრენდებს ზრდაში</p>
                                </div>
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">აიყვანე ბიზნესი ახალ საფეხურზე NOVATECH-თან ერთად!</h3>
                                    <p>შექმენი თანამედროვე ვებსაიტი, რომელიც აძლიერებს ბრენდს, მუშაობს ყველა მოწყობილობაზე და გეხმარება მეტი მომხმარებლის მოზიდვაში. ერთად შევქმნათ შენი ბიზნესის ციფრული მომავალი!</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GuideBannerSection;