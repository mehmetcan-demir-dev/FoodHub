import { React, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [showSidebar, setShowSideBar] = useState(false);
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog,
    },
  ];

  function closeSidebar() {
    setShowSideBar(false);
  }

  return (
    <>
      {" "}
      <div className="navbar container">
        <Link to="/" className="logo">
          F<span>🍅🍎</span>dHub
        </Link>
        <div className="nav-links">
          {/* This code is using the "map" function
           to iterate over an array of "links". */}
          {links.map((link) => (
            /* Inside the map function, 
            it generates an anchor (<a>) element for each "link" in the array. */
            <Link
              className={
                location.pathname === link.path
                  ? "active"
                  : ""
              }
              to={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => setShowSideBar(true)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {/* This code checks the value of the "showSidebar" variable or state. 
      If it's true, it renders a "Sidebar" component with specific props. */}
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
}
