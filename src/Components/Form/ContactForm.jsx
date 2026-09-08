import React, { useState } from "react";
import { trackEvent } from "../Analytics/pixel";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);

  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessageVisible(true);
      setSuccessMessageVisible(false);
      setTimeout(() => setErrorMessageVisible(false), 3000);
      return;
    }

    trackEvent("Lead", { content_name: "Contact Form" });

    setSuccessMessageVisible(true);
    setErrorMessageVisible(false);
    e.target.reset();
    setEmail(""); 
    setTimeout(() => setSuccessMessageVisible(false), 3000);
  };

  return (
    <div className="form-layout-wrapper">
        <div className="card form-layout">
            <h3 className="title-heading">მოგვიყევი შენი პროექტის შესახებ</h3>

            {successMessageVisible && (
            <div id="success-message" className="alert success">
                <span className="check-icon">
                    <i className="fa-solid fa-check"></i>
                </span>
                <p className="text-center">გმადლობთ! შეტყობინება წარმატებით გაიგზავნა.</p>
            </div>
            )}

            {errorMessageVisible && (
            <div id="error-message" className="alert error">
                <span className="cross-icon">
                <i className="fa-solid fa-xmark"></i>
                </span>
                <p className="text-center">უპს! გთხოვთ, მიუთითოთ სწორი ელ. ფოსტა.</p>
            </div>
            )}

            <form
            onSubmit={handleSubmit}
            id="contactForm"
            className="form needs-validation"
            >
                <div className="row row-cols-md-2 row-cols-1 g-3">
                    <div className="col">
                        <input type="text" name="first-name" id="first-name" placeholder="სახელი" />
                    </div>
                    <div className="col">
                        <input type="text" name="last-name" id="last-name" placeholder="გვარი" />
                    </div>
                </div>

                <div className="row row-cols-md-2 row-cols-1 g-3">
                        <div className="col">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="ელ. ფოსტა"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col">
                            <input type="text" name="subject" id="subject" placeholder="თემა" />
                        </div>
                </div>

                <textarea name="message" id="message" rows="5" placeholder="შეტყობინება"></textarea>

                <div className="form-button-container">
                        <button type="submit" className="btn btn-accent">
                            <span className="btn-title">
                                <span>გაგზავნა</span>
                            </span>
                            <span className="icon-circle">
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default ContactForm;
