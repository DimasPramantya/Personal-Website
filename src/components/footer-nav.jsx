import React from "react";
import { Link } from "react-router-dom";

const FooterNavbar = ()=>{
    return(
        <>
            <div className="sm:hidden flex sticky bottom-0 mt-auto py-4 items-center justify-center gap-x-10
            border-t border-slate-600 rounded-t-3xl bg-primaryBlack">
                <div><Link to='/' className="font-bold text-white text-xs border-b-4 border-secondaryGold">Home</Link></div>
                <div><Link to='/about' className="font-semibold text-slate-200 text-xs">About</Link></div>
                <div><Link className="font-semibold text-slate-200 text-xs">Portofolio</Link></div>
            </div>
        </>
    )
}

export default FooterNavbar;