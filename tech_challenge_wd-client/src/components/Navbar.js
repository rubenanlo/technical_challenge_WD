import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/phones" className="link">
        Phones
      </NavLink>
    </div>
  );
}

export default Navbar;
