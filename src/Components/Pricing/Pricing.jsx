import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

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
                                            <a href="./contact">უფასო კონსულტაცია</a>
                                            <i className="fa-solid fa-arrow-circle-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <div className="card card-pricing">
                                        <h4>საბაზისო</h4>
                                        <p>იდეალურია დამწყები და მცირე ბიზნესისთვის</p>
                                        <div className="d-flex flex-row gspace-1 align-items-center h-100">
                                            <h3>300₾</h3>
                                            <p>-დან</p>
                                        </div>
                                        <a href="#" className="btn btn-accent">
                                            <div className="btn-title">
                                                <span>დეტალურად</span>
                                            </div>
                                            <div className="icon-circle">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                        <ul className="check-list">
                                            <li><a href="./single_services">თანამედროვე დიზაინი</a></li>
                                            <li><a href="./single_services">მობილურზე მორგებული</a></li>
                                            <li><a href="./single_services">ტექნიკური მხარდაჭერა</a></li>
                                        </ul>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                        <div className="col">
                            <AnimateOnScroll animation="fadeInUp" speed="slow">
                                <div className="card card-pricing pricing-highlight">
                                    <div className="spacer" />
                                    <h4>პრემიუმ</h4>
                                    <p>სრული ციფრული გადაწყვეტა მაქსიმალური შედეგისთვის</p>
                                    <div className="d-flex flex-row gspace-1 align-items-center">
                                        <h3>1500₾</h3>
                                        <p>-დან</p>
                                    </div>
                                    <a href="#" className="btn btn-accent">
                                        <div className="btn-title">
                                            <span>დეტალურად</span>
                                        </div>
                                        <div className="icon-circle">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </a>

                                    <div className="core-benefits">
                                        <div className="benefit">
                                            <i className="fa-solid fa-brain"></i>
                                            <a href="#">პერსონალური მენეჯერი</a>
                                        </div>
                                        <div className="benefit">
                                            <i className="fa-brands fa-accessible-icon"></i>
                                            <a href="#">პრიორიტეტული მხარდაჭერა 24/7</a>
                                        </div>
                                        <div className="benefit">
                                            <i className="fa-solid fa-bug"></i>
                                            <a href="#">ინდივიდუალური გადაწყვეტა</a>
                                        </div>
                                    </div>

                                    <ul className="check-list">
                                        <li><a href="#">სრული ციფრული პაკეტი</a></li>
                                        <li><a href="#">ონლაინ მაღაზია და გადახდები</a></li>
                                        <li><a href="#">პერსონალური მენეჯერი</a></li>
                                        <li><a href="#">ინდივიდუალური დიზაინი</a></li>
                                        <li><a href="#">SEO ოპტიმიზაცია</a></li>
                                        <li><a href="#">ტექნიკური მხარდაჭერა</a></li>
                                    </ul>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        <div className="col">
                            <div className="pricing-container">
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <div className="card pricing-highlight-box">
                                        <div className="d-flex flex-column gspace-2 w-100">
                                            <h5>შენი ზრდა ჩვენი პრიორიტეტია!</h5>
                                            <div className="d-flex flex-column gspace-2">
                                                <div className="pricing-highlights">
                                                    <a href="#">თანამედროვე დიზაინი</a>
                                                    <i className="fa-solid fa-arrow-circle-right"></i>
                                                </div>
                                                <div className="pricing-highlights">
                                                    <a href="#">სისწრაფე და SEO</a>
                                                    <i className="fa-solid fa-arrow-circle-right"></i>
                                                </div>
                                                <div className="pricing-highlights">
                                                    <a href="#">მორგებული ყველა ბიზნესზე</a>
                                                    <i className="fa-solid fa-arrow-circle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spacer" />
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <div className="card card-pricing">
                                        <h4>სტანდარტული</h4>
                                        <p>საუკეთესო არჩევანი მზარდი ბიზნესისთვის</p>
                                        <div className="d-flex flex-row gspace-1 align-items-center h-100">
                                            <h3>800₾</h3>
                                            <p>-დან</p>
                                        </div>
                                        <a href="#" className="btn btn-accent">
                                            <div className="btn-title">
                                                <span>დეტალურად</span>
                                            </div>
                                            <div className="icon-circle">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                        <ul className="check-list">
                                            <li><a href="./single_services">თანამედროვე დიზაინი</a></li>
                                            <li><a href="./single_services">მობილურზე მორგებული</a></li>
                                            <li><a href="./single_services">ტექნიკური მხარდაჭერა</a></li>
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