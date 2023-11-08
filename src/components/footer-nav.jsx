import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const FooterNavbar = ()=>{
    const currentLocation = useLocation();
    const [activeItem, setActiveItem] = useState(currentLocation.pathname);

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };
    return(
        <>
            <div className="sm:hidden flex sticky bottom-0 mt-auto py-4 items-center justify-center gap-x-10
            border-t border-slate-600 rounded-t-3xl bg-primaryBlack">
                <div>
                    <Link to='/' 
                        onClick={() => handleItemClick("/")}
                        className={`text-white text-xs border-b-4 border-secondaryGold
                        ${activeItem === "/" ? "border-b-4 border-secondaryGold font-bold" : "font-semibold"}`}>
                        Home
                    </Link>
                </div>
                <div>
                    <Link to='/about' 
                        onClick={() => handleItemClick("/")}
                        className={`text-white text-xs border-b-4 border-secondaryGold
                        ${activeItem === "/about" ? "border-b-4 border-secondaryGold font-bold" : "font-semibold"}`}>
                        About
                    </Link>
                </div>
                <div><Link className="font-semibold text-slate-200 text-xs">Portofolio</Link></div>
            </div>
        </>
    )
}

export default FooterNavbar;