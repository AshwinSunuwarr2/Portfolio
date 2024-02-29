import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center p-4 bg-pink-800/10 text-green-900/80">
        <nav className="flex justify-center p-4 gap-10">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
        </nav>
        <p>&copy; 2024 My Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
