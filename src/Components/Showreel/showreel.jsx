import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import "./showreel.css";

const HIGHLIGHTS = [
    {
        icon: "/assets/novatech/icons/deployment.webp",
        title: "სწრაფი გაშვება",
        content: "პირველი ვერსია რამდენიმე დღეში ონლაინ.",
    },
    {
        icon: "/assets/novatech/icons/responsive.webp",
        title: "ყველა ეკრანზე",
        content: "მობილური, ტაბლეტი და დესკტოპი — ერთნაირად გამართული.",
    },
    {
        icon: "/assets/novatech/icons/performance.webp",
        title: "სისწრაფე და SEO",
        content: "ოპტიმიზებული კოდი, რომ ძიებაში მაღლა იდგე.",
    },
];

function ShowreelSection() {
    const videoRef = useRef(null);
    const [muted, setMuted] = useState(true);
    // Hold the source back until the section is close, so the clip does not
    // compete with the hero for bandwidth on first paint.
    const { ref: stageRef, inView } = useInView({ triggerOnce: true, rootMargin: "600px" });

    // Autoplay only survives while the track is muted, so sound is opt-in and
    // the toggle doubles as the play control if the browser blocked playback.
    const toggleSound = () => {
        const video = videoRef.current;
        if (!video) return;
        const next = !muted;
        video.muted = next;
        setMuted(next);
        if (!next) video.play().catch(() => {});
    };

    return (
        <div className="section section-showreel">
            <div className="hero-container">
                <div className="showreel-layout">
                    <AnimateOnScroll animation="fadeInDown" speed="normal">
                        <div className="d-flex flex-column justify-content-center text-center gspace-2">
                            <div className="sub-heading align-self-center">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>ჩვენი ისტორია ერთ წუთში</span>
                            </div>
                            <h2 className="title-heading heading-container heading-container-medium">
                                ვებსაიტი ჯერ კიდევ არ გაქვს?
                            </h2>
                            <p className="showreel-lead">
                                ნახე, როგორ ვაქცევთ იდეას ციფრულ პროდუქტად — და დაიწყე შენი
                                ბიზნესის ონლაინ ზრდა დღესვე.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div className="showreel-stage">
                            <img
                                src="/assets/novatech/icons/web-development.webp"
                                alt=""
                                aria-hidden="true"
                                className="showreel-float showreel-float-left"
                                loading="lazy"
                            />
                            <img
                                src="/assets/novatech/icons/analytics.webp"
                                alt=""
                                aria-hidden="true"
                                className="showreel-float showreel-float-right"
                                loading="lazy"
                            />
                            <div className="showreel-frame" ref={stageRef}>
                                <video
                                    ref={videoRef}
                                    className="showreel-video"
                                    src={inView ? "/assets/novatech/video/color.mp4" : undefined}
                                    poster="/assets/novatech/video/color-poster.webp"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="none"
                                />
                                <button
                                    type="button"
                                    className="showreel-sound"
                                    onClick={toggleSound}
                                    aria-pressed={!muted}
                                    aria-label={muted ? "ხმის ჩართვა" : "ხმის გამორთვა"}
                                    title={muted ? "ხმის ჩართვა" : "ხმის გამორთვა"}
                                >
                                    <i
                                        className={`fa-solid ${
                                            muted ? "fa-volume-xmark" : "fa-volume-high"
                                        }`}
                                    ></i>
                                </button>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    <div className="showreel-highlights">
                        {HIGHLIGHTS.map((item, index) => (
                            <AnimateOnScroll
                                key={item.title}
                                animation="fadeInUp"
                                speed="normal"
                                delay={index * 120}
                            >
                                <div className="card showreel-point">
                                    <div className="showreel-point-icon">
                                        <img src={item.icon} alt="" aria-hidden="true" loading="lazy" />
                                    </div>
                                    <div className="d-flex flex-column gspace-1">
                                        <h5>{item.title}</h5>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowreelSection;
