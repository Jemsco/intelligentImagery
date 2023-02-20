/** @format */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TheExposureTriangle from "../assets/TheExposureTriangle.png";
import KodakCanister from "../assets/kodakcanister.png";
import ISOScale1 from "../assets/ISOscale1.jpg";
import FStops from "../assets/fStops.png";
import ScrollButton from "../utils/ScrollButton";
import ReactModal from "react-modal";
import { MODAL_CONTENT } from "../utils/constants/ModalConent";

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  // color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 0.5em 0.5em;
  // margin-Top: 4em;
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
  // max-width: 90vh;
`;

const Footer = styled.footer`
  text-align: center;
  flex: 4;
`;

const Text = styled.text`
  font-size: 1.15em;
  margin-left: 15px;
  margin-right: 25px;
`;
const TextBold = styled(Text)`
  font-size: 1em;
  font-weight: bold;
`;

const Text1 = styled(Text)`
  margin-top: 20px;
`;

const Italic = styled(Text)`
  font-style: italic;
  color: #e00000;
  font-size: 1em;
`;

const Img = styled.img`
  margin: 5px;
  max-width: 75%;
  @media (min-width: 650px) {
  max-width: 25%;
  }
  }
`;
const ImgC = styled(Img)`
  max-width: 100%;
  @media (min-width: 650px) {
  max-width: 75%;
  }
  }
`;
const ImgSmall = styled(Img)`
  max-width: 25%;
  @media (min-width: 650px) {
    max-width: 5%;
  }
`;

const P = styled.p``;
const Div = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
const DivL = styled(Div)`
  float: left;
  width: 100%;
`;
const DivC = styled(Div)`
  text-align: center;
`;

const Button = styled.div`
  cursor: pointer;
  background-color: transparent;
  color: #3498db;
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  // maxSize: 50%;
`;

const Step1 = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const handleOpenModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

   useEffect(() => {
     showModal && (document.body.style.overflow = "hidden");
     !showModal && (document.body.style.overflow = "unset");
   }, [showModal]);

  return (
    <main>
      <Wrapper>
        <Title>
          Imagery 101
          <br />
          The Basics
        </Title>
        <Content>
          <Article>
            <Text>
              To understand what makes a well exposed image it is necessary to
              become acquainted with the elements that are used to make an
              image. While there are many variables to consider, there are 3
              main elements that together make up what is known as{" "}
            </Text>
            <DivC>
              <TextBold>The Exposure Triangle</TextBold>
            </DivC>
            <DivC>
              <Img src={TheExposureTriangle} alt="Exposure Triangle" />
              <DivC>
                <TextBold>Aperture Shutter Speed ISO</TextBold>
              </DivC>
            </DivC>
            <Text1>
              In this step we will explore the Exposure Triangle and clarify how
              each element relies on the other two to make a well exposed image.
              By understanding how to expose an image properly, you will be able
              to capture photographs with high levels of detail in both the
              shadows and highlight areas.
            </Text1>
            <DivL>
              <TextBold>ISO </TextBold>
              <Text1>(sensitivity to light)</Text1>{" "}
              <ImgSmall src={KodakCanister} alt="Film canister" />
            </DivL>
            <P>
              <Text1>
                Prior to the digital age, when film was used in cameras, an
                image maker was only able to control 2 of these elements until
                the roll of film was used and a new roll with more or less
                sensitivity could be loaded. That was because the roll film was
                predetermined to have a level of sensitivity that could not be
                changed. This level was called the ASA rating and was
                prominently displayed on the outside of the canister that held
                the light sensitive film. <br />
                <P>
                  Today we know the sensitivity of the digital sensors by the
                  ISO number. ISO refers to the International Organization for
                  Standardization. A benefit today is that each and every image
                  created using a modern camera can use a different ISO.
                </P>{" "}
                <Italic>
                  *** Note for image makers using mobile devices, unless you
                  download a third party app, changing any one of the elements
                  in the Exposure Triangle is not possible. There is some in
                  camera processing you can do after you take the picture. It
                  should also be noted that cell phone cameras have come a long
                  way and for posting and sharing on social media, they have a
                  distinct advantage with more than acceptable image quality.
                  One way you can change the exposure manually on your phone
                  camera is by simply tapping on the screen and when you see the
                  sunburst symbol, use your finger to swipe up or down to
                  lighten or darken the image. The camera is actually adjusting
                  all of the exposure variables to display the image you see.
                </Italic>
                <P>
                  Higher values of ISO mean that the sensor does not need as
                  much light to make a correct exposure. Low ISO values mean
                  that the sensor will need more light. Back in the days of
                  film, there wasn't as much flexibility as there is now. As
                  noted earlier, the sensitivity was set until the roll of film
                  was finished and replaced with another roll, possibly with a
                  different sensitivity value. Today, the control of the
                  sensitivity of the digital sensor can be done on the fly. For
                  digital cameras the sensitivity control is actually increasing
                  or decreasing the electrical amplification.
                </P>{" "}
                <Section>
                  <div>
                    <Button onClick={() => handleOpenModal("ISO")}>
                      ISO IN DIGITAL CAMERAS
                    </Button>
                  </div>
                  <div>
                    <Button onClick={() => handleOpenModal("ASA")}>
                      ASA IN FILM CAMERAS
                    </Button>
                  </div>
                  <ReactModal
                    isOpen={showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                    style={{
                      content: {
                        position: "absolute",
                        top: "25%",
                        left: "40px",
                        right: "40px",
                        bottom: "40px",
                        border: "1px solid #ccc",
                        // background: "#fff",
                        overflow: "auto",
                        // WebkitOverflowScrolling: "touch",
                        borderRadius: "4px",
                        outline: "none",
                        // padding: "20px",
                        maxWidth: "75%",
                        maxHeight: "50%",
                      },
                    }}
                  >
                    <button onClick={handleCloseModal}>X</button>
                    <P>{MODAL_CONTENT[modalContent]}</P>
                    <button onClick={handleCloseModal}>X</button>
                  </ReactModal>
                </Section>
                <DivC>Here is the ISO scale</DivC>
                <DivC>
                  <ImgC src={ISOScale1} alt="ISO Triangle" />
                </DivC>
                <P>
                  If you think of ISO in terms of compensating for darkness or
                  lack of light, it will help you to remember when to increase
                  or decrease it. In both film and digital cameras, the higher
                  the ISO number, the more grainy or "noise" there will be.
                  Balancing the amount of noise and a proper exposure takes
                  practice.
                </P>
                <P>
                  <DivL>
                    <TextBold>Aperture</TextBold>
                  </DivL>
                </P>
                Aperture refers to the size of the circular hole in the lens
                that lets in light. The bigger the hole, the more light that
                reaches the sensor. The numbers for apertures do not correspond
                to any regular system we are acquainted with. They are not like
                numbers on a clock or use a base 10 system like the Metric
                System. <br />
                They are:<P> 2, 2.8, 4, 5.6, 8, 11, 16, 22 </P>Some lenses for
                cameras will have other numbers like 1.8. This next statement is
                important to grasp. The smaller number actually is a bigger hole
                in the lens. That's because a key piece of information is
                missing from the above numbers. They should be thought of as
                fractions: <br />
                <P>1/2 1/2.8 1/4 1/5.6 1/8 1/11 1/16 1/22</P>
                <P>
                  It should make more sense now that if you have 1/2 of
                  something you have more than if you have 1/8 th of something.
                  So If you use an aperture of 2 (1/2) you are letting in more
                  light because the hole is bigger than an aperture of 8 (1/8).
                  In the field, you may often hear others refer to these as F
                  numbers. (f2 or f5.6) You can think of the F as referring to
                  the word 'Fraction' and it will help to understand the size of
                  the opening in the lens.
                </P>
                <DivC>
                  <ImgC src={FStops} alt="Aperture images" />
                </DivC>
                <P>
                  There are very specific reasons why you would want to change
                  the aperture settings and since this topic is about exposure,
                  one reason to change the aperture setting is related to the
                  amount of light available. For outdoors this change is based
                  on time of day and whether the sun is shining bright or not.
                  For indoors, this will be affected by the amount and type of
                  light source. Flash units provide temporary light and can be
                  controlled for the amount of light they put out. Professional
                  lighting equipment also provides a reliable source. Other
                  light sources from candles to incandescent and fluorescent
                  lights will provide different results. All can be accounted
                  for by settings in your camera and you should consult your
                  owners manual regarding white balance settings. For this
                  topic, it is important to know that the more light available
                  the smaller the aperture setting can be and conversely, the
                  less light available the larger the aperture setting has to
                  be. In some cases you may not have a choice as the available
                  light is either very bright or very dim and cannot be
                  controlled.
                </P>
                <P>
                  <DivL>
                    <TextBold>Shutter Speed</TextBold>
                  </DivL>
                </P>
                <P>
                  Shutter speed refers to the speed that the shutter opens and
                  closes allowing light to touch the sensor or film. The faster
                  speed will not allow very much light to touch the sensor.
                  Regarding exposure, this may mean that the available light is
                  very bright and there is no need to have a slower shutter
                  speed. If the available light is very dim, a slower shutter
                  speed will be necessary to make a well exposed image. In
                  regard to the Exposure Triangle, dim lighting conditions can
                  be overcome by using a larger aperture setting or a higher ISO
                  setting and in some cases both. A well exposed image does not
                  mean it will be free from blur, there are other factors that
                  can lead to blurry images. Faster shutter speeds will reduce
                  the amount of blur that the subject is creating. Subjects that
                  can cause blur are hummingbird wings or leaves on trees on a
                  windy day for outdoors and fast moving pets or concerts for
                  indoors. Shutter speed numbers are measured in seconds and can
                  and often are in fractions. You will hear others refer to
                  these as fractions in the field. 1 250th (pronounced one two
                  fiftieth) for example. Starting at 1 second it should be easy
                  to move to slower shutter speeds of 2, 3, or 4 seconds.
                  Speeding up the shutter is where we encounter fractions. From
                  1 second we go to 1/2 1/3 1/4 1/8 1/15 1/30 1/60 1/125 1/250
                  1/500 1/1000 Some cameras will be able to provide different
                  shutter speed numbers in between what is shown above and some
                  cameras are capable of shutter speeds that are as fast as
                  1/4000 or faster.{" "}
                </P>
                <P>
                  Take the quiz:{" "}
                  <a
                    href="https://jaysphotoquiz1.s3.us-east-2.amazonaws.com/index.html"
                    target="#"
                  >
                    Photo Quiz
                  </a>
                </P>
              </Text1>
              <Footer>
                <ScrollButton />
                <br />© 2020 · Jay Brass Intelligent Imagery
              </Footer>
            </P>
          </Article>
        </Content>
      </Wrapper>
    </main>
  );
};

export default Step1;
