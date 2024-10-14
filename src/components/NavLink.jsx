import { useEffect, useState } from "react";
import { activeClass } from "../utils/functions";

export default function NavLink({href, target = "_self", children}) {
    const [pathname, setPathname] = useState("");

    useEffect(() => {
        const p = new URL(window.location.href).pathname
        setPathname(p);
    }, []);



    return (
        <a
            className={`nav-link ${activeClass(pathname, href)}`}
            href={href}
            target={target}
        >
            {children}
        </a>
    );

}