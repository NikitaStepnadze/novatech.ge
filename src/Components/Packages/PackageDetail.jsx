"use client";

import React from "react";
import Link from "next/link";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import {
    packages,
    packagePath,
    getPackage,
    getIncludedPackages,
    getNextPackage,
    getPackageFeatures,
} from "../../Data/PackagesData";

// Takes the slug rather than the package object so the server page only passes
// a string across the client boundary.
const PackageDetailSection = ({ slug }) => {
    const pkg = getPackage(slug);
    const includedPackages = getIncludedPackages(pkg);
    const nextPackage = getNextPackage(pkg);
    const features = getPackageFeatures(pkg);
    const otherPackages = packages.filter((other) => other.slug !== pkg.slug);

    return (
        <div className="section pb-0">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-5">
                    <div className="image-container">
                        <img
                        src="/assets/novatech/img/service-hero.webp"
                        alt={pkg.name}
                        className="single-service-img"  loading="lazy" decoding="async" />
                        <div className="single-service-title-layout">
                            <div>
                                <div className="single-service-spacer"></div>
                                <div className="single-service-title-wrapper">
                                    <div className="single-service-title">
                                        <AnimateOnScroll animation="fadeInRight" speed="slow">
                                            <div className="sub-heading">
                                                <i className="fa-regular fa-circle-dot"></i>
                                                <span>{pkg.name}</span>
                                            </div>
                                        </AnimateOnScroll>
                                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                                            <h3 className="title-heading">{pkg.tagline}</h3>
                                        </AnimateOnScroll>
                                        <p>{pkg.overview}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="single-service-spacer"></div>
                        </div>
                    </div>

                    <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5">
                        <div className="col col-lg-8">
                            <div className="d-flex flex-column gspace-2">
                                <h4>ვისთვის არის ეს პაკეტი</h4>
                                <ul className="check-list">
                                    {pkg.idealFor.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>

                                <div className="card service-included">
                                    <h4>რას მოიცავს</h4>
                                    <div className="underline-accent-short"></div>
                                    {includedPackages.length > 0 && (
                                        <p>
                                            ყველაფერი რაც {includedPackages[0].shortName} პაკეტში და დამატებით:
                                        </p>
                                    )}
                                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-3">
                                        {features.map((feature) => (
                                            <div className="col" key={feature.title}>
                                                <div className="d-flex flex-row gspace-1">
                                                    <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                    <div className="d-flex flex-column gspace-0">
                                                        <h5>{feature.title}</h5>
                                                        <p>{feature.text}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {includedPackages.length > 0 && (
                                    <div className="card service-included">
                                        <h4>ასევე შედის</h4>
                                        <div className="underline-accent-short"></div>
                                        <div className="row row-cols-md-2 row-cols-1 grid-spacer-3">
                                            {includedPackages.map((included) => (
                                                <div className="col" key={included.slug}>
                                                    <div className="d-flex flex-column gspace-1">
                                                        <h5>
                                                            <Link href={packagePath(included.slug)}>{included.name}</Link>
                                                        </h5>
                                                        <ul className="check-list">
                                                            {getPackageFeatures(included).map((feature) => (
                                                                <li key={feature.title}>{feature.title}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {nextPackage && (
                                    <div className="card pricing-highlight-box">
                                        <div className="d-flex flex-column gspace-2 w-100">
                                            <h5>გინდა მეტი? აირჩიე {nextPackage.name} — {nextPackage.price}₾</h5>
                                            <div className="d-flex flex-column gspace-2">
                                                {nextPackage.features.slice(0, 3).map((feature) => (
                                                    <div className="pricing-highlights" key={feature.title}>
                                                        <Link href={packagePath(nextPackage.slug)}>{feature.title}</Link>
                                                        <i className="fa-solid fa-arrow-circle-right"></i>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="spacer" />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col col-lg-4">
                            <div className="d-flex flex-column flex-md-row flex-lg-column justify-content-between gspace-5">
                                <div className={`card card-pricing${pkg.featured ? " pricing-highlight" : ""}`}>
                                    {pkg.featured && <div className="spacer" />}
                                    <h4>{pkg.name}</h4>
                                    <p>{pkg.tagline}</p>
                                    <div className="d-flex flex-row gspace-1 align-items-center">
                                        <h3>{pkg.price}₾</h3>
                                        {pkg.oldPrice && <p className="price-was">{pkg.oldPrice}₾</p>}
                                    </div>
                                    <Link href="/contact" className="btn btn-accent">
                                        <div className="btn-title">
                                            <span>შეუკვეთე</span>
                                        </div>
                                        <div className="icon-circle">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </Link>
                                </div>
                                <div className="card service-recent">
                                    <h4>სხვა პაკეტები</h4>
                                    <div className="underline-accent-short"></div>
                                    <ul className="single-service-list">
                                        {otherPackages.map((other) => (
                                            <li key={other.slug}>
                                                <Link href={packagePath(other.slug)}>
                                                    {other.name} — {other.price}₾
                                                </Link>
                                            </li>
                                        ))}
                                        <li>
                                            <Link href="/packages/">ყველა პაკეტის შედარება</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="cta-service-banner">
                                    <div className="spacer"></div>
                                    <h3 className="title-heading">არ იცი რომელი აირჩიო?</h3>
                                    <p>
                                        მოგვწერე და ერთად შევარჩევთ პაკეტს, რომელიც ზუსტად შენს ბიზნესს და ბიუჯეტს მოერგება.
                                    </p>
                                    <div className="link-wrapper">
                                        <Link href="/contact">უფასო კონსულტაცია</Link>
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

export default PackageDetailSection;
