/** @format */

import { useCallback, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import IntelligentLogo from "./assets/IntelligentLogo.png";
// import { createUseStyles, useTheme } from "react-jss";
// const useStyles = createUseStyles((theme) => ({
//   arrowContainer: {
//     position: "absolute",
//     top: -19,
//     right: 15,
//   },
//   dropdownButton: {
//     alignItems: "center",
//     background: "transparent",
//     border: "none",
//     cursor: "pointer",
//     display: "flex",
//     padding: 0,
//     outline: "none",
//   },
//   dropdownContainer: {
//     position: "relative",
//   },
//   dropdownItemsContainer: {
//     background: "white",
//     border: `1px solid ${theme.color.lightGrayishBlue2}`,
//     borderRadius: 5,
//     minWidth: 170,
//     padding: 0,
//     position: "absolute",
//     width: "100%",
//     top: ({ position }) => position.top,
//     right: ({ position }) => position.right,
//     bottom: ({ position }) => position.bottom,
//     left: ({ position }) => position.left,
//     "& button:first-of-type:hover div > svg > path": {
//       fill: theme.color.paleBlue,
//     },
//   },
//   dropdownItem: {
//     cursor: "pointer",
//     background: "transparent",
//     border: "none",
//     fontSize: 16,
//     outline: "none",
//     padding: "10px 10px",
//     "&:hover": {
//       background: theme.color.paleBlue,
//     },
//     "&:after": {
//       content: '" "',
//       display: "block",
//       position: "relative",
//       bottom: -10,
//       width: "100%",
//       height: 1,
//       background: theme.color.paleBlue,
//     },
//     "&:last-child:after": {
//       content: "",
//       display: "none",
//     },
//   },
//   title: {
//     marginLeft: '1em',
//   },
// }));

const Title = styled.span`
margin-left: 1em;
color: white;
`;
const Img = styled.img`
  float: left;
  margin: 5px;
  max-width: 8%;
`;
const Dropdown = styled.span`
  color: white;
`;

function NavBar ()  {
  // const theme = useTheme();
  // const classes = useStyles({ theme});
  const closeNav = useCallback(() => {
    document.getElementById("toggleButton").click();
  },[]);

   useEffect(() => {
     // Update the document title using the browser API
     document.title = `Intelligent Imagery`;
   });
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark navbar-style">
      {/* <Img src={IntelligentLogo} alt="Logo" /> */}
      <Title>Intelligent Imagery</Title>
      {/* <div classname={classes.title}>Intelligent Imagery</div> */}
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
          {/* USING NAVLINK does not allow the header to be focused us li instead */}
          <NavLink
            to="/"
            aria-label="This is the Home page"
            className="nav-item nav-link active"
            title="Home"
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
          {/* <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/" onClick={closeNav}>
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item" onClick={closeNav}>
              <a class="nav-link" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul> */}
          <div class="nav-item dropdown ">
            <div class="btn-group">
              <button
                class="btn nav-link dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Dropdown>Image Academy</Dropdown>
              </button>
              <ul
                class="dropdown-menu dropdown-menu-lg-end"
                aria-labelledby="dropdownMenuButton1"
              >
                <li className="dropdown-item">
                  <a class="dropdown-item" href="/imagery101">
                    Imagery101
                  </a>
                </li>
                <li className="dropdown-item">
                  <a class="dropdown-item" href="/step1">
                    STEP 1
                  </a>
                </li>
                {/*  <li className="dropdown-item">
                  <a class="dropdown-item" href="/step2">
                    STEP 2
                  </a>
                </li>
                <li className="dropdown-item">
                  <a class="dropdown-item" href="/step3">
                    STEP 3
                  </a>
                </li>
                <li className="dropdown-item">
                  <a class="dropdown-item" href="/step4">
                    STEP 4
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
