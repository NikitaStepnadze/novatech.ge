import React from "react";

// The banner artwork has its own headline baked into the image, so the page's
// real heading is rendered visually hidden: search engines and screen readers
// get one <h1> per page naming the page, and the design is unchanged.
const BannerInnerSection = ({ title }) => {
    return (
        <div className="section-banner">
            {title && <h1 className="visually-hidden">{title}</h1>}
            <div className="banner-layout-wrapper banner-inner">
                <div className="banner-layout">
                    <div className="banner-inner-visual">
                        <img
                            src="/assets/novatech/img/banner-inner.webp"
                            alt="აიყვანე ბიზნესი ახალ საფეხურზე — NOVATECH"
                            className="banner-inner-img"
                            fetchPriority="high"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerInnerSection;
