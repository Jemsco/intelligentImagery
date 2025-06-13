/** @format */
import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { useNavigate } from "react-router";
import monument from "../assets/monument.jpg";


const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  // color: palevioletred;
`;

const Wrapper = styled.section({
  // padding: "1em",
  background: "papayawhip",
  flexDirection: "column",
  display: "flex",
  justifyContent: "space-between",
  alignContent: "space-around",
  flexWrap: "wrap",
  // border: "5px solid red",
});
const WrapperCards = styled.section({
  display: "flex",
  padding: "1em",
  background: "papayawhip",
  flexDirection: "row",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  marginBottom: "2em",
  // border: "1px solid black",
  
});

const Col = styled.section`
  display: flex;
  flex-direction: column;
  flex: 5;
`;

const Steps = styled.div({
  marginTop: '.5em',
  width: "250px",
  padding: "0.5em 1em",
  cursor: 'pointer',
});

const Step1 = styled(Steps)({
  background: "purple",
});

const Step2 = styled(Steps)({
  background: "blue",
});

const Step3 = styled(Steps)({
  background: "green",
});

const Step4 = styled(Steps)({
  background: "red",
});

const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2em;
  // border: 1px solid red;
`;

const Article = styled.section`
  font-size: 1em;
  flex: 4;
  // min-height: 60vh;
  max-width: 75vw;
  // border: 1px solid blue;
  // felx-direction: row;
  @media only screen and (max-width: 768px) {
   flex-direction: column;

  }
`;

const Footer = styled.footer`
  text-align: center;
  flex: 4;
`;

const Text = styled.p`
  margin-left: 15px;
  // margin-right: 15px;
  font-size: 1.15em;
  // border: 1px solid black;
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
  margin-left: 15px;
  margin-right: 15px;
  // border: 2px solid yellow;
`;

const DivC = styled(Div)`
  text-align: center;
  @media only screen and (max-width: 1200px) {
    margin-top: 0.1em;
    // border: 1px solid green;
  }
`;

const Img = styled.img`
  justify-content: center;
  margin: 5px;
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
  @media only screen and (min-width: 1800px) {
      width: 1570px;
  }
`;


const Imagery101 = () => {
  const navigate = useNavigate();
   useEffect(() => {
     document.title = "Intelligent Imagery Imagery101";
   }, []);

  return (
    <Col>
      <main>
        <Wrapper>
          <Title>The Image Academy is designed around creating images. </Title>
          <Div>
            <Img src={monument} alt="snowyowl" />
          </Div>
          <Content>
            <Article>
              <DivC>
                <Text>
                  Whether you own a high end DSLR or a mobile phone camera, the
                  Image Academy will help you create better images. There is
                  information targeted toward DSLR users, but the purpose of the
                  Image Academy is to provide information useful for creating
                  images from any device that has a camera. Fiction or non
                  fiction, Professional, Amateur or snapshots, there is
                  something here for you.
                </Text>
              </DivC>
              <DivC>
                <Text>
                  The step program is designed to address specific topics in a
                  logical order but the steps can be taken in any order you
                  choose. This is to accommodate anyone from the beginner to the
                  experienced, and allow for the steps to be referred back to at
                  any time.
                </Text>
              </DivC>
              <DivC>
                <Italic>
                  Use the Menu Cards to move through the steps when you're ready
                </Italic>
              </DivC>
            </Article>
          </Content>
        </Wrapper>
        <WrapperCards>
              <Step1
                tabIndex={0}
                onClick={() => navigate("/step1")}
                name="step1"
              >
                <Card title="Step 1" text="IMAGE 101 THE BASICS" />
              </Step1>
              <Step2
                tabIndex={0}
                onClick={() => navigate("/step2")}
                name="step2"
              >
                <Card title="Step 2" text="About Your Camera" />
              </Step2>
              <Step3
                tabIndex={0}
                onClick={() => navigate("/step3")}
                name="step3"
              >
                <Card title="Step 3" text="Prisms Of Light" />
              </Step3>
              <Step4
                tabIndex={0}
                onClick={() => navigate("/step4")}
                name="step4"
              >
                <Card title="Step 4" text="The Subject IS the Subject" />
              </Step4>
           
        </WrapperCards>
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
  );
};

export default Imagery101;
