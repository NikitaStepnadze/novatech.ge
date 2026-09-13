"use client";

import React from "react";
import { services } from "../../Data/ServiceData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const SingleServiceSection = () => {
    return (
        <div className="section pb-0">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-5">
                    <div className="image-container">
                        <img
                        src="/assets/novatech/img/service-hero.webp"
                        alt="სერვისი"
                        className="single-service-img"  loading="lazy" decoding="async" />
                        <div className="single-service-title-layout">
                            <div>
                                <div className="single-service-spacer"></div>
                                <div className="single-service-title-wrapper">
                                    <div className="single-service-title">
                                        <AnimateOnScroll animation="fadeInRight" speed="slow">
                                            <div className="sub-heading">
                                                <i className="fa-regular fa-circle-dot"></i>
                                                <span>ჩვენი სერვისი</span>
                                            </div>
                                        </AnimateOnScroll>
                                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                                            <h3 className="title-heading">
                                                პროფესიონალური ვებსაიტი, რომელიც შენს ბიზნესს სჭირდება
                                            </h3>
                                        </AnimateOnScroll>
                                        <p>
                                            პირველი შთაბეჭდილება ონლაინ იწყება. ვქმნით ვებსაიტებს, რომლებიც შენს ბრენდს პროფესიონალურად წარმოაჩენს, მომხმარებელს შენამდე მისვლას გაუმარტივებს და ბიზნესს ზრდის შესაძლებლობას მისცემს.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="single-service-spacer"></div>
                        </div>
                    </div>

                    <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5">
                        <div className="col col-lg-8">
                            <div className="d-flex flex-column gspace-2">
                                <h4>მიმოხილვა</h4>
                                <p>
                                    NOVATECH-ში ვქმნით ვებსაიტებს, რომლებიც ზუსტად შენი ბიზნესის საჭიროებებზეა მორგებული. დიზაინიდან გაშვებამდე ვზრუნავთ იმაზე, რომ საიტი იყოს სწრაფი, გამართული და ყველა მოწყობილობაზე მორგებული. სულ ერთია, ახალ ბრენდს იწყებ თუ არსებულს ავითარებ — ჩვენ ვქმნით ციფრულ გამოცდილებას, რომელიც ბიზნესს რეალურ შედეგს მოუტანს.
                                </p>
                                <div className="row row-cols-md-2 row-cols-1 grid-spacer-2 grid-spacer-md-3">
                                    <div className="col">
                                        <div className="image-container">
                                        <img
                                            src="/assets/novatech/img/service-1.webp"
                                            alt="სერვისი"
                                            className="img-fluid"  loading="lazy" decoding="async" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="image-container">
                                        <img
                                            src="/assets/novatech/img/service-2.webp"
                                            alt="სერვისი"
                                            className="img-fluid"  loading="lazy" decoding="async" />
                                        </div>
                                    </div>
                                </div>

                                <div className="card service-included">
                                    <h4>რას მოიცავს</h4>
                                    <div className="underline-accent-short"></div>
                                    <p>
                                        ყოველი პროექტი მოიცავს სრულ ციკლს — იდეის განხილვიდან ვებსაიტის გაშვებამდე და შემდგომ მხარდაჭერამდე.
                                    </p>
                                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                                        <div className="col">
                                            <ul className="check-list">
                                                <li>სტრუქტურის დაგეგმვა</li>
                                                <li>ინდივიდუალური დიზაინი</li>
                                                <li>მობილურზე მორგებული ვერსია</li>
                                                <li>კონტენტის განთავსება</li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <ul className="check-list">
                                                <li>SEO ოპტიმიზაცია</li>
                                                <li>სისწრაფის ოპტიმიზაცია</li>
                                                <li>ტექნიკური მხარდაჭერა</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <h4>რატომ NOVATECH?</h4>
                                <p>
                                    ვქმნით ვებსაიტებს, რომლებიც არა მხოლოდ ლამაზად გამოიყურება, არამედ ბიზნესის მიზნებზეა მორგებული.
                                </p>

                                <div className="row row-cols-2">
                                    <div className="col">
                                        <div className="d-flex flex-column gspace-2">
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>შედეგზე ორიენტირებული</h5>
                                                    <p>ვქმნით საიტს, რომელიც რეალურ შედეგს მოიტანს</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>გამოცდილი გუნდი</h5>
                                                    <p>სპეციალისტები დიზაინსა და დეველოპმენტში</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex flex-column gspace-2">
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>ინდივიდუალური მიდგომა</h5>
                                                    <p>ვქმნით ზუსტად შენს ბრენდზე მორგებულს</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>სისწრაფე და SEO</h5>
                                                    <p>სწრაფი საიტი, რომელსაც Google-იც აფასებს</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4">
                            <div className="d-flex flex-column flex-md-row flex-lg-column justify-content-between gspace-5">
                                <div className="card service-recent">
                                <h4>ჩვენი სერვისები</h4>
                                <div className="underline-accent-short"></div>
                                <ul className="single-service-list">
                                    {services.map((service) => (
                                        <li key={service.id}>
                                        <a href={service.link} className="hover:underline">
                                            {service.title}
                                        </a>
                                        </li>
                                    ))}
                                </ul>
                                </div>
                                <div className="cta-service-banner">
                                    <div className="spacer"></div>
                                    <h3 className="title-heading">აიყვანე ბიზნესი ახალ საფეხურზე!</h3>
                                    <p>
                                        შენი იდეა. ჩვენი ტექნოლოგია. ერთად — ციფრული მომავალი. მოგვწერე და დაიწყე შენი ვებსაიტის შექმნა.
                                    </p>
                                    <div className="link-wrapper">
                                        <a href="about">ვრცლად</a>
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceSection;