/** @format */

import {  useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";

function NavBar() {
  // const closeNav = useCallback(() => {
  //   document.getElementById("toggleButton").click();
  // }, []);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Intelligent Imagery`;
  });
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">Intelligent Imagery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdownMenu title="Image Academy" id="collasible-nav-dropdown">
              <DropdownSubmenu href="/imagery101" title="Imagery 101">
                <NavDropdown.Item href="/step1">Step 1</NavDropdown.Item>
                <NavDropdown.Item href="/step2">Step 2</NavDropdown.Item>
                <NavDropdown.Item href="/step3">Step 3</NavDropdown.Item>
                <NavDropdown.Item href="/step4">Step 4</NavDropdown.Item>
              </DropdownSubmenu>
              {/* <DropdownSubmenu href="#action/3.7" title="Imagery 102">
                <NavDropdown.Item href="#action/3.1">Step 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Step 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Step 3</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Step 4</NavDropdown.Item>
              </DropdownSubmenu> */}
            </NavDropdownMenu>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
