import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { close, menu, wow_logo } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/">
        <img
          src={wow_logo}
          alt="Wonders of the Outer World"
          className="h-[124px] w-[97px]"
        />
      </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => {
          return nav.id === "home" || nav.id === "login" ? (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] 
          ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} 
          hover:text-[#2bae66ff]`}
            >
              <Link to={nav.id === "home" ? "/" : "login"}>{nav.title}</Link>
            </li>
          ) : (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] 
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} 
            hover:text-[#2bae66ff]`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          );
        })}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)} //"You should NEVER update states using the previous version of that same state in React"
        />

        <div
          className={`${toggle ? "flex" : "hidden"} 
            p-6 bg-black-gradient absolute top-24 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] 
            ${index === navLinks.length - 1 ? "mr-0" : "mb-4"} 
            text-black`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
