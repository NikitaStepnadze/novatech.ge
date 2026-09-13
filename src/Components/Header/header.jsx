"use client";

import React from "react";
import NavLink from "./NavLink";
import ThemeSwitcher from "../Theme/themeswitch";
import { useNav } from "../Context/NavContext";

function Navbar() {
const { isDropdownActive } = useNav();

return (
    <div className="navbar-wrapper">
        <nav className="navbar navbar-expand-lg">
            <div className="navbar-container">
                <div className="logo-container">
                    <NavLink className="navbar-brand" to="/">
                    <img
                        src="/assets/images/marko-logo.png"
                        className="site-logo img-fluid"
                        alt="ლოგო"
                    />
                    </NavLink>
                </div>

                <button
                    className="navbar-toggler nav-btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="მენიუს გახსნა"
                >
                    <i className="fa-solid fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" end>
                            მთავარი
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">
                            ჩვენ შესახებ
                            </NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                            className={`nav-link dropdown-toggle ${
                                isDropdownActive(["/service", "/single_services"])
                                ? "active"
                                : ""
                            }`}
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            სერვისები <i className="fa-solid fa-angle-down accent-color"></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink to="/service" className="dropdown-item">
                                        სერვისები
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/single_services" className="dropdown-item">
                                        სერვისის დეტალები
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                            className={`nav-link dropdown-toggle ${
                                isDropdownActive([
                                "/case_studies",
                                "/team",
                                "/partnership",
                                "/pricing",
                                "/testimonial",
                                "/faq",
                                "/404_page",
                                ])
                                ? "active"
                                : ""
                            }`}
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            გვერდები <i className="fa-solid fa-angle-down accent-color"></i>
                            </a>
                            <ul className="dropdown-menu">
                            <li>
                                <NavLink to="/case_studies" className="dropdown-item">
                                    პორტფოლიო
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/team" className="dropdown-item">
                                    ჩვენი გუნდი
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/partnership" className="dropdown-item">
                                    პარტნიორები
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/pricing" className="dropdown-item">
                                    ფასები
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/testimonial" className="dropdown-item">
                                    შეფასებები
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/faq" className="dropdown-item">
                                    კითხვები
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/404_page" className="dropdown-item">
                                    შეცდომა 404
                                </NavLink>
                            </li>
                            </ul>
                        </li>

                        {/* Archive Dropdown */}
                        <li className="nav-item dropdown">
                            <a
                            className={`nav-link dropdown-toggle ${
                                isDropdownActive(["/blog", "/single_post"]) ? "active" : ""
                            }`}
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            ბლოგი <i className="fa-solid fa-angle-down accent-color"></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink to="/blog" className="dropdown-item">
                                        ბლოგი
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/single_post" className="dropdown-item">
                                        სტატია
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">
                                კონტაქტი
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Navbar Action */}
                <div className="navbar-action-container">
                    <div className="navbar-action-button">
                        <ThemeSwitcher />
                    </div>
                    <div className="navbar-icon-wrapper">
                        <div className="icon-circle">
                            <i className="fa-solid fa-phone-volume"></i>
                        </div>
                        <h6>575 75 38 28</h6>
                    </div>
                </div>
            </div>
        </nav>
    </div>
);
}

export default Navbar;