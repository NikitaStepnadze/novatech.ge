"use client";

import React from "react";
import Link from "next/link";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import { packages, packagePath, getComparisonRows } from "../../Data/PackagesData";

const rows = getComparisonRows();

function PackageCompareSection(){
    return(
        <div className="section pt-0">
            <div className="hero-container">
                <div className="d-flex flex-column justify-content-center text-center gspace-5">
                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div className="d-flex flex-column gspace-2">
                            <div className="sub-heading align-self-center">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>შედარება</span>
                            </div>
                            <h2 className="title-heading heading-container heading-container-short">
                                შეადარე პაკეტები და აირჩიე შენთვის სწორი
                            </h2>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fadeInUp" speed="slow">
                        <div className="package-compare-wrapper">
                            <table className="package-compare">
                                <thead>
                                    <tr>
                                        <th scope="col">ფუნქციონალი</th>
                                        {packages.map((pkg) => (
                                            <th
                                                scope="col"
                                                key={pkg.slug}
                                                className={pkg.featured ? "is-featured" : undefined}
                                            >
                                                <Link href={packagePath(pkg.slug)}>{pkg.name}</Link>
                                                <span className="package-compare-price">{pkg.price}₾</span>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row) => (
                                        <tr key={row.title}>
                                            <th scope="row">{row.title}</th>
                                            {row.included.map((isIncluded, index) => (
                                                <td
                                                    key={packages[index].slug}
                                                    className={packages[index].featured ? "is-featured" : undefined}
                                                >
                                                    {isIncluded ? (
                                                        <i className="fa-solid fa-circle-check" aria-label="შედის"></i>
                                                    ) : (
                                                        <i className="fa-solid fa-minus" aria-label="არ შედის"></i>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td></td>
                                        {packages.map((pkg) => (
                                            <td key={pkg.slug} className={pkg.featured ? "is-featured" : undefined}>
                                                <div className="link-wrapper justify-content-center">
                                                    <Link href={packagePath(pkg.slug)}>დეტალურად</Link>
                                                    <i className="fa-solid fa-arrow-circle-right"></i>
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </div>
    );
}

export default PackageCompareSection;
