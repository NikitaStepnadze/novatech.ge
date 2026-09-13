"use client";

import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function AboutSection(){

    return(
        <div className="section">
            <div className="hero-container">
                <div className="d-flex flex-column flex-lg-row gspace-5">
                    <div className="about-img-layout">
                        <div className="image-container about-img">
                            <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <img
                                src="/assets/novatech/img/about.webp"
                                alt="ჩვენ შესახებ"
                                className="img-fluid"  loading="lazy" decoding="async" />
                            </AnimateOnScroll>
                        
                            <div className="about-layout">
                                <div className="d-flex flex-column">
                                    <div className="card-about-wrapper">
                                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                                            <div
                                                className="card card-about"
                                                >
                                                <div className="d-flex flex-row align-items-center">
                                                    <span className="counter" data-target="21"></span>
                                                    <span className="counter-detail">+</span>
                                                </div>
                                                <h6>წარმატებით დასრულებული ციფრული პროექტი</h6>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                <div className="about-spacer"></div>
                                </div>
                                <div className="about-spacer"></div>
                            </div>
                        </div>
                    </div>
                    <div className="about-title">
                        <div className="d-flex flex-column gspace-2">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div
                                    className="sub-heading"
                                >
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>ჩვენ შესახებ</span>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <h2 className="title-heading">ვინ ვართ ჩვენ და რა გვამოძრავებს</h2>
                            </AnimateOnScroll>

                            <p>
                                NOVATECH-ში ვქმნით ვებსაიტებს, რომლებიც შექმნილია იმისთვის, რომ შენი ბრენდი
                                უფრო პროფესიონალურად წარმოაჩინოს და მომხმარებელს შენამდე მისვლა
                                გაუმარტივოს.
                            </p>
                            <p>
                                გაიცანი გუნდი, რომელიც შენს იდეას ეკრანზე აცოცხლებს, და ღირებულებები,
                                რომლებიც ჩვენს ყოველდღიურ მუშაობას წარმართავს.
                            </p>

                            <div className="d-flex flex-column flex-md-row gspace-1 gspace-md-5">
                                <div className="about-list">
                                    <ul className="check-list">
                                        <li><a href="./single_services">ბიზნეს ვებსაიტი</a></li>
                                        <li><a href="./single_services">ონლაინ მაღაზია</a></li>
                                        <li><a href="./single_services">UI/UX დიზაინი</a></li>
                                    </ul>
                                </div>

                                <div className="about-list">
                                    <ul className="check-list">
                                        <li><a href="./single_services">ტექნიკური მხარდაჭერა</a></li>
                                        <li><a href="./single_services">ბრენდინგი</a></li>
                                        <li><a href="./single_services">სისწრაფე და SEO</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>

    );
}

export default AboutSection;