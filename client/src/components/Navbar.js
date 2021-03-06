import React from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "../styles/Navbar";
import GoogleAuth from "./GoogleAuth";
import { AppsIcon, HamburgerIcon, LogoIcon, SettingsIcon } from "./Icons";
import Search from "./Search";

function Navbar({ toggleSidebarOpen }) {
  return (
    <Wrapper>
      <div className="logo flex-row">
        <HamburgerIcon 
          className="toggle-navhandler"
          onClick={toggleSidebarOpen}
        />
        <span>
          <NavLink to="/">
            <LogoIcon
              style={{
                width: 80,
                height: 24,
              }}
            />
          </NavLink>
        </span>
      </div>

      <Search />

      <ul>
        <li>
          <AppsIcon />
        </li>
        <li>
          <SettingsIcon />
        </li>
        <li>
          {" "}
          <GoogleAuth />
        </li>
      </ul>
    </Wrapper>
  );
}

export default Navbar;
