/** @format */

import React, {useState} from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
 

  const closeNav = () => {
    document.getElementById("toggleButton").click();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
      <a className="navbar-brand" href="/">
        Intelligent Imagery
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" id="toggleButton" />
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
        data-toggle="collapse"
        data-target=".navbar-collapse"
      >
        <div className="navbar-nav mr-auto">
          <NavLink
            to="/"
            className="nav-item nav-link active"
            onClick={closeNav}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="nav-link nav-link active"
            onClick={closeNav}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className="nav-link nav-link active"
            onClick={closeNav}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
    // <React.Fragment>
    //   <NavBar expand="lg" expanded={expanded}>
    //     <div>
    //       <NavBar.Brand as={NavLink} to="/" onClick={closeNav}>
    //         Site Header
    //       </NavBar.Brand>
    //       <NavBar.Toggle aria-controls="basic-navbar-nav" onClick={navToggle} />
    //       <NavBar.Collapse id="basic-navbar-nav">
    //         <NavBar className="me-auto">
    //           <NavBar.Link to="/home" onClick={closeNav}>
    //             Link 1
    //           </NavBar.Link>
    //           <NavBar.Link to="/about" onClick={closeNav}>
    //             Link 2
    //           </NavBar.Link>
    //           <NavBar.Link to="/contact" onClick={closeNav}>
    //             Link 3
    //           </NavBar.Link>
    //         </NavBar>
    //       </NavBar.Collapse>
    //     </div>
    //   </NavBar>
    // </React.Fragment>
  );
};

export default NavBar;
