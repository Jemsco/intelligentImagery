/** @format */

import React, { Component } from "react";
import Iframe from "./Iframe";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  // color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 0.5em 0.5em;
  margin-top: 4em;
  // background: papayawhip;
  max-width: 100%;
`;
const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Article = styled.section`
  font-size: 1em;
  margin-top: 2em;
  flex: 4;
  min-height: 60vh;
`;

const Blog = () => {
  const src = "https://intelligentimagery.blogspot.com/";
  return <Iframe source={src} />;
};
export default Blog;
