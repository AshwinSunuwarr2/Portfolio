import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <div className="flex justify-evenly items-center py-4 bg-pink-800/10">
          <Link to="/">Logo</Link>
          <ul className="flex gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-green-400 ${
                    isActive ? "text-green-500" : "text-black"
                  } duration-200`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-green-400 ${
                    isActive ? "text-green-500" : "text-black"
                  } duration-200`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-green-400 ${
                    isActive ? "text-green-500" : "text-black"
                  } duration-200`
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/posts"
                className={({ isActive }) =>
                  `hover:text-green-400 ${
                    isActive ? "text-green-500" : "text-black"
                  } duration-200`
                }
              >
                Posts
              </NavLink>
            </li>
          </ul>

          <div>
            <nav className="flex gap-4">
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
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
