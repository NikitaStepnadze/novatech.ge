import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const NotFoundSection = () => {

    return (
        <div className="section-404">
            <div className="banner-layout-404">
                <div className="layout-404">
                    <img
                        src="/assets/novatech/objects/bug-report.webp"
                        alt=""
                        aria-hidden="true"
                        className="object-404"
                        decoding="async"
                    />

                    <AnimateOnScroll>
                        <span className="text-404 title-heading">
                            404
                        </span>
                    </AnimateOnScroll>
                    <h3>უპს! გვერდი ვერ მოიძებნა</h3>
                    <p>
                        გვერდი, რომელსაც ეძებ, ვერ მოიძებნა. შესაძლოა ის წაშლილია,
                        გადატანილია ან საერთოდ არ არსებობდა.
                    </p>
                    <div>
                        <a href="/" className="btn btn-accent">
                            <div className="btn-title">
                                <span>მთავარ გვერდზე</span>
                            </div>
                            <div className="icon-circle">
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundSection;
