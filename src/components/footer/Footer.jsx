import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center p-4 bg-pink-800/10 text-green-900/80">
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
    </footer>
  );
}

export default Footer;
