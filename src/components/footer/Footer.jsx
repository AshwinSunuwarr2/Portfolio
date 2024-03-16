import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../index";
import {
  PiInstagramLogoLight,
} from "react-icons/pi";

import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <footer>
      <div className="flex flex-row items-center justify-between bg-white/75 text-green-900/80 py-4 lg:pl-16 shadow-t-sm shadow-inner shadow-black/15 ">
        <Link to="/" className="flex justify-center m-2">
          <Logo width="150px" className="  object-cover drop-shadow-2xl" />
        </Link>
        <div className="flex flex-row w-[75%] justify-evenly items-center">
          <div className="flex flex-col justify-center items-center">
            <nav>
              <ul className="flex justify-end items-end p-4 gap-10">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `duration-200 relative inline cursor-pointer text-[18px] font-small before:bg-[#E21412]  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100  ${
                        isActive ?  "text-[#E21412]" : "text-[#000000a2]"
                      }`
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `duration-200 relative inline cursor-pointer text-[18px] font-small before:bg-[#E21412]  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 ${
                        isActive ?  "text-[#E21412]" : "text-[#000000a2]"
                      }`
                    }
                    to="/about"
                  >
                    About Me
                  </NavLink>
                </li>
              </ul>
            </nav>
            <p>&copy; 2024 My Quirky Portfolio. Designed with ❤️ by Ashwin Sunuwar.</p>
           
          </div>
          <div>
            {/* <nav className="flex gap-4">
              <Link
                to="/login"
                className="bg-gray-500 text-white px-4 py-2 rounded shadow-inner shadow-white/50 hover:text-blue-400"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-gray-500 text-white px-4 py-2 rounded shadow-inner shadow-white/50 hover:text-red-400"
              >
                Register
              </Link>
            </nav> */}

            {/* socials-------- */}

            <div className="hidden md:flex gap-3">
              <button
                className="middle none relative h-10 max-h-[40px] w-10 max-w-[40px] rounded-full bg-pink-500 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
                type="button"
                data-ripple-light="true"
                onClick={() =>
                  window.open("https://www.instagram.com/ahwinsunuwar/")
                }
              >
                <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                  <PiInstagramLogoLight size={30} />
                </span>
              </button>

              <button
                className="middle none relative h-10 max-h-[40px] w-10 max-w-[40px] rounded-full bg-amber-500 text-center font-sans text-xs font-medium uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
                onClick={() => window.open("mailto:ashwinsunuwarr2@gmail.com")}
              >
                <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                  <SiGmail size={25} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
