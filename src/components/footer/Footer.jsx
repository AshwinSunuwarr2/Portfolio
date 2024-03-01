import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../index";
import {
  PiInstagramLogoLight,
  PiLinkedinLogo,
  PiGithubLogoLight,
} from "react-icons/pi";

import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <footer>
      <div className="flex flex-row items-center justify-between bg-pink-800/10 text-green-900/80 py-4 lg:pl-16 bg-ashwin">
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
                      `hover:text-green-400 ${
                        isActive ? "text-green-500" : "text-black"
                      } duration-200`
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `hover:text-green-400 ${
                        isActive ? "text-green-500" : "text-black"
                      } duration-200`
                    }
                    to="/about"
                  >
                    About Us
                  </NavLink>
                </li>
              </ul>
            </nav>
            <p>&copy; 2024 My Company. All rights reserved.</p>
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
                  window.open("https://www.instagram.com/ashwinsunuwar/")
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
