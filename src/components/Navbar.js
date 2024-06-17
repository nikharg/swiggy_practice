import React from "react";

const Navbar = () => {
  return (
    <header id="navbar">
      <img
        src={require("../../public/foodees-high-resolution-logo-transparent.png")}
        alt="company-logo"
        width={80}
      />
      <div>
        <ul id="navItems">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
