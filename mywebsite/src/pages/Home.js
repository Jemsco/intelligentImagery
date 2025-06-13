/** @format */
import React, { useEffect } from "react";
import styled from "styled-components";
import snowyowl from "../assets/snowyowl.jpg";
import stairs from "../assets/stairs.jpg";
import academy from "../assets/hopetonhouse.jpg";

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  // color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 0.5em 4em;
  // margin-Top: 4em;
  // background: papayawhip;
`;

const Col = styled.section`
  display: flex;
  flex-direction: column;
  flex: 5;
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
  // max-width: 90vh;
`;

const Footer = styled.footer`
  text-align: center;
  flex: 4;
`;

const Text = styled.p`
  margin-left: 15px;
  margin-right: 25px;
  font-size: 1.15em;
`;

const TextBold = styled(Text)`
  font-size: 1.25em;
  font-weight: bold;
`;

const Italic = styled(Text)`
  font-style: italic;
  color: #000000;
  font-size: 1.1em;
`;

const Div = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

const DivL = styled(Div)`
  float: left;
  width: 40%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const DivR = styled(Div)`
  float: right;
  width: 40%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const DivC = styled(Div)`
  // text-align: center;
`;

const DivRsmall = styled(Div)`
  float: right;
  width: 25%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Img = styled.img`
  justify-content: center;
  margin: 5px;
  width: 75%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ImgL = styled.img`
  float: left;
  margin: 5px;
  width: 75%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

function Home() {
  //  const theme = useTheme();
  //  const classes = useStyles({ theme });
  useEffect(() => {
    document.title = "Intelligent Imagery Home";
  }, []);
  return (
    <Col>
      <main>
        <Wrapper>
          <Title>Intelligent Imagery - Something for Everyone </Title>
          <DivC>
            <Img src={snowyowl} alt="snowyowl" />
          </DivC>
          <DivC>
            <TextBold>
              Unlock your future into creating beautiful images.
            </TextBold>
          </DivC>
          <Content>
            <Article>
              <DivC>
                <Italic>
                  Regardless of your skill level or experience, Intelligent
                  Imagery has something for everyone.
                </Italic>
              </DivC>
              <DivL>
                <a href="/imagery101" rel="imageacademy">
                  <Img src={academy} alt="mansion" />
                </a>
                <Text>
                  So, checkout the Image Academy and use the Menu Cards to move
                  to other steps when you're ready.
                </Text>
              </DivL>

              <DivR>
                <a href="/imagery101" rel="imageacademy">
                  <ImgL src={stairs} alt="stairs" />
                </a>
              </DivR>
              <DivRsmall>
                <Text>
                  The step by step guide in the Image Academy has useful
                  information to help you create your best images.
                </Text>{" "}
              </DivRsmall>
            </Article>
          </Content>
          <Content>
            <Italic>
              Be sure to click on Events and the Blog for the latest updates and
              information on creating intelligent images.
            </Italic>
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
}

export default Home;
