import React from "react";
import ContactForm from "../Form/ContactForm";

const ContactSection = () => {
  return (
    <div className="section">
        <div className="hero-container">
            <div className="row row-cols-lg-2 row-cols-1 g-5">
                <div className="col col-lg-5">
                    <div className="contact-title-wrapper">
                        <div className="card contact-title">
                            <div className="sub-heading">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>დაგვიკავშირდი</span>
                            </div>
                            <h2 className="title-heading">მოგვწერე</h2>
                            <p>
                            მოგვწერე და ერთად დავიწყოთ შენი ბიზნესის ონლაინ განვითარება.
                            </p>
                            <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
                                <div>
                                    <div className="icon-wrapper">
                                        <div className="icon-box">
                                            <i className="fa-solid fa-phone-volume accent-color"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-grid">
                                    <span>ტელეფონის ნომერი</span>
                                    <h5>575 75 38 28</h5>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
                                <div>
                                    <div className="icon-wrapper">
                                        <div className="icon-box">
                                            <i className="fa-solid fa-envelope accent-color"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-grid">
                                    <span>ელ. ფოსტა</span>
                                    <h5>info@novatech.ge</h5>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
                                <div>
                                    <div className="icon-wrapper">
                                        <div className="icon-box">
                                            <i className="fa-solid fa-location-dot accent-color"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-grid">
                                    <span>მისამართი</span>
                                    <h5>თბილისი, საქართველო</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-7">
                    <div id="success-message" className="alert success hidden">
                        <span className="check-icon">
                            <i className="fa-solid fa-2xl fa-check"></i>
                        </span>
                        <p>გმადლობთ! შეტყობინება წარმატებით გაიგზავნა.</p>
                    </div>
                    <div id="error-message" className="alert error hidden">
                        <span className="cross-icon">
                            <i className="fa-solid fa-2xl fa-xmark"></i>
                        </span>
                        <p>უპს! გაგზავნა ვერ მოხერხდა. სცადე თავიდან.</p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactSection;
