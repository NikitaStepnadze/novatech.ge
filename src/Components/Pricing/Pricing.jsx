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
                                        <h4>NOVATECH PLUS</h4>
                                        <p>იდეალურია დამწყები და მცირე ბიზნესისთვის</p>
                                        <div className="d-flex flex-row gspace-1 align-items-center h-100">
                                            <h3>150₾</h3>
                                            <p className="price-was">300₾</p>
                                        </div>
                                        <a href="./contact" className="btn btn-accent">
                                            <div className="btn-title">
                                                <span>დეტალურად</span>
                                            </div>
                                            <div className="icon-circle">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                        <ul className="check-list">
                                            <li><a href="./single_services">თანამედროვე დიზაინი</a></li>
                                            <li><a href="./single_services">ერთი გვერდი (პორტფოლიო)</a></li>
                                            <li><a href="./single_services">დომენი + ჰოსტინგი</a></li>
                                            <li><a href="./single_services">სოციალური ქსელების ინტეგრაცია</a></li>
                                            <li><a href="./single_services">Google Maps ინტეგრაცია</a></li>
                                            <li><a href="./single_services">ყველა მოწყობილობაზე მორგებული</a></li>
                                        </ul>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                        <div className="col">
                            <AnimateOnScroll animation="fadeInUp" speed="slow">
                                <div className="card card-pricing pricing-highlight">
                                    <div className="spacer" />
                                    <h4>NOVATECH ALL IN</h4>
                                    <p>სრული ციფრული გადაწყვეტა მაქსიმალური შედეგისთვის</p>
                                    <div className="d-flex flex-row gspace-1 align-items-center">
                                        <h3>750₾</h3>
                                        <p className="price-was">1500₾</p>
                                    </div>
                                    <a href="./contact" className="btn btn-accent">
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
                                            <a href="./contact">ყველაფერი რაც ULTRA პაკეტში</a>
                                        </div>
                                        <div className="benefit">
                                            <i className="fa-solid fa-headset"></i>
                                            <a href="./contact">ტექნიკური მხარდაჭერა</a>
                                        </div>
                                        <div className="benefit">
                                            <i className="fa-solid fa-chart-line"></i>
                                            <a href="./contact">GSC + Google Analytics</a>
                                        </div>
                                    </div>

                                    <ul className="check-list">
                                        <li><a href="./single_services">განვადების / გადახდის ინტეგრაცია</a></li>
                                        <li><a href="./single_services">ბრენდინგი</a></li>
                                        <li><a href="./single_services">10 სოც-მედია პოსტის დიზაინი</a></li>
                                        <li><a href="./single_services">კომპლექსური ფუნქციონალი</a></li>
                                        <li><a href="./single_services">Meta Pixel / Google Tag Manager</a></li>
                                        <li><a href="./single_services">ტექნიკური მხარდაჭერა</a></li>
                                    </ul>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        <div className="col">
                            <div className="pricing-container">
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <div className="card pricing-highlight-box">
                                        <div className="d-flex flex-column gspace-2 w-100">
                                            <h5>გინდა მეტი? აირჩიე NOVATECH ULTRA — 400₾</h5>
                                            <div className="d-flex flex-column gspace-2">
                                                <div className="pricing-highlights">
                                                    <a href="./contact">პრემიუმ UI/UX დიზაინი + 3D</a>
                                                    <i className="fa-solid fa-arrow-circle-right"></i>
                                                </div>
                                                <div className="pricing-highlights">
                                                    <a href="./contact">ჯავშნის სისტემა</a>
                                                    <i className="fa-solid fa-arrow-circle-right"></i>
                                                </div>
                                                <div className="pricing-highlights">
                                                    <a href="./contact">E-commerce და ინდივიდუალური ფუნქციონალი</a>
                                                    <i className="fa-solid fa-arrow-circle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spacer" />
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <div className="card card-pricing">
                                        <h4>NOVATECH PRO</h4>
                                        <p>საუკეთესო არჩევანი მზარდი ბიზნესისთვის</p>
                                        <div className="d-flex flex-row gspace-1 align-items-center h-100">
                                            <h3>250₾</h3>
                                            <p className="price-was">500₾</p>
                                        </div>
                                        <a href="./contact" className="btn btn-accent">
                                            <div className="btn-title">
                                                <span>დეტალურად</span>
                                            </div>
                                            <div className="icon-circle">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                        <ul className="check-list">
                                            <li><a href="./single_services">ყველაფერი რაც PLUS პაკეტში</a></li>
                                            <li><a href="./single_services">რამდენიმე გვერდი</a></li>
                                            <li><a href="./single_services">SEO ოპტიმიზაცია</a></li>
                                            <li><a href="./single_services">ელ. ფოსტის ფორმების ინტეგრაცია</a></li>
                                            <li><a href="./single_services">Google Search Console</a></li>
                                            <li><a href="./single_services">მრავალენოვანი</a></li>
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
