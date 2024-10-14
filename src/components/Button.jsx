import { useEffect, useState } from "react";
import { NAV_DATA } from "../settings";

export default function Button() {

    const [pathname, setPathname] = useState("");


    useEffect(() => {
        
        const requestURL = window.location.href;
        const p = new URL(requestURL).pathname;
        setPathname(p);
        console.log(NAV_DATA);
    })
    function clickHandler(e) {
        console.log(pathname);
    }

    return(
        <button className="btn btn-success" onClick={clickHandler}>React Button</button>
    );
}