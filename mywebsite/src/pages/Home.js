/** @format */
import React, {  useEffect } from "react";
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  // color: palevioletred;
`;

const Wrapper = styled.section`
  padding: .5em 4em;
  // margin-Top: 4em;
  // background: papayawhip;
`;

const Col = styled.section`
display: flex;
flex-direction: column;
flex: 5;`;

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
  // max-width: 90vh;
`;

const Footer = styled.footer`
  text-align: center;
  flex: 4;
`;

function Home ()  {
  //  const theme = useTheme();
  //  const classes = useStyles({ theme });
useEffect(() => {
  document.title = "Intelligent Imagery Home";
}, []);
  return (
    // <div className={classes.dropdownContainer}>
      <Col>
        <main>
          <Wrapper>
            <Title>Intelligent Imagery - Something for Everyone </Title>
            <Content>
              <Article>
                Unlock your future into creating beautiful images. The step by
                step guide in the Image Academy will provide useful information
                to help you create your best images. Regardless of your skill
                level or experience, Intelligent Imagery has something for
                everyone. So, checkout the Image Academy and use the Menu Cards
                to move to other steps when ready. Be sure to click on Events
                and the Blog for the latest updates and information on creating
                intelligent images.
              </Article>
            </Content>
          </Wrapper>
        </main>
        <Footer>
          <p>
            © 2023 ·
            <a href="https://www.intelligentimagery.com/" rel="home">
              Jay Brass Intelligent Imagery
            </a>
          </p>
        </Footer>
      </Col>
    // </div>
  );
};

export default Home;
