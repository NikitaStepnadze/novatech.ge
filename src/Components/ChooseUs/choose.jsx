"use client";

import React, { useEffect, useState } from "react";
import { whychooseus } from "../../Data/ChooseUsData";
import ChooseUsCard from "../Card/ChoooseUsCard";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import LazyVideo from "../Hooks/LazyVideo";

// Safari (and every iOS browser, which all run WebKit) plays VP9 WebM but drops
// its alpha channel, so the transparent portal would sit in a black box there.
// Those visitors get the transparent still instead.
function supportsAlphaWebm(){
    const ua = navigator.userAgent;
    const isWebKitOnly = /AppleWebKit/.test(ua) && !/Chrome|Chromium|Edg|Android/.test(ua);
    const isIOS = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    return !isWebKitOnly && !isIOS;
}

function ChooseUsSection(){
    const [alphaVideo, setAlphaVideo] = useState(true);

    useEffect(() => {
        setAlphaVideo(supportsAlphaWebm());
    }, []);

    return(
        <>
            <div className="section">
                <div className="hero-container">
                    <div className="d-flex flex-column flex-lg-row gspace-5">
                        <div className="chooseus-card-container">
                            <div className="d-flex flex-column gspace-2">
                                {whychooseus.slice(0, 3).map((item) => (
                                    <ChooseUsCard 
                                        key={item.id}
                                        icon={item.icon}
                                        title={item.title}
                                        content={item.content}
                                        link={item.link}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="chooseus-content-container">
                            <div className="d-flex flex-column gspace-5">
                                <AnimateOnScroll animation="fadeInDown" speed="normal">
                                    <div className="d-flex flex-column gspace-2">
                                        <div className="sub-heading">
                                            <i className="fa-regular fa-circle-dot"></i>
                                            <span>რატომ NOVATECH</span>
                                        </div>
                                        <h2 className="title-heading">შენი წარმატება ჩვენი მიზანია</h2>
                                        <p className="mb-0">დღეს ვებსაიტი ბიზნესის ერთ-ერთი მთავარი ციფრული ინსტრუმენტია. NOVATECH-ში ვქმნით ვებსაიტებს, რომლებიც არა მხოლოდ ლამაზად გამოიყურება, არამედ ბიზნესის მიზნებზეა მორგებული.</p>
                                    </div>
                                </AnimateOnScroll>
                                <div className="image-container">
                                    {alphaVideo ? (
                                        <LazyVideo
                                            className="chooseus-img chooseus-video"
                                            src="/assets/novatech/video/portal.webm"
                                            poster="/assets/novatech/video/portal-poster.webp"
                                            aria-label="რატომ ჩვენ"
                                        />
                                    ) : (
                                        <img src="/assets/novatech/video/portal-poster.webp" alt="რატომ ჩვენ" className="chooseus-img chooseus-video" loading="lazy" decoding="async" />
                                    )}
                                    <div className="card-chooseus-cta-layout">
                                        <div className="chooseus-cta-spacer"></div>
                                        <div className="d-flex flex-column align-items-end">
                                            <div className="chooseus-cta-spacer"></div>
                                            <div className="card-chooseus-cta-wrapper">
                                                <AnimateOnScroll animation="fadeInUp" speed="normal">

                                                    <div className="card card-chooseus-cta">
                                                        <h5>ერთად შევქმნათ თქვენი ბიზნესის ციფრული მომავალი.</h5>
                                                        <div className="link-wrapper">
                                                            <a href="./contact">დაგვიკავშირდი</a>
                                                            <i className="fa-solid fa-circle-arrow-right"></i>
                                                        </div>
                                                    </div>
                                                </AnimateOnScroll>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ChooseUsSection;