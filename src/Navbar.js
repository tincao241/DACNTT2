import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaFacebook, FaLink, FaTwitter, FaYahoo } from "react-icons/fa";
import { links, social } from "./data";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropDown] = useState(false);
  return (
    <nav className="sticky-nav">
      <div className="nav-center">
        <div className="nav-header">
          <h3 className="navbar-name">COVID 19 TRACKER</h3>
          <button
            className="nav-toggle"
            onClick={() => setShowDropDown(!showDropdown)}
          >
            <FaBars />
          </button>
        </div>

        <div className={`links-container ${showDropdown && "show-container"}`}>
          <ul className="links">
            {links.map((link) => {
              const { url, text } = link;
              return (
                <li key={link.id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
            
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((social) => {
            return (
              <li key={social.id}>
                <a href={social.url}>{social.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
