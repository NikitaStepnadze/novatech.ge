import React from "react";
import { whychooseus } from "../../Data/ChooseUsData";
import ChooseUsCard from "../Card/ChoooseUsCard";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function ChooseUsSection(){
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
                                    <img src="/assets/novatech/img/chooseus.webp" alt="რატომ ჩვენ" className="chooseus-img"  loading="lazy" decoding="async" />
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