"use client";

import React from "react";
import { worksData } from "../../Data/WorksData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import DeviceMockup from "../Works/DeviceMockup";
import "../Works/works.css";
import "./projects.css";

// Every project from the home page portfolio, shown on a monitor and a phone at
// once instead of behind the device switch.
function ProjectsSection() {
    return (
        <div className="section">
            <div className="projects-container">
                <AnimateOnScroll animation="fadeInUp" speed="normal">
                    <div className="d-flex flex-column gspace-2 projects-header">
                        <div className="sub-heading">
                            <i className="fa-regular fa-circle-dot"></i>
                            <span>პროექტები</span>
                        </div>
                        <h2 className="title-heading">ჩვენი ნამუშევრები</h2>
                    </div>
                </AnimateOnScroll>

                <div className="projects-list">
                    {worksData.map((item, index) => (
                        <AnimateOnScroll key={item.id} animation="fadeInUp" speed="normal">
                            <article className="project-item">
                                <div className="project-showcase">
                                    <DeviceMockup device="monitor" item={item} />
                                    <DeviceMockup device="phone" item={item} />
                                </div>
                                <div className="project-meta">
                                    <span className="project-index">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span className="works-item-category">{item.category}</span>
                                    <h3 className="project-title">{item.title}</h3>
                                    <div className="project-devices">
                                        <span><i className="fa-solid fa-desktop"></i> მონიტორი</span>
                                        <span><i className="fa-solid fa-mobile-screen-button"></i> მობილური</span>
                                    </div>
                                    <a
                                        href={`https://${item.url}`}
                                        className="btn btn-accent"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="btn-title">
                                            <span>საიტის ნახვა</span>
                                        </div>
                                        <div className="icon-circle">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </a>
                                </div>
                            </article>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectsSection;
