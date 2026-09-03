import React from "react";
import VideoButton from "../Video/VideoButton";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function BannerHomeSection() {

    return (
        <div className="section-banner">
            <AnimateOnScroll animation="fadeInUp">
                <div className="banner-video-container keep-dark">
                    <video
                        id="banner-video-background"
                        src="/assets/novatech/video/hero.mp4"
                        poster="/assets/novatech/video/hero-poster.webp"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    ></video>
                    <div className="hero-container position-relative">
                        <div className="d-flex flex-column gspace-2">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <h1 className="title-heading-banner">
                                    აიყვანე ბიზნესი ახალ საფეხურზე
                                </h1>
                            </AnimateOnScroll>
                            <div className="banner-heading">

                                <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <div className="banner-video-content order-lg-1 order-2">
                                        <div className="d-flex flex-column flex-lg-row text-lg-start text-center align-items-center gspace-5">
                                            <VideoButton videoUrl="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1" />
                                            <p>
                                                ნახე ჩვენი ვიდეო და გაიგე, როგორ ვეხმარებით ბიზნესებს
                                                ციფრულ განვითარებაში.
                                            </p>
                                        </div>
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <div className="banner-content order-lg-2 order-1">
                                        <p>
                                            NOVATECH-ში ვქმნით ვებსაიტებს, რომლებიც შენს ბრენდს უფრო
                                            პროფესიონალურად წარმოაჩენს და მომხმარებელს შენამდე მისვლას
                                            გაუმარტივებს. შენი იდეა, ჩვენი ტექნოლოგია.
                                        </p>
                                        <div className="d-flex flex-md-row flex-column justify-content-center justify-content-lg-start align-self-center align-self-lg-start gspace-3">
                                            <a href="./about" className="btn btn-accent">
                                                <div className="btn-title">
                                                    <span>დაიწყე ახლა</span>
                                                </div>
                                                <div className="icon-circle">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </a>
                                            <div className="banner-reviewer">
                                                <div className="d-flex flex-row align-items-center">
                                                    <img src="/assets/novatech/img/avatar-1.webp" alt="შემფასებელი" className="avatar" />
                                                    <img src="/assets/novatech/img/avatar-2.webp" alt="შემფასებელი" className="avatar" />
                                                    <img src="/assets/novatech/img/avatar-3.webp" alt="შემფასებელი" className="avatar" />
                                                </div>
                                                <div className="detail">
                                                    <span>2.7k დადებითი</span>
                                                    <span>შეფასება</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                    </div>
                </div>  
            </AnimateOnScroll>
        </div>
    );
}

export default BannerHomeSection;