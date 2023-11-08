import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const currentLocation = useLocation();
    const [activeItem, setActiveItem] = useState(currentLocation.pathname);

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <nav className="lg:mx-48 sm:mx-28 mx-6 flex py-3 my-5 items-center justify-between">
            <div className="text-primaryGold font-bold text-xl">
                DimasPramantya
            </div>
            <div className="sm:flex lg:-ml-20 sm:-ml-8 sm:gap-x-10 hidden">
                <div>
                    <Link
                        to="/"
                        onClick={() => handleItemClick("/")}
                        className={`font-bold transition duration-300 
            ${activeItem === "/" ? "border-b-4 border-secondaryGold text-slate-300" : "text-slate-700 hover:text-slate-500"} text-lg`}
                    >
                        Home
                    </Link>
                </div>
                <div>
                    <Link
                        to="/about"
                        onClick={() => handleItemClick("/about")}
                        className={`font-semibold transition duration-300 text-lg ${activeItem === "/about" ? "border-b-4 border-secondaryGold text-slate-300" : "text-slate-700 hover:text-slate-500"
                            }`}
                    >
                        About
                    </Link>
                </div>
                <div>
                    <Link
                        title="Coming Soon!!!"
                        className="hover:cursor-not-allowed text-slate-700 font-semibold transition duration-300 text-lg"
                    >
                        Portofolio
                    </Link>
                </div>
            </div>
            <div className="flex gap-x-3 items-center">
                <Link className="flex" to="">
                    <img src="https://storage.googleapis.com/personal_image_dicoding_dimas/github-mark-white.png" alt="" className="w-7 sm:w-8 lg:w-8" />
                </Link>
                <Link className="flex" to="">
                    <iconify-icon icon="skill-icons:linkedin" width="2rem" />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
