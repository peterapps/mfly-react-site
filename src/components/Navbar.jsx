import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../css/Navbar.css";
import logo from "../img/mfly_white.png";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Members", path: "/members" },
  { name: "Fleet", path: "/fleet" },
  { name: "Sponsors", path: "/sponsors" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className={"mfly-navbar" + (open ? " responsive" : "")}>
      <Link to="/" className="logo">
        <img src={logo} alt="M-Fly" className="logo" />
      </Link>
      {links.map(({ name, path }) => (
        <Link
          key={path}
          to={path}
          className={path === pathname ? "active" : ""}
        >
          {name}
        </Link>
      ))}
      <a href="#" className="icon" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faBars} size="lg" color="white" />
      </a>
    </div>
  );
}
