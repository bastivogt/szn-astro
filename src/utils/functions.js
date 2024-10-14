/* function activeClass(pathname, href) {
    const reg = new RegExp(`${href}$`);
    if (reg.test(pathname)) {
        return "active";
    }
    return "";
} */
function isActiveLink(pathname, href) {
    if(pathname !== "/" && href !== "/") {
        if (pathname.indexOf(href.slice(1)) != -1) {
            return true;
        }
    }else if(pathname === "/" && href === "/"){
        return true;
    }
    return false;
}

function activeClass(pathname, href) {
    if(isActiveLink(pathname, href)) {
        return "active";
    }
    return "";
}
/* function activeClass(pathname, href) {
    if(pathname !== "/" && href !== "/") {
        if (pathname.indexOf(href.slice(1)) != -1) {
            return "active";
        }
    }else if(pathname === "/" && href === "/"){
        return "active";
    }
    return "";
} */

/* function activeClass(pathname, href) {
    if(pathname.length > 1) pathname += "/";
    const reg = new RegExp(`^${href}*$`);
    
    console.log("pathname:", pathname, "href:", href, "test:", reg.test(pathname));
    if (reg.test(pathname)) {
        return "active";
    }
    return "";
}  */




export {
    activeClass,
    isActiveLink
}