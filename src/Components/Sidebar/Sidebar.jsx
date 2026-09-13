"use client";

import React, { useEffect, useRef } from "react";

function Sidebar() {
    const overlayRef = useRef(null);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const menuBtn = document.querySelector(".nav-btn");
        const closeBtn = sidebarRef.current?.querySelector(".close-btn");
        const overlay = overlayRef.current;
        const sidebar = sidebarRef.current;

        function openSidebar() {
        overlay.classList.add("active");
        setTimeout(() => {
            sidebar.classList.add("active");
        }, 200);
        }

        function closeSidebar() {
        sidebar.classList.remove("active");
        setTimeout(() => {
            overlay.classList.remove("active");
        }, 200);
        }

        menuBtn?.addEventListener("click", openSidebar);
        closeBtn?.addEventListener("click", closeSidebar);
        overlay?.addEventListener("click", closeSidebar);

        return () => {
        menuBtn?.removeEventListener("click", openSidebar);
        closeBtn?.removeEventListener("click", closeSidebar);
        overlay?.removeEventListener("click", closeSidebar);
        };
    }, []);

    useEffect(() => {
        const dropdownBtns = sidebarRef.current?.querySelectorAll(".sidebar-dropdown-btn");

        function handleDropdownClick(e) {
        const btn = e.currentTarget;
        const dropdownMenu = btn.parentElement.nextElementSibling;
        const isOpen = dropdownMenu.classList.contains("active");

        sidebarRef.current
            .querySelectorAll(".sidebar-dropdown-menu")
            .forEach(menu => {
            menu.classList.remove("active");
            });

        if (!isOpen) dropdownMenu.classList.add("active");
        }

        dropdownBtns?.forEach(btn => {
        btn.addEventListener("click", handleDropdownClick);
        });

        return () => {
        dropdownBtns?.forEach(btn => {
            btn.removeEventListener("click", handleDropdownClick);
        });
        };
    }, []);

    return (
        <div>
        <div ref={overlayRef} className="sidebar-overlay"></div>
        <div ref={sidebarRef} className="sidebar">
            <div className="sidebar-header">
                <div className="logo">
                    <img src="/assets/images/marko-logo.png" className="site-logo img-fluid logo" alt="ლოგო" />
                </div>
                <button className="close-btn"><span>X</span></button>
            </div>
            <ul className="menu">
                <li><a href="/">მთავარი</a></li>
                <li><a href="about">ჩვენ შესახებ</a></li>
                <li className="sidebar-dropdown">
                    <div className="dropdown-header">
                        <a href="#">სერვისები</a>
                    <button className="sidebar-dropdown-btn">
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                    </div>
                    <ul className="sidebar-dropdown-menu">
                        <li><a href="service">სერვისები</a></li>
                        <li><a href="single_services">სერვისის დეტალები</a></li>
                    </ul>
                </li>
                <li className="sidebar-dropdown">
                    <div className="dropdown-header">
                        <a href="#">გვერდები</a>
                    <button className="sidebar-dropdown-btn">
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                    </div>
                    <ul className="sidebar-dropdown-menu">
                        <li><a href="case_studies">პორტფოლიო</a></li>
                        <li><a href="team">ჩვენი გუნდი</a></li>
                        <li><a href="partnership">პარტნიორები</a></li>
                        <li><a href="pricing">ფასები</a></li>
                        <li><a href="testimonial">შეფასებები</a></li>
                        <li><a href="faq">კითხვები</a></li>
                        <li><a href="404_page">შეცდომა 404</a></li>
                    </ul>
                </li>
                <li className="sidebar-dropdown">
                    <div className="dropdown-header">
                        <a href="#">ბლოგი</a>
                    <button className="sidebar-dropdown-btn">
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                    </div>
                    <ul className="sidebar-dropdown-menu">
                        <li><a href="blog">ბლოგი</a></li>
                        <li><a href="single_post">სტატია</a></li>
                    </ul>
                </li>
                <li className="below-dropdown"><a href="contact">კონტაქტი</a></li>
            </ul>
        </div>
        </div>
    );
    }

export default Sidebar;
