"use client";

import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const ChooseUsCard = ({icon, title, content, link, speed}) => {
    
    return (
        <>
            <AnimateOnScroll animation="fadeInRight" speed={speed}>
                <div className="card card-chooseus">
                    <div className="chooseus-icon-wrapper">
                        <div className="chooseus-spacer above"></div>
                            <div className="chooseus-icon-layout">
                                <div className="chooseus-icon">
                                    <img src={icon} alt="რატომ ჩვენ" className="img-fluid"  loading="lazy" decoding="async" />
                                </div>
                            </div>
                        <div className="chooseus-spacer below"></div>
                    </div>
                    <div className="chooseus-content">
                        <h3 className="h4 chooseus-title">{title}</h3>
                        <p>{content}</p>
                        <div className="link-wrapper">
                            <a href={link}>ვრცლად</a>
                            <i className="fa-solid fa-arrow-circle-right accent-color"></i>
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>
        </>
      );
};

export default ChooseUsCard;