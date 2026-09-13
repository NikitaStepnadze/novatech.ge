"use client";

import React, { createContext, useContext } from "react";
import { usePathname } from "next/navigation";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const rawPathname = usePathname();

    // trailingSlash makes usePathname report "/about/", but the dropdown checks
    // below are written against "/about", so normalise before comparing.
    const pathname =
        rawPathname !== "/" ? rawPathname.replace(/\/$/, "") : rawPathname;

    const isDropdownActive = (paths = []) => paths.includes(pathname);

    const value = { pathname, isDropdownActive };

    return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

export const useNav = () => useContext(NavContext);
