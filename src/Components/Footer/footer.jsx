import React from "react";
import { EMAIL, PHONE_DISPLAY, PHONE_E164, SOCIAL_PROFILES } from "../../seo/site";

const Footer = () => {
  return (
    <footer className="section-footer">
        <div className="bg-footer-wrapper">
            <div className="bg-footer">
                <div className="hero-container position-relative z-2">
                    <div className="d-flex flex-column gspace-2">
                        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 grid-spacer-5">
                            <div className="col col-lg-4">
                                <div className="footer-logo-container">
                                    <div className="logo-container-footer">
                                    <img src="/assets/images/marko-logo.png" alt="NOVATECH ლოგო" className="site-logo img-fluid" />
                                    </div>
                                    <div className="h4">ვქმნით ვებსაიტებს, რომლებიც ბიზნესს ავითარებს</div>
                                    <p>
                                    შენი იდეა. ჩვენი ტექნოლოგია. ერთად — ციფრული მომავალი. ვქმნით ვებსაიტებს, რომლებიც შენს ბრენდს პროფესიონალურად წარმოაჩენს.
                                    </p>
                                </div>
                            </div>

                            <div className="col col-lg-2">
                                <div className="footer-quick-links">
                                    <h2 className="h5">სწრაფი ბმულები</h2>
                                    <ul className="footer-list">
                                        <li><a href="/">მთავარი</a></li>
                                        <li><a href="/about/">ჩვენ შესახებ</a></li>
                                        <li><a href="/why_us/">რატომ ჩვენ</a></li>
                                        <li><a href="/service/">სერვისები</a></li>
                                        <li><a href="/packages/">პაკეტები</a></li>
                                        <li><a href="/projects/">პროექტები</a></li>
                                        <li><a href="/case_studies/">პორტფოლიო</a></li>
                                        <li><a href="/blog/">ბლოგი</a></li>
                                        <li><a href="/contact/">კონტაქტი</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col col-lg-3">
                                <div className="footer-services-container">
                                    <h2 className="h5">სერვისები</h2>
                                    <ul className="footer-list">
                                        <li><a href="/single_services/">ბიზნეს ვებსაიტი</a></li>
                                        <li><a href="/single_services/">ონლაინ მაღაზია</a></li>
                                        <li><a href="/single_services/">UI/UX დიზაინი</a></li>
                                        <li><a href="/single_services/">ტექნიკური მხარდაჭერა</a></li>
                                        <li><a href="/single_services/">ბრენდინგი</a></li>
                                        <li><a href="/single_services/">სისწრაფე და SEO</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col col-lg-3">
                                <div className="footer-contact-container">
                                    <h2 className="h5">საკონტაქტო ინფორმაცია</h2>
                                    <ul className="contact-list">
                                        <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                                        <li><a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a></li>
                                        <li>თბილისი, საქართველო</li>
                                    </ul>
                                    <div className="d-flex flex-column gspace-1">
                                        <h2 className="h5">სოციალური ქსელები</h2>
                                        <div className="social-container">
                                            {SOCIAL_PROFILES.map((profile) => (
                                                <div className="social-item-wrapper" key={profile.platform}>
                                                    <a
                                                        href={profile.url}
                                                        className="social-item"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label={`NOVATECH — ${profile.platform}`}
                                                    >
                                                        <i className={`fa-brands ${profile.icon}`}></i>
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-content-spacer"></div>
                    </div>

                    <div className="copyright-container">
                        <span className="copyright">© 2025 NOVATECH. ყველა უფლება დაცულია.</span>
                        <div className="d-flex flex-row gspace-2">
                            <a href="#" className="legal-link">მომსახურების პირობები</a>
                            <a href="#" className="legal-link">კონფიდენციალურობა</a>
                        </div>
                    </div>

                    <div className="footer-spacer"></div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;