"use client";

import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";
import LazyVideo from "../Hooks/LazyVideo";
import AlphaVideo from "../Hooks/AlphaVideo";

function ExpertiseSection(){

    return(
        <>
           <div className="section">
                <div className="hero-container">
                    <div className="d-flex flex-column flex-lg-row gspace-5">
                        <div className="expertise-img-layout">
                            <div className="image-container expertise-img">
                                <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <div className="expertise-media">
                                        <LazyVideo
                                            className="expertise-video"
                                            src="/assets/novatech/video/expertise.mp4"
                                            poster="/assets/novatech/video/expertise-poster.webp"
                                            aria-label="ჩვენი გამოცდილება"
                                        />
                                    </div>
                                </AnimateOnScroll>
                                <div className="expertise-layout">
                                    <div className="d-flex flex-column">
                                        <div className="card-expertise-wrapper">
                                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                                <div className="card card-expertise">
                                                    <div className="h4">მზად ხარ ციფრული ნაბიჯისთვის?</div>
                                                    <p>ვქმნით ვებსაიტს, რომელიც ზუსტად შენი ბიზნესის მოთხოვნებს მოერგება.</p>
                                                    <div className="d-flex align-items-center flex-row gspace-2 expertise-link">
                                                        <a href="/contact/">უფასო კონსულტაცია</a>
                                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                                    </div>
                                                </div>
                                            </AnimateOnScroll>
                                        </div>
                                    <div className="expertise-spacer"></div>
                                        </div>
                                    <div className="expertise-spacer"></div>
                                </div>
                            </div>
                        </div>
                        <div className="expertise-title">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div className="sub-heading">
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>ჩვენი გამოცდილება</span>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <h2 className="title-heading">
                                    პროფესიონალური ვებსაიტი, ათასობით შესაძლებლობა
                                </h2>
                            </AnimateOnScroll>
                            <p>
                                NOVATECH-ში ვქმნით თანამედროვე,სწრაფ და ბიზნესის განვითარებაზე ორიენტირებულ ვებსაიტებს, რომლებიც არა მხოლოდ ლამაზად გამოიყურება, არამედ ბიზნესის
                                რეალურ მიზნებზეა მორგებული.
                            </p>
                            <div className="d-flex flex-column flex-md-row gspace-2">
                                <div className="expertise-list">
                                    <h3 className="h5">რას ვაკეთებთ საუკეთესოდ</h3>
                                    <ul className="check-list">
                                        <li><a href="/single_services/">ბიზნეს ვებსაიტი</a></li>
                                        <li><a href="/single_services/">ონლაინ მაღაზია</a></li>
                                        <li><a href="/single_services/">UI/UX დიზაინი</a></li>
                                        <li><a href="/single_services/">ტექნიკური მხარდაჭერა</a></li>
                                        <li><a href="/single_services/">3D ელემნტები</a></li>
                                        <li><a href="/single_services/">სისწრაფე და SEO</a></li>
                                    </ul>
                                </div>

                                <AnimateOnScroll animation="fadeInUp">
                                    <div className="card card-expertise card-expertise-counter animate-box">
                                        <div className="d-flex flex-row gspace-2 align-items-center">
                                            <div className="d-flex flex-row align-items-center expertise-counter-anchor">
                                            <AlphaVideo
                                                className="expertise-counter-portal"
                                                src="/assets/novatech/video/expertise-portal.webm"
                                                poster="/assets/novatech/video/expertise-portal-poster.webp"
                                            />
                                            <CounterOnScroll
                                                target={21}
                                                suffix="+"
                                                counterClassName="counter"
                                                suffixClassName="counter-detail"
                                            />
                                            </div>
                                            <div className="h6">წარმატებით დასრულებული ციფრული პროექტი</div>
                                        </div>
                                        <p>
                                            ყოველი პროექტი ჩვენთვის ახალი გამოწვევაა - ვქმნით ვებსაიტებს, რომლებიც ბიზნესს რეალურ შედეგს მოუტანს.
                                        </p>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ExpertiseSection;
