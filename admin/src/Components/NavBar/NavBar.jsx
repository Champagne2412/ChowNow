import React from "react";
import "./NavBar.css";
import {assets} from "../../assets/assets.js";
const NavBar = () => {
  return (
    <nav className="nav-bar">
      <img src={assets.logo} alt="" className="logo" />
      <img src={assets.profile_image} alt="" className="profile" />
    </nav>
  );
};

export default NavBar;
