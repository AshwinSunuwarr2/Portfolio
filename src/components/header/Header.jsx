import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../index";

import {
  PiInstagramLogoLight,
  PiLinkedinLogo,
  PiGithubLogoLight,
} from "react-icons/pi";

import { SiGmail } from "react-icons/si";
function Header() {
  return (
    <header>
      <nav>
        <div className="flex justify-between items-center bg-pink-800/10 px-2">
          <Link
            to="/"
            className="flex justify-center object-fill h-[75px] pl-4"
          >
            <Logo width="250px" />
          </Link>

          <div className="flex flex-row justify-around w-full">
            <ul className="hidden md:flex justify-center items-center gap-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `duration-200 relative inline cursor-pointer text-[18px] font-small before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 ${
                      isActive ? "text-green-500" : "text-black"
                    } `
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `duration-200 relative inline cursor-pointer text-[18px] font-small before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 ${
                      isActive ? "text-green-500" : "text-black"
                    } `
                  }
                >
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `duration-200 relative inline cursor-pointer text-[18px] font-small before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 ${
                      isActive ? "text-green-500" : "text-black"
                    } `
                  }
                >
                  Contact Me
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/posts"
                  className={({ isActive }) =>
                    `duration-200 relative inline cursor-pointer text-[18px] font-small before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 ${
                      isActive ? "text-green-500" : "text-black"
                    } `
                  }
                >
                  Experience
                </NavLink>
              </li>
            </ul>
          
{/* <main class="h-screen flex justify-center items-center">
	<p
		class="relative inline cursor-pointer text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
		Hover me</p>

</main> */}
            <div>
              

              {/* socials-------- */}

              <div className="hidden md:flex gap-3">
                <button
                  className="middle none relative h-10 max-h-[40px] w-10 max-w-[40px] rounded-lg bg-pink-500 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
                  className="middle none relative h-10 max-h-[40px] w-10 max-w-[40px] rounded-lg bg-red-500 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                  onClick={() =>
                    window.open("https://github.com/AshwinSunuwarr2")
                  }
                >
                  <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                    <PiGithubLogoLight size={30} />
                  </span>
                </button>
                <button
                  className="middle none relative h-10 max-h-[40px] w-10 max-w-[40px] rounded-lg bg-green-500 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/ashwin-sunuwar-648769229/"
                    )
                  }
                >
                  <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                    <PiLinkedinLogo size={30} />
                  </span>
                </button>
                <button
                  className="middle none relative h-10 max-h-[40px] w-10 max-w-[40px] rounded-lg bg-amber-500 text-center font-sans text-xs font-medium uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                  onClick={() =>
                    window.open("mailto:ashwinsunuwarr2@gmail.com")
                  }
                >
                  <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                    <SiGmail size={25} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
