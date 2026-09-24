"use client";

import React from "react";
import { socialFeedsData } from "../../Data/SocialFeedsData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import "../Works/works.css";
import "./portfolio.css";

// Profile link and embeddable feed for each platform. Facebook uses the
// official Page Plugin; Instagram and TikTok serve their own profile embeds.
const PLATFORMS = {
    facebook: {
        profile: (handle) => `https://www.facebook.com/${handle}`,
        embed: (handle) =>
            "https://www.facebook.com/plugins/page.php?" +
            new URLSearchParams({
                href: `https://www.facebook.com/${handle}`,
                tabs: "timeline",
                width: "300",
                height: "560",
                small_header: "true",
                adapt_container_width: "true",
                hide_cover: "false",
                show_facepile: "false",
            }),
    },
    instagram: {
        profile: (handle) => `https://www.instagram.com/${handle}/`,
        embed: (handle) => `https://www.instagram.com/${handle}/embed`,
    },
    tiktok: {
        profile: (handle) => `https://www.tiktok.com/@${handle}`,
        embed: (handle) => `https://www.tiktok.com/embed/@${handle}`,
    },
};

function SocialFeedsSection() {
    return (
        <div className="section">
            <div className="works-container">
                <div className="d-flex flex-column gspace-2 works-header">
                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5">
                            <div className="col">
                                <div className="d-flex flex-column gspace-2">
                                    <div className="sub-heading">
                                        <i className="fa-regular fa-circle-dot"></i>
                                        <span>სოციალური ქსელები</span>
                                    </div>
                                    <h2 className="title-heading">გამოგვყევი სოციალურ ქსელებში</h2>
                                </div>
                            </div>
                            <div className="col">
                                <div className="d-flex flex-column h-100 justify-content-end gspace-2">
                                    <p>
                                        აქ ნახავ ჩვენს უახლეს პოსტებს, ვიდეოებს და პროექტების
                                        პრეზენტაციებს. გამოიწერე ჩვენი გვერდები, რომ პირველმა
                                        გაიგო სიახლეები.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>

                <div className="works-grid is-social">
                    {socialFeedsData.map((item, index) => {
                        const platform = PLATFORMS[item.platform];
                        const profileUrl = platform.profile(item.handle);

                        return (
                            <AnimateOnScroll
                                key={item.id}
                                animation="fadeInUp"
                                speed="normal"
                                delay={index * 100}
                            >
                                <figure className="works-item">
                                    <div className="device-frame device-phone">
                                        <div className="device-screen">
                                            <div className="device-bar">
                                                <span className="device-url">
                                                    <i className={`fa-brands ${item.icon}`}></i>{" "}
                                                    {item.handle}
                                                </span>
                                            </div>
                                            <div className="device-feed">
                                                <iframe
                                                    src={platform.embed(item.handle)}
                                                    title={`${item.title} — ${item.handle}`}
                                                    loading="lazy"
                                                    scrolling="yes"
                                                    allow="encrypted-media; clipboard-write; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        </div>
                                        <span className="device-glow" aria-hidden="true"></span>
                                    </div>
                                    <figcaption className="works-item-meta">
                                        <span className="works-item-category">{item.title}</span>
                                        <h5 className="works-item-title">
                                            <a
                                                href={profileUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                @{item.handle}
                                            </a>
                                        </h5>
                                    </figcaption>
                                </figure>
                            </AnimateOnScroll>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SocialFeedsSection;
