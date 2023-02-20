/** @format */
import React, { useRef} from "react";
import styled from "styled-components";
import ROT1 from "../assets/_DSC9072.jpg";
import ROT2 from "../assets/_DSC9072ROT.jpg";
import ROT3 from "../assets/_DSC6779.jpg";
import ROT4 from "../assets/_DSC6779ROT.jpg";
import Foreground1 from "../assets/_DSC8708.JPG";
import Foreground2 from "../assets/20190504_10086DSC_5956.jpg";
import FrameinFrame from "../assets/frameinframe.jpg";
import LeadingLines from "../assets/20190322_9005DSC_4880_1.jpg";
import fillFrame1 from "../assets/FillFrame1.jpg";
import fillFrame2 from "../assets/FillFrame2.jpg";
import Isolate from "../assets/isolate.jpg";
import Negativespace from "../assets/negativespace.jpg";
import Ruleofspace from "../assets/ruleofspace.jpg";
import Pointofview from "../assets/pointofview.jpg";
import Seanmotion from "../assets/seanmotion.jpg";
import Goldenratio1 from "../assets/goldenratio.jpg";
import Goldenratio2 from "../assets/goldenratiooverlay.jpg";
import ScrollButton from "../utils/ScrollButton";

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
  // margin-left: 15px;
  // margin-right: 25px;
`;
const TextBold = styled(Text)`
  font-size: 1em;
  font-weight: bold;
`;

const Img = styled.img`
  margin: 5px;
  max-width: 75%;
  @media (min-width: 650px) {
  max-width: 25%;
  }
  }
`;

const ImgR = styled(Img)`
  float: right;
  max-width: 25%;
`;
const ImgL = styled(Img)`
  float: left;
  max-width: 25%;
  // shape-outside: circle(75% at center center);
  // @media (min-width: 650px) {
  //   max-width: 5%;
  // }
`;
const P = styled.p``;
const Div = styled.div`
  margin-top: 20px;
  overflow: auto;
  // margin-bottom: 20px;
`;
const DivL = styled(Div)`
  float: left;
  width: 100%;
`;

const Step4 = () => {

   const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg, alt }) => {
     const imageRef = useRef(null);
     return (
       <ImgL
         onMouseOver={() => {
           imageRef.current.src = secondaryImg;
         }}
         onMouseOut={() => {
           imageRef.current.src = primaryImg;
         }}
         src={primaryImg}
         alt={alt}
         ref={imageRef}
       />
     );
   };

  return (
    <main>
      <Wrapper>
        <Title>THE SUBJECT IS THE SUBJECT</Title>
        <Content>
          <Article>
            <Text>
              The subject of this subject is the subject. Images can depict
              anything and there is a way to compose them that will be pleasing
              for others too. Composition is the structure of an image. Even if
              the exposure is spot on, if the composition is off or unpleasing,
              your image will be weak. At it's most basic points, lines, and
              shapes are the elements of composition. Composition should be
              deliberate. Elements and lines should be intentionally placed in
              an image. I'm a big fan of the saying "Plan your work and work
              your plan". This means that you should know what you want to
              create an image of before you create the image. You will have an
              opportunity to think about how to compose your imaage and what you
              want the image to convey. Time of day and environmental setting
              are important factors to consider. The type of light, and
              equipment you will have available, and how long it will take you
              to set up or prepare to create the image. Deciding about all of
              the prep work will also help in deciding how and where to place
              items in your image to make a strong composition. Below is a list
              of things to consider about composing your image. They aren't hard
              and fast rules, they are guidelines and are meant to help make a
              strong composition.
            </Text>
            <Div>
              <DivL>
                <TextBold>Rule of Thirds</TextBold>
              </DivL>
              <ImageToggleOnMouseOver
                primaryImg={ROT1}
                secondaryImg={ROT2}
                alt="bird on the beach"
              />
              <Text>
                Divide the frame into 9 equal rectangles, 3 across and 3 down
                place the important element(s) of the image along one or more of
                the lines or where the lines intersect. Move your mouse cursor
                over the image and you will see the lines appear. For cell
                phones, tap on the image (double tap to see it larger) This
                image actually uses the Rule of Thirds both horizontally with
                the sand, ocean and sky and vertically placing the bird (Oyster
                Catcher) on a vertical line on the right. It also uses the Rule
                of Space and breaks the Left to Right rule.
              </Text>
            </Div>
            <Div>
              <DivL>
                <TextBold>Centered Composition and Symmetry</TextBold>{" "}
              </DivL>
              <ImageToggleOnMouseOver
                primaryImg={ROT3}
                secondaryImg={ROT4}
                alt="mansion and reflection"
              />
              <Text>
                Symmetrical scenes are perfect for a centered composition.
                Scenes containing reflections are also an opportunity to use
                symmetry in the composition. Try a mix of the rule of thirds and
                symmetry to compose the image. The image of the Hopetoun House
                in Queensferry Scotland uses the Rule of Thirds well and it is
                also perfectly symmetrical. Mouse over or tap to see the grid
                lines.
              </Text>
            </Div>
            <Div>
              <DivL>
                <TextBold>Foreground Interest and Depth </TextBold>
                <Text>(left or right)</Text>
              </DivL>
              <ImgR src={Foreground1} alt="lighthouse" />
              <ImgL src={Foreground2} alt="waterfall" />
              <br /> <br /> <br />
              <Text>
                Good for showing and creating space for the subject in your
                image to occupy. Including foreground interest is a way of
                adding depth to the scene.In these images the rocks in the
                foreground add depth and lead the viewer to the main subject.
              </Text>
            </Div>
            <Div>
              <DivL>
                <TextBold>Frame Within the Frame </TextBold>
              </DivL>
              <ImgL src={FrameinFrame} alt="arches of building" />
              <br /> <br />
              <P>
                <Text>
                  Including a frame within the frame is a way of portraying
                  depth. Look for elements such as windows, arches or
                  overhanging tree branches to frame the image with.
                </Text>
              </P>
            </Div>
            <Div>
              <DivL>
                <TextBold>Leading Lines</TextBold>
              </DivL>
              <ImgL src={LeadingLines} alt="monument with moon" />
              <br /> <br />
              <Text>
                Leading lines help focus attention on important elements. Paths,
                walls or patterns can be leading lines and they do not have to
                be straight.
              </Text>
            </Div>

            <Div>
              <DivL>
                <TextBold>Fill the Frame </TextBold>
              </DivL>
              <ImgR src={fillFrame1} alt="statue closeup" />
              <ImgL src={fillFrame2} alt="owl face" />
              <br /> <br /> <br />
              <Text>
                Filling the frame with your subject, leaving little or no space
                around it can be effective. It helps focus the viewer completely
                on the main subject without any distractions.
              </Text>
            </Div>
            <Div>
              <DivL>
                <TextBold>Leave Negative Space </TextBold>
              </DivL>
              <ImgL src={Isolate} alt="bird on branch" />
              <br /> <br />
              <P>
                <Text>
                  Leaving a lot of empty or 'negative' space around your subject
                  creates a sense of simplicity and minimalism.
                </Text>
              </P>
            </Div>
            <Div>
              <DivL>
                <TextBold>Isolate the Subject </TextBold>
              </DivL>
              <ImgL src={Negativespace} alt="bird in sky" />
              <br /> <br />
              <P>
                <Text>
                  Using a shallow depth of field to isolate your subject will
                  focus attention on the subject.This image of a cat bird uses a
                  shallow depth of field to isolate it from the background.
                </Text>
              </P>
            </Div>
            <Div>
              <DivL>
                <TextBold>Change your Point of View </TextBold>
              </DivL>
              <ImgL src={Pointofview} alt="baby swans in water" />
              <br /> <br />
              <P>
                <Text>
                  Try getting high up or low down or shot from a different angle
                  to compose your image. Study your subject to find what is
                  pleasing and interesting. Sometimes getting on the same level
                  is the best angle.
                </Text>
              </P>
            </Div>
            <Div>
              <DivL>
                <TextBold>Rule of Space </TextBold>
              </DivL>
              <ImgL src={Ruleofspace} alt="bird flying" />
              <br /> <br />
              <P>
                <Text>
                  The rule of space relates to the direction the subject(s) in
                  your photo are facing. Leave more space in front of the
                  subject so that it can "move" into it.
                </Text>
              </P>
            </Div>
            <Div>
              <DivL>
                <TextBold>Left to Right Rule </TextBold>
              </DivL>
              <ImgL src={Seanmotion} alt="child running" />
              <br /> <br />
              <P>
                <Text>
                  There is a theory that says we read an image from left to
                  right in the same way we would read a book. Here my bionic son
                  is running from left to right while my daughter and the tree
                  anchor the left side of the image.
                </Text>
              </P>
            </Div>
            <Div>
              <DivL>
                <TextBold>Golden Ratio</TextBold>{" "}
              </DivL>
              <ImageToggleOnMouseOver
                primaryImg={Goldenratio1}
                secondaryImg={Goldenratio2}
                alt="red fox in grass"
              />
              <Text>
                Two quantities are in the golden ratio if their ratio is the
                same as the ratio of their sum to the larger of the two
                quantities. Move your mouse cursor over the image or tap on the
                image. The frame is divided into a series of squares known as a
                "Phi Grid". Use the squares to draw a spiral called a "Fibonacci
                Spiral". It is believed that the golden spiral method of
                composition has been in existence for over 2,400 years having
                been devised in Ancient Greece.Notice how the eyes of the
                subject fall right in the smallest box and tightest area of the
                spiral.
              </Text>
            </Div>
            <Footer>
              <ScrollButton />
              <br />© 2020 · Jay Brass Intelligent Imagery
            </Footer>
          </Article>
        </Content>
      </Wrapper>
    </main>
  );
};

export default Step4;
