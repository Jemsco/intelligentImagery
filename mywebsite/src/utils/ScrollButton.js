/** @format */

import React, { useState } from "react";
import styled from "styled-components";
// import { FaArrowCircleUp } from "react-icons/fa";

 const Button = styled.div`
  width: 100%;
  bottom: 40px;
  height: 20px;
  font-size: 1rem;
  z-index: 1;
  cursor: pointer;
`;

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >TOP</Button>
  );
};

export default ScrollButton;
