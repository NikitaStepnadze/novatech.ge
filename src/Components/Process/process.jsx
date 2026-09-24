"use client";

import React from "react";
import { services } from "../../Data/ServiceData";
import { processSteps, processDeliverables } from "../../Data/ProcessData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const advantages = [
    [
        { title: "წინასწარ შეთანხმებული ფასი", content: "ფასი და ვადები ცნობილია მუშაობის დაწყებამდე" },
        { title: "გამჭვირვალე პროცესი", content: "ყოველ ეტაპზე იცი, რა ხდება შენს პროექტზე" },
    ],
    [
        { title: "შენი დასტური ყოველ ეტაპზე", content: "საიტი არ ეშვება შენი თანხმობის გარეშე" },
        { title: "მხარდაჭერა გაშვების შემდეგ", content: "გაშვებით ჩვენი თანამშრომლობა არ მთავრდება" },
    ],
];

const ProcessSection = () => {
    return (
        <div className="section pb-0">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-5">
                    <div className="image-container">
                        <img
                        src="/assets/novatech/img/service-hero.webp"
                        alt="სამუშაო პროცესი"
                        className="single-service-img"  loading="lazy" decoding="async" />
                        <div className="single-service-title-layout">
                            <div>
                                <div className="single-service-spacer"></div>
                                <div className="single-service-title-wrapper">
                                    <div className="single-service-title">
                                        <AnimateOnScroll animation="fadeInRight" speed="slow">
                                            <div className="sub-heading">
                                                <i className="fa-regular fa-circle-dot"></i>
                                                <span>სამუშაო პროცესი</span>
                                            </div>
                                        </AnimateOnScroll>
                                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                                            <h3 className="title-heading">
                                                როგორ ვქმნით შენს ვებსაიტს
                                            </h3>
                                        </AnimateOnScroll>
                                        <p>
                                            პირველი ზარიდან საიტის გაშვებამდე — ყველა ნაბიჯი წინასწარ ცნობილია. ქვემოთ ნახავ, როგორ მიმდინარეობს შეკვეთა და რას მიიღებ პროექტის ბოლოს.
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
                                    ვებსაიტის შეკვეთა მარტივია: დაგვიკავშირდები, ერთად განვსაზღვრავთ რა გჭირდება, შევთანხმდებით ფასსა და ვადებზე, დანარჩენს კი ჩვენ მივხედავთ. ყოველ ეტაპზე გიზიარებთ შედეგს და მხოლოდ შენი დასტურის შემდეგ გადავდივართ შემდეგზე.
                                </p>

                                {processSteps.map((item) => (
                                    <React.Fragment key={item.id}>
                                        <h4>{item.step}. {item.title}</h4>
                                        <p>{item.content}</p>
                                    </React.Fragment>
                                ))}

                                <div className="card service-included">
                                    <h4>რას მიიღებ</h4>
                                    <div className="underline-accent-short"></div>
                                    <p>
                                        პროექტის ბოლოს მიიღებ სრულად გამართულ, ონლაინ გაშვებულ ვებსაიტს. ზუსტი ჩამონათვალი დამოკიდებულია არჩეულ პაკეტზე — დეტალები იხილე <a href="/pricing">ფასების გვერდზე</a>.
                                    </p>
                                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                                        {processDeliverables.map((list, index) => (
                                            <div className="col" key={index}>
                                                <ul className="check-list">
                                                    {list.map((item) => (
                                                        <li key={item}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <h4>რატომ NOVATECH?</h4>
                                <p>
                                    ვმუშაობთ ისე, რომ შეკვეთის პროცესი შენთვის იყოს მარტივი, გასაგები და პროგნოზირებადი.
                                </p>

                                <div className="row row-cols-2">
                                    {advantages.map((column, index) => (
                                        <div className="col" key={index}>
                                            <div className="d-flex flex-column gspace-2">
                                                {column.map((item) => (
                                                    <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1" key={item.title}>
                                                        <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                        <div className="d-flex flex-column gspace-0">
                                                            <h5>{item.title}</h5>
                                                            <p>{item.content}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
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
                                    <h3 className="title-heading">მზად ხარ დასაწყებად?</h3>
                                    <p>
                                        მოგვწერე ან დაგვირეკე — პირველი ნაბიჯი მხოლოდ ერთი ზარია.
                                    </p>
                                    <div className="link-wrapper">
                                        <a href="/contact">დაგვიკავშირდი</a>
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

export default ProcessSection;
