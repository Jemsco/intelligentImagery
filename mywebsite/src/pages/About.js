/** @format */
import React from "react";
import styled from "styled-components";
import JayStJohnsBay from '../assets/JayStJohnsBay.jpg';
import jaybrownsfalls from "../assets/jaybrownsfalls.jpg";
import jaycolorado from "../assets/jaycolorado.jpg";
import jayupstate from "../assets/jayupstate.jpg";
import jayovergators from "../assets/jayovergators.jpg";

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
  // text-align: justify;
  margin-left: 15px;
  margin-right: 25px;
`;

const Img = styled.img`
float: left;
margin: 5px;`;

const ImgR = styled.img`
  float: right;
  margin: 5px;
`;


function About() {
  return (
    <Col>
      <main>
        <Wrapper>
          <Title>Jay's Biography </Title>
          <Content>
            <Article>
              <Img src={JayStJohnsBay} alt="Jay at St Johns Bay" />
              <ImgR src={jaybrownsfalls} alt="Jay at Browns Falls" />
              <Text>
                Jay Brass has loved the outdoors and photography since he was a
                young boy growing up in the foothills of the Adirondacks. In
                fact, much of his young life was spent hiking, kayaking and
                camping all over the Adirondack Park.{" "}
              </Text>

              <Text>
                Back in the day, Jay was a fan of George Eastman and it earned
                him the nickname "The Kodak Kid", a name he continues to use
                today.
              </Text>
              <Img src={jayupstate} alt="Jay Upstate" />
              <Text>
                He learned the finer points of photography in college -
                developing film by hand, creating prints from negatives and
                hanging them to dry. This earned him a Bachelors' degree in
                photography in 1990, and he soon began to find opportunities to
                enter juried shows and have his work printed in various
                publications. Jay worked at photo developing shops to support
                his habit, and witnessed firsthand the arrival of the digital
                age.
              </Text>
              <Img src={jayovergators} alt="Jay in Colorado" />
              <Text>
                This was an important crossroad in his life. Would he maintain
                the truism of using film, or cross to the dark side and embrace
                digital renderings. To quote the rock band Rush, "If you choose
                not to decide, you still have made a choice." As for his
                decision, Jay primarily uses digital equipment today, but he
                maintains all of his original 35mm equipment and the ability to
                use it. As guitar players collect guitars, Jay has a collection
                of cameras, from Olympus, to Minolta, and Nikon, but his
                favorite has to be his medium format twin lens reflex
                Rolleiflex. It is the camera he used for his thesis, and it
                holds an esteemed position within his collection. Jay holds a
                Masters degree in Engineering, and when he is not doing
                photography, he works as a software engineer by day and
                sometimes by night.{" "}
              </Text>
              <Img src={jaycolorado} alt="Jay in Colorado" />
              <Text>
                He enjoys hiking, biking and horsebackriding on the trails of
                Long Island, and spending time with his family. In any free time
                he has left, he enjoys writing about himself in the third
                person.
              </Text>
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
  );
}

export default About;
