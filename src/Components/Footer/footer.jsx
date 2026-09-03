import React from "react";

const Footer = () => {
  return (
    <div className="section-footer">
        <div className="bg-footer-wrapper">
            <div className="bg-footer">
                <div className="hero-container position-relative z-2">
                    <div className="d-flex flex-column gspace-2">
                        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 grid-spacer-5">
                            <div className="col col-lg-4">
                                <div className="footer-logo-container">
                                    <div className="logo-container-footer">
                                    <img src="/assets/images/marko-logo.png" alt="ლოგო" className="site-logo img-fluid" />
                                    </div>
                                    <h4>ვქმნით ვებსაიტებს, რომლებიც ბიზნესს ავითარებს</h4>
                                    <p>
                                    შენი იდეა. ჩვენი ტექნოლოგია. ერთად — ციფრული მომავალი. ვქმნით ვებსაიტებს, რომლებიც შენს ბრენდს პროფესიონალურად წარმოაჩენს.
                                    </p>
                                </div>
                            </div>

                            <div className="col col-lg-2">
                                <div className="footer-quick-links">
                                    <h5>სწრაფი ბმულები</h5>
                                    <ul className="footer-list">
                                        <li><a href="/">მთავარი</a></li>
                                        <li><a href="/about">ჩვენ შესახებ</a></li>
                                        <li><a href="/service">სერვისები</a></li>
                                        <li><a href="/case_studies">პორტფოლიო</a></li>
                                        <li><a href="/blog">ბლოგი</a></li>
                                        <li><a href="/contact">კონტაქტი</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col col-lg-3">
                                <div className="footer-services-container">
                                    <h5>სერვისები</h5>
                                    <ul className="footer-list">
                                        <li><a href="/single_services">ბიზნეს ვებსაიტი</a></li>
                                        <li><a href="/single_services">ონლაინ მაღაზია</a></li>
                                        <li><a href="/single_services">UI/UX დიზაინი</a></li>
                                        <li><a href="/single_services">ტექნიკური მხარდაჭერა</a></li>
                                        <li><a href="/single_services">ბრენდინგი</a></li>
                                        <li><a href="/single_services">სისწრაფე და SEO</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col col-lg-3">
                                <div className="footer-contact-container">
                                    <h5>საკონტაქტო ინფორმაცია</h5>
                                    <ul className="contact-list">
                                        <li>info@novatech.ge</li>
                                        <li>575 75 38 28</li>
                                        <li>თბილისი, საქართველო</li>
                                    </ul>
                                    <div className="d-flex flex-column gspace-1">
                                        <h5>სოციალური ქსელები</h5>
                                        <div className="social-container">
                                            <div className="social-item-wrapper">
                                                <a href="https://facebook.com" className="social-item">
                                                    <i className="fa-brands fa-facebook"></i>
                                                </a>
                                            </div>
                                            <div className="social-item-wrapper">
                                                <a href="https://youtube.com" className="social-item">
                                                    <i className="fa-brands fa-youtube"></i>
                                                </a>
                                            </div>
                                            <div className="social-item-wrapper">
                                                <a href="https://instagram.com" className="social-item">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </div>
                                            <div className="social-item-wrapper">
                                                <a href="https://linkedin.com" className="social-item">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                            </div>
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
    </div>
  );
};

export default Footer;