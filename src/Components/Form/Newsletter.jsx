"use client";

import React, { useState } from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import { trackEvent } from "../Analytics/pixel";

function NewsletterSection() {

    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const validateEmail = (email) => {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === "") {
            setErrorMessage("ველის შევსება სავალდებულოა");
            setError(true);
            setSuccess(false);
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage("ელ. ფოსტის ფორმატი არასწორია");
            setError(true);
            setSuccess(false);
            return;
        }

        trackEvent("Subscribe", { content_name: "Newsletter" });

        setSuccess(true);
        setError(false);
        setEmail("");

        setTimeout(() => setSuccess(false), 3000);
    };

    return (
        <div className="section">
            <div className="hero-container">
                <div className="newsletter-wrapper">
                    <div className="newsletter-layout">
                        <img
                            src="/assets/novatech/objects/hands-tablet.webp"
                            alt=""
                            aria-hidden="true"
                            className="brand-object newsletter-object"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="spacer"></div>
                        <div className="d-flex flex-column gspace-5 position-relative z-2">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">იყავი ერთი ნაბიჯით წინ</h3>
                                    <p>
                                        მიიღე სასარგებლო რჩევები და სიახლეები ციფრული განვითარების შესახებ
                                        პირდაპირ შენს ელ. ფოსტაზე.
                                    </p>
                                </div>
                            </AnimateOnScroll>

                            {success && (
                                <div className="alert success">
                                    <span className="check-icon">
                                        <i className="fa-solid fa-2xl fa-check"></i>
                                    </span>
                                    <p className="text-center">გმადლობთ! წარმატებით გამოიწერეთ.</p>
                                </div>
                            )}

                            {error && (
                                <div className="alert error">
                                    <span className="cross-icon">
                                        <i className="fa-solid fa-2xl fa-xmark"></i>
                                    </span>
                                    <p className="text-center">{errorMessage}</p>
                                </div>
                            )}

                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <form
                                    id="newsletterForm"
                                    onSubmit={handleSubmit}
                                    className="needs-validation"
                                    noValidate
                                >
                                    <div className="input-container">
                                        <input
                                            type="email"
                                            name="newsletter-email"
                                            id="newsletter-email"
                                            placeholder="მიუთითე ელ. ფოსტა"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={error ? "error-border" : ""}
                                            required
                                        />
                                        {error && (
                                            <div className="error-text">{errorMessage}</div>
                                        )}
                                    </div>
                                    <button className="btn btn-accent" type="submit">
                                        <span className="btn-title">
                                            <span>გამოწერა</span>
                                        </span>
                                        <span className="icon-circle">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </button>
                                </form>
                            </AnimateOnScroll>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsletterSection;