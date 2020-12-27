import React from "react";
import { Image } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar } from "@material-ui/core";
import "./Header.css";
import logo from "../../images/logo.png";

function Header() {
  return (
    <div id="header">
      <Image id="header-logo" src={logo} />

      <div className="header-input-wrapper">
        <input type="text" placeholder="Start the research" />
        <SearchIcon />
      </div>
      <div className="header-right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
