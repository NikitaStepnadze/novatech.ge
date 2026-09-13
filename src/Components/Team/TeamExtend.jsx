"use client";

import React from "react";
import { teamData } from "../../Data/TeamData";
import TeamCard from "../Card/TeamCard";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const TeamExtendSection = () => {

    return (
        <div className="section">
            <div className="hero-container">
                <div className="team-wrapper">
                    <div className="card team-layout">
                        <AnimateOnScroll animation="fadeInLeft" speed="normal">
                            <div className="d-flex flex-column align-items-center gspace-2">
                                <div className="sub-heading">
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>ჩვენი გუნდი</span>
                                </div>
                                <h2 className="title-heading">
                                    გაიცანი გუნდი, რომელიც შენს იდეას აცოცხლებს
                                </h2>
                            </div>
                        </AnimateOnScroll>

                        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 grid-spacer-2">
                            {teamData.slice(0, 6).map((member) => (
                                <TeamCard key={member.id} {...member} />
                            ))}
                        </div>

                        <div className="spacer"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamExtendSection;