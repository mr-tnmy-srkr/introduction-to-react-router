// import React from "react";

import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <h2 className="text-3xl">Navbar</h2>
      <nav className="flex gap-6 text-2xl justify-center my-5">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </div>
  );
};

export default Header;
