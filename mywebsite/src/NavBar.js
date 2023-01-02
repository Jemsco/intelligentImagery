/** @format */

import { useCallback } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Title = styled.span`
margin-left: 1em;
`;

const Dropdown = styled.span`
  color: white;
`;

const NavBar = () => {
  const closeNav = useCallback(() => {
    document.getElementById("toggleButton").click();
  },[]);

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark navbar-style">
      <Title>Intelligent Imagery</Title>
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
