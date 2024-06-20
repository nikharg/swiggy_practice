import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header id="navbar">
      <img
        src={require("../../public/foodees-high-resolution-logo-transparent.png")}
        alt="company-logo"
        width={50}
      />
      <div>
        <ul id="navItems">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
