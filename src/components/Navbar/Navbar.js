import React, { useState } from "react";
import "./navbar.css";
import {Link} from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/images/logoManit.jpg"
import { NavLink } from "react-router-dom";
import MenuPopupState from "./hamburger"

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div className="nav-cont">
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">

            <img src={logo} style={{width:50}}></img>
          <h2>
             MANIT Dashboard
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink style={{textDecoration:"none"}} to="/">Home</NavLink>
            </li>
            <li>
                <Link style={{textDecoration:"none"}} to="/signin">Signin</Link> 
            </li>
            <li>
                <Link style={{textDecoration:"none"}} to="/signup">Signup</Link>  
            </li>
            <li>
              <NavLink style={{textDecoration:"none"}} to="/">About</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <div className="hamburger-menu">
            {/* <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a> */}
            <MenuPopupState/>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;