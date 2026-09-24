"use client";

import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import { getPackage, packagePath } from "../../Data/PackagesData";

const plus = getPackage("plus");
const pro = getPackage("pro");
const ultra = getPackage("ultra");
const allIn = getPackage("all-in");

function PricingPlanSection(){
    return(
        <div className="section">
            <div className="hero-container">
                <div className="d-flex flex-column justify-content-center text-center gspace-5">
                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div className="d-flex flex-column gspace-2">
                            <div className="sub-heading align-self-center">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>ჩვენი ფასები</span>
                            </div>
                            <h2 className="title-heading heading-container heading-container-short">
                                მოქნილი პაკეტები ყველა ბიზნესისთვის
                            </h2>
                        </div>
                    </AnimateOnScroll>
                    <div className="row row-cols-lg-3 row-cols-1 grid-spacer-2">
                        <div className="col">
                            <div className="pricing-container">
                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <div className="card card-pricing-title">
                                        <div className="spacer" />
                                        <div className="content">
                                            <h3 className="title-heading">ერთად შევარჩიოთ შენთვის სწორი პაკეტი!</h3>
                                            <div className="link-wrapper">
                                            <a href="/contact">უფასო კონსულტაცია</a>
                                            <i className="fa-solid fa-arrow-circle-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <div className="card card-pricing">
                                        <h4>{plus.name}</h4>
                                        <p>{plus.tagline}</p>
                                        <div className="d-flex flex-row gspace-1 align-items-center h-100">
                                            <h3>{plus.price}₾</h3>
                                            <p className="price-was">{plus.oldPrice}₾</p>
                                        </div>
                                        <a href={packagePath(plus.slug)} className="btn btn-accent">
                                            <div className="btn-title">
                                                <span>დეტალურად</span>
                                            </div>
                                            <div className="icon-circle">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                        <ul className="check-list">
                                            {plus.features.map((feature) => (
                                                <li key={feature.title}><a href={packagePath(plus.slug)}>{feature.title}</a></li>
                                            ))}
                                        </ul>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                        <div className="col">
                            <AnimateOnScroll animation="fadeInUp" speed="slow">
                                <div className="card card-pricing pricing-highlight">
                                    <div className="spacer" />
                                    <h4>{allIn.name}</h4>
                                    <p>{allIn.tagline}</p>
                                    <div className="d-flex flex-row gspace-1 align-items-center">
                                        <h3>{allIn.price}₾</h3>
                                        <p className="price-was">{allIn.oldPrice}₾</p>
                                    </div>
                                    <a href={packagePath(allIn.slug)} className="btn btn-accent">
                                        <div className="btn-title">
                                            <span>დეტალურად</span>
                                        </div>
                                        <div className="icon-circle">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </a>

                                    <div className="core-benefits">
                                        <div className="benefit">
                                            <i className="fa-solid fa-crown"></i>
                                            <a href={packagePath(ultra.slug)}>ყველაფერი რაც {ultra.shortName} პაკეტში</a>
                                        </div>
                                        {allIn.highlights.map((highlight) => (
                                            <div className="benefit" key={highlight.title}>
                                                <i className={`fa-solid ${highlight.icon}`}></i>
                                                <a href={packagePath(allIn.slug)}>{highlight.title}</a>
                                            </div>
                                        ))}
                                    </div>

                                    <ul className="check-list">
                                        {allIn.features.map((feature) => (
                                            <li key={feature.title}><a href={packagePath(allIn.slug)}>{feature.title}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        <div className="col">
                            <div className="pricing-container">
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <div className="card pricing-highlight-box">
                                        <div className="d-flex flex-column gspace-2 w-100">
                                            <h5>გინდა მეტი? აირჩიე {ultra.name} — {ultra.price}₾</h5>
                                            <div className="d-flex flex-column gspace-2">
                                                {ultra.features.map((feature) => (
                                                    <div className="pricing-highlights" key={feature.title}>
                                                        <a href={packagePath(ultra.slug)}>{feature.title}</a>
                                                        <i className="fa-solid fa-arrow-circle-right"></i>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="spacer" />
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <div className="card card-pricing">
                                        <h4>{pro.name}</h4>
                                        <p>{pro.tagline}</p>
                                        <div className="d-flex flex-row gspace-1 align-items-center h-100">
                                            <h3>{pro.price}₾</h3>
                                            <p className="price-was">{pro.oldPrice}₾</p>
                                        </div>
                                        <a href={packagePath(pro.slug)} className="btn btn-accent">
                                            <div className="btn-title">
                                                <span>დეტალურად</span>
                                            </div>
                                            <div className="icon-circle">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                        <ul className="check-list">
                                            <li><a href={packagePath(plus.slug)}>ყველაფერი რაც {plus.shortName} პაკეტში</a></li>
                                            {pro.features.map((feature) => (
                                                <li key={feature.title}><a href={packagePath(pro.slug)}>{feature.title}</a></li>
                                            ))}
                                        </ul>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PricingPlanSection;
