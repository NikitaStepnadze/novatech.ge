"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// react-router's <NavLink> appended "active" to the class list whenever its
// target matched the current URL; next/link has no such behaviour, so this
// wrapper reproduces it and keeps the navigation styling identical.
//
// `end` mirrors react-router's prop: without it a link also counts as active for
// nested paths, which is how the old markup treated "/" specially.
function NavLink({ to, className = "", end = false, children, ...rest }) {
    const rawPathname = usePathname();

    // trailingSlash means usePathname reports "/about/"; compare without it.
    const pathname =
        rawPathname !== "/" ? rawPathname.replace(/\/$/, "") : rawPathname;
    const target = to !== "/" ? to.replace(/\/$/, "") : to;

    const isActive = end
        ? pathname === target
        : pathname === target || pathname.startsWith(`${target}/`);

    return (
        <Link
            href={to}
            className={`${className}${isActive ? " active" : ""}`}
            {...rest}
        >
            {children}
        </Link>
    );
}

export default NavLink;
