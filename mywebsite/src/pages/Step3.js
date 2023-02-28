/** @format */
import React from "react";
import styled from "styled-components";
import Backlit1 from "../assets/_DSC0960.jpg";
import Backlit3 from "../assets/_DSC6412.jpg";
import frontLit from "../assets/_DSC7078.jpg";
import SideLit1 from "../assets/20171210_1379_DSC0864.jpg";
import SideLit2 from "../assets/20180324_2412_DSC0133.jpg";
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

const Text1 = styled(Text)`
  margin-top: 20px;
`;

// const Italic = styled(Text)`
//   font-style: italic;
//   color: #e00000;
//   font-size: 1em;
// `;

const Img = styled.img`
  margin: 5px;
  max-width: 75%;
  @media (min-width: 650px) {
  max-width: 25%;
  }
  }
`;
// const ImgC = styled(Img)`
//   max-width: 100%;
//   @media (min-width: 650px) {
//   max-width: 75%;
//   }
//   }
// `;
// const ImgSmall = styled(Img)`
//   max-width: 25%;
//   @media (min-width: 650px) {
//     max-width: 5%;
//   }
// `;
const ImgR = styled(Img)`
  float: right;
  max-width: 25%;
  height: auto;
  overflow: auto;
`;
const ImgL = styled(Img)`
  float: left;
  max-width: 25%;
  height: auto;
  overflow: auto;
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
const DivC = styled(Div)`
  text-align: center;
  margin-bottom: 20px;
`;

const Step3 = () => {

  return (
    <main>
      <Wrapper>
        <Title>PRISMS OF LIGHT</Title>
        <Content>
          <Article>
            <Text>PIE</Text>
            <br />
            <Text1>What does PIE have to do with photography?</Text1>
            <br />
            <Text>
              Photography is essentially Drawing With Light. The word
              photography was created from the Greek roots φωτός (phōtos),
              genitive of φῶς (phōs), "light" and γραφή (graphé) "representation
              by means of lines" or "drawing", together meaning "drawing with
              light". Both greek words derive from the older language,
              Proto-Indo-European or PIE. Interestingly photo and beacon are
              both derived from the same word in PIE as well as graph and carve
              or carving come from the same word in PIE. So photography could
              literally mean bright carving. Working with light is fundamental
              in photography. Similar to painting on a canvas, images are
              painted by capturing light on film or a digital sensor. Simply
              put, no light, no image. Dark objects absorb more light and
              reflect less to the camera, so they look dark. Bright objects
              reflect more light and look brighter. The difference between the
              two is considered the dynamic range. Ansel Adams put these darks
              and lights into zones. He considered 10 zones for each scene. For
              most photography, zone 3 or III to zone 7 or VII are of most
              concern. Anything darker or lighter than items in those zones will
              come out looking all black or all white. Colors too can be placed
              in these zones but colors are defined by wavelengths and
              frequencies of the light.
            </Text>
            <P>
              <DivL>
                <TextBold>Learn to See Light</TextBold>
              </DivL>
            </P>
            <P>
              <Text1>
                Understanding light, and knowing that not all light is created
                equal is a learned skill and not one to easily master.
                Composition and exposure aside, learning to "see" light is a key
                element in making good images.
              </Text1>
            </P>
            <P>
              <DivL>
                <TextBold>Light Properties</TextBold>
              </DivL>
            </P>
            <Text>Light has basic properties that can influence images</Text>
            <DivC>
              <TextBold>Intensity - Direction - Color Quality</TextBold>
            </DivC>
            <Text1>
              <P>
                Different types of images have different concerns when it comes
                to light. See below for descriptions of these properties
              </P>
            </Text1>
            <P>
              <DivL>
                <TextBold>Intensity</TextBold>
              </DivL>
            </P>
            <P>
              <Text>
                How much light do you have? Can you control it? Being indoors
                does not mean you can control the intensity of the light.
                Portrait studios will have light setups to provide the ideal
                light, but other settings can vary. Candles will give a
                different light than fluorescent lights. If you are outdoors,
                your light is controlled by the environment. Is it a sunny day
                or cloudy day? Are you in the shade or a covered area? There are
                options that can be used to overcome the intensity of the
                available light. Too much light and you will need to change your
                aperture or shutter speed or lower your ISO setting. a smaller
                aperture (bigger number f11 or f16) or a faster shutter speed
                will let in less light and a lower ISO will be less sensitive to
                light. There might be times when you will adjust all 3 and you
                will still have too much light for the image you want to make.
                There are filters that you can add to the end of your lens that
                can decrease the amount of light. Discussion on filters is
                beyond this steps scope. The opposite of too much light is a
                scene where there isn't enough. These often require a tripod to
                allow the shutter to be open for a longer period of time than
                can be held steady by your hand. You can add light to the scene
                using artificial light such as a flash unit or a reflecting
                panel. You can also control the light's intensity by controlling
                the distance of the light source from the subject. Light falls
                off at the square of the distance. Meaning moving twice as far
                away from the light, or doubling the distance between you and
                the light will result in 1/4 as much light. This is known as the
                inverse-square law. If you double the distance again so that you
                are 4 times as far away from the light, you will have 1/16th the
                amount of light. Of course the opposite of this is true too. If
                you cut the distance between the camera and the light by half,
                you will have 4 times more light.
              </Text>
            </P>
            <P>
              <DivL>
                <TextBold>The color of light</TextBold>
              </DivL>
            </P>
            <P>
              <Text>
                Different light sources emit different colors. This is called
                color temperature, which is measured in Kelvins. Higher
                tempertures will give a warmer tone or a golden hue to your
                image while lower kelvin numbers, lower tempertures in light not
                in air, will result in cooler or more blue colored images. This
                may or may not be desireable and changing the white balance
                setting in your camera can compensate for these different color
                temperatures or colors of light. It's also fun to change the
                white balance settings to be wrong on purpose to see what effect
                they have on your image.
              </Text>
            </P>
            <P>
              <DivL>
                <TextBold>Quality</TextBold>
              </DivL>
            </P>
            <P>
              <Text>
                In regard to quality, there is diffused and concentrated and
                combinations of the two. Diffused light or soft light will
                flatten the image while concentrated or hard light will define
                edges and can also create a scene with a wide dynamic range.
                Remember that phrase? Zone III to Zone VII is the optimal range.
                Bright sunny days create strong dark shadows. They can help to
                define elements of your image, but they can also hide elements
                that you wanted to depict. Cloudy days or images taken in the
                shade, may not have any shadows at all and getting definition in
                elements will be difficult. This is true indoors as well, a
                single light source will provide strong shadows while a well lit
                area will lessen the shadows. You have the option of introducing
                light from a flash unit, and many allow you to control the
                amount of light they put out, so you could "fill" the shadows
                with some light while not over exposing your subject.
              </Text>
            </P>
            <P>
              <DivL>
                <TextBold>Direction</TextBold>
              </DivL>
            </P>
            <P>
              <Text>
                An image is a two-dimensional representation of a
                three-dimensional world. You need space for space. Shadows are
                that space. Shadows give dimension and they are directly aligned
                with the source of light. Move the light and you move the
                shadows. Move the light further away from your subject and the
                shadows will grow longer and fade. Your image will lose contrast
                or flatten out. Move it closer and the shadows shrink but get
                darker. So now that you understand how to control the space, you
                can explore the directions of light that create space.
              </Text>
            </P>
            <Div>
              <DivL>
                <TextBold>Back lighting</TextBold>
                <Text> or shooting directly at the light source.</Text>
              </DivL>
              <Text>
                Good for transparent objects or to outline a subject think
                silhouettes. These two images are both backlit.
              </Text>
              <ImgR src={Backlit1} alt="snowy owl in sand" />
              <ImgL src={Backlit3} alt="silhouette of monument" />
              <br /> <br /> <br />
              <P>
                <Text>
                  The Dugald Stewart Monument on Calton Hill in Edinburgh
                  Scotland is in silhouette with the sun bursting through an
                  arch. The snowy owl is also backlit, taken in the early
                  morning but uses ambient light to fill in the foreground.
                </Text>
              </P>
            </Div>
            <Div>
              <P>
                <DivL>
                  <TextBold>Front lighting</TextBold>{" "}
                  <Text>
                    where the light is directly behind you. This will not show
                    shadows as they will fall behind the subject.
                  </Text>
                  <ImgL src={frontLit} alt="statue at night" />
                  <br /> <br /> <br />
                  <P>
                    <Text>
                      In this picture the statue is lit from the front, it also
                      is exhibiting a rule of space, allowing the statue to look
                      into the image. Edinburgh Castle in the background is also
                      exhibing some front lighting.
                    </Text>
                  </P>
                </DivL>
              </P>
            </Div>
            <Div>
              <P>
                <DivL>
                  <TextBold>Side lighting</TextBold>
                  <Text>
                    (left or right) Good for showing and creating space for the
                    subject in your image to occupy.
                  </Text>
                </DivL>
                <ImgR src={SideLit1} alt="photographer on paved path" />
                <ImgL src={SideLit2} alt="child running around fountain" />
                <br /> <br /> <br />
                <P>
                  <Text>
                    You can see with the child running around the fountain that
                    the shadow is to the left showing that the light source is
                    coming from the opposite side. Similarly with the image on
                    the right, the sunlight is coming through the trees from
                    behind me casting long shadows in front of me.
                  </Text>
                </P>
              </P>
            </Div>
            <P>
              <DivL>
                <TextBold>Light Sources</TextBold>
              </DivL>
            </P>
            <Text>
              The items mentioned above depend on the light source, the distance
              and angle it's originating from. For light sources there are two
              kinds: natural and artificial.
            </Text>
            <P>
              <DivL>
                <TextBold>Natural Light</TextBold>
              </DivL>
            </P>
            <Text>
              This generally refers to sunlight or moonlight. But it can also
              refer to ambient light that is not able to be influenced. This
              kind of light can be found in cities or large indoor rooms where
              there are many light sources.
            </Text>
            <P>
              <DivL>
                <TextBold>Artificial Light</TextBold>
              </DivL>
            </P>
            <Text>
              Artificial light is light that can be controlled regarding its
              color, intensity (the strength or the distance from the subject),
              quality (diffused or concentrated) and direction.
            </Text>
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

export default Step3;
