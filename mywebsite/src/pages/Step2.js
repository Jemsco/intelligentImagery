/** @format */
import React from "react";
import styled from "styled-components";
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

const Italic = styled(Text)`
  font-style: italic;
  color: #e00000;
  font-size: 1em;
`;

const P = styled.p``;
const Div = styled.div`
  margin-top: 20px;
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


const Step2 = () => {

  return (
    <main>
      <Wrapper>
        <Title>ABOUT YOUR CAMERA...</Title>
        <Content>
          <Article>
            <Text>What is it about your camera that you know?</Text>
            <br />
            <Text1>
              This step will "Focus" on focusing. Where and when to focus, how
              to focus and recompose your image, what focus area and meetering
              mode to use. Paired with this are discussions on white balance,
              exposure compensation, bracketing and something called a
              histogram. Lets discuss focusing first. Your camera will likely
              have the following options for the focusing mode:
            </Text1>
            <br />
            <Text>
              Your camera will likely have the following options for the
              focusing mode:
            </Text>
            <DivC>
              <TextBold>Continuous - Single - Automatic - Manual</TextBold>
            </DivC>
            <P>
              <Text1>
                Many people tend to pick Automatic mode and never think about
                focus modes again. Most of the time this will work fine. For
                fast moving subjects, or panning (following the subject with
                your camera), Automatic may not give ideal results. For this you
                will need Continuous mode. Continuous mode will keep refocusing
                on the subject as the subject moves. Cameras use contrast to
                find the subject. If you are trying to photograph a subject that
                blends with the background, your camera will struggle to find
                the focus and you could end up with blurry or out of fucus
                images. Single focus will work well with subjects that don't
                move, like portraits or still life. Single focus will only focus
                one time until the shutter is pressed again. Manual focus, as
                the name implies, is all manual. In Manual mode the camera will
                not automatically focus for you, you will have to turn the lens
                barrel yourself to bring the subject into focus. This is the way
                it always used to be, but with today's cameras, autofocus is not
                only faster, it is more precise. Still there are times when the
                camera's autofocus just can't find the right area to focus on.
                For this, manual focus will help.
              </Text1>
              <P>
                <DivL>
                  <TextBold>When and Where To Focus</TextBold>
                </DivL>
                <Text>
                  For many, the where is easy. Point the camera at your friend
                  and click the button. The camera focuses on your friend and
                  you end up with a picture or selfie. Most of today's cameras
                  have an AE/AF button to lock the exposure which is also used
                  to lock the focus. Cell phones too have an option for this.
                </Text>
              </P>
              <br /> <br />
              <Text1>
                <P>
                  For cameras: To lock the focus and exposure point, press and
                  hold the AE/AF button while pressing the shutter button
                  halfway down to focus. Once the camera has locked on to a
                  subject the focus and exposure settings are locked on that
                  part of the scene.
                </P>
              </Text1>
              <P>
                <Italic>
                  For cell phones: To lock the focus and exposure point, simply
                  tap and hold on that part of the screen for a few seconds.
                  When you see AE/AF Lock in a yellow box at the top of the
                  screen, release your finger. When AE/AF Lock is activated, the
                  focus and exposure settings are locked on that part of the
                  scene.
                </Italic>
              </P>
              <Text>
                For both cell phones and cameras, change where you are pointing
                the camera and then take the picture. The camera will remember
                where you focused using the AE/AF lock and the new scene will be
                captured using that focus and exposure setting. This can be
                helpful when wanting to show what is also in the background.
                Focus on a subject, use AE/AF lock and recompose the image by
                moving the camera a little to one side or the other then press
                the shutter button. The result will be that your subject, what
                you focused on initially will be properly exposed and there will
                be space in the image to show what was in the background.
              </Text>
              <P>
                <DivL>
                  <TextBold>When to focus</TextBold>
                </DivL>
              </P>
              <P>
                <Text>
                  There are times when you do not want to focus especially with
                  today's autofocus systems. They can be unreliable when it
                  comes to images where there is not a distinct separation of
                  the subject and the background. A bird flying from branch to
                  branch in a tree can be hard for the camera to track,
                  especially if the bird is a similar color as the branches. You
                  will want to wait for the bird to land, and sit for a moment.
                  Similarly, too much contrast can also confuse the autofocus
                  system. Think about many people moving around in a room or
                  busy street. Your camera will not always know who your friend
                  is and you may get a perfectly focused image of a complete
                  stranger. You will want to wait until you have a clear line of
                  sight and use focus lock (AE/AF) to take the picture.
                </Text>
              </P>
              <P>
                <DivL>
                  <TextBold>Focus Area</TextBold>
                </DivL>
              </P>
              <P>
                <Text>
                  This is the area in the view finder that your camera will use
                  to find the focus. You can choose to have the camera use the
                  entire area in the view finder to focus and let it decide what
                  the subject is or you can set a point to force the camera to
                  focus on one part of the image.{" "}
                </Text>
              </P>
              <Italic>
                For cell phones, simply tap on the screen where you want the
                camera to focus and the camera will use that to also set the
                exposure.
              </Italic>
              <br />
              <br />
              <Text>Different focus areas can include:</Text>
              <DivC>
                <TextBold>Single Point - Dynamic Area - Auto Area</TextBold>
              </DivC>
              <Text>
                Which mode you choose will vary depending on your subject and
                environment.{" "}
              </Text>
              <br />
              <Text1>
                In Single point, you select the area of the image that the
                camera uses to focus on. This is good for stationary subjects.
              </Text1>
              <br />
              <Text1>
                In Dynamic Area, you select the area of the image to focus on,
                but if the subject leaves that area, the camera will use
                information from the rest of the area focus. This works well for
                subjects that move unpredictably.
              </Text1>
              <br />
              <Text1>
                In Auto Area, the camera does everything by itself. This is the
                default mode for cell phones. Some cameras may have other focus
                modes as well.
              </Text1>
              <P>
                <DivL>
                  <TextBold>Meetering</TextBold>
                </DivL>
              </P>
              <P>
                <Text>
                  Today's cameras have a few different options for finding the
                  correct exposure. In the past, the meetering was largely
                  taking the entire scene into account. Today, cameras can
                  predominately focus on certain areas of the scene. Check your
                  camera for the options available, but many will offer the
                  following:
                </Text>
              </P>
              <P>
                <DivC>
                  <TextBold>
                    Matrix Mode - Center Weighted - Spot Meetering
                  </TextBold>
                </DivC>
              </P>
              <P>
                <Text>
                  Matrix Mode will pull exposure information from many areas of
                  the scene. This is general use meetering.
                </Text>
                <br />
                <Text>
                  {" "}
                  Center weighted meetering will give more preference to what is
                  in the center of the scene while still accepting values from
                  the other areas.
                </Text>
                <br />
                <Text>
                  {" "}
                  Spot meetering will only use information from the very center
                  of the scene. Choosing a bright or dark item to focus on when
                  using spot meetering will give very different results.
                </Text>
              </P>
              <P>
                <DivL>
                  <TextBold>White Balance</TextBold>
                </DivL>
              </P>
              <Text>
                White balance is used to adjust colors to match the color of the
                light source so that white objects appear white. Subjects may be
                lit by a number of different light sources, including sunlight,
                incandescent bulbs, and fluorescent lighting. Although to the
                naked eye all of these different light sources may appear
                colorless, in fact they emit light of different colors. The
                image sensor in a digital camera will reproduce these color
                differences just as they are. The result would appear to change
                the color of the image according to the light source. Auto white
                balance automatically processes the image to remove unwanted
                color casts by changing the overall color of the image. An
                example would be making photographs taken under incandescent
                bulbs more blue to correct the reddish cast of this type of
                lighting. Normally, auto white balance will produce the desired
                results. You can choose from a number of fixed white balance
                options according to the light source. You can also choose to
                introduce a deliberate red or blue cast to see the effects.
              </Text>
              <P>
                <DivL>
                  <TextBold>Exposure Compensation</TextBold>
                </DivL>
              </P>
              <Text>
                Exposure compensation is used to alter exposure from the value
                selected by the camera, making photographs brighter or darker.
                In modes P, S, and A, the camera automatically adjusts settings
                for optimal exposure, but this may not always produce the
                exposure the photographer intended. For Cell phones: tap on the
                screen and when you see the sunburst symbol, use your finger to
                swipe up or down to lighten or darken the image.
              </Text>
              <P>
                <DivL>
                  <TextBold>Bracketing</TextBold>
                </DivL>
              </P>
              <Text>
                In short, bracketing is taking the same photo more than once
                using different settings for different exposures. Why would you
                do this? If you know about exposure, you'll know the different
                ways to adjust your camera settings to manipulate your exposure.
                One way is to change the aperture, another is the shutter speed
                and the third is ISO. Your camera will have a setting to
                automatically bracket for you. It's called Auto Exposure
                Bracketing. Automatic Exposure Bracketing is a function most
                DSLRs have to take three photos with only one click of the
                shutter, each in different exposures. The result will be one
                photo a bit too bright, one just right (depending on which part
                you're looking to expose properly) and one a bit darker.
              </Text>
              <P>
                <DivL>
                  <TextBold>Histogram</TextBold>
                </DivL>
              </P>
              <Text>
                A histogram is a graphical representation of the tonal values of
                your image. In other words, it shows the amount of tones of
                particular brightness found in your photograph ranging from
                black (0% brightness) to white (100% brightness). It's easy to
                use once you understand how it works. Before digital
                photography, we had to wait until we developed the film to know
                for sure whether we got a good exposure when we made an image.
                Now, by using the histogram, this information is at your
                fingertips before you take the shot (in cameras with Electronic
                Viewfinders), after you take the shot, and during
                post-processing as well.
              </Text>
              <P>
                <DivL>
                  <TextBold>How to Read Your Histogram</TextBold>
                </DivL>
              </P>
              <Text>
                It's easy: the blacks are on the left, the whites are on the
                right, all the mid-tones are in between. The most important
                thing to know about the histogram is that a spike on the right,
                that touches the edge of the graph, is a problem. That means
                that there is a portion of your image where the highlights are
                "blown out", or completely white with no detail. The reason this
                is such a big problem is that an area that is blown out contains
                no data at all, so you will not be able to do anything in
                post-processing to adjust it. This only applies if the spike
                touches the edge of the graph. If it spikes before the edge,
                that's okay. If there is a spike on the left edge, it means part
                of your image is completely black. You may want to use your
                exposure compensation to adjust the exposure to the right to
                make it brighter. But remember that having part of your image
                completely black, especially for a night shot, is okay. There is
                no such thing as a perfect histogram. It's just a graphical
                representation of the tonal range in your image. It's up to you,
                as the artist, to decide what to do with this information.
                Having solid blacks and bright tones (provided they are not
                blown out) is not necessarily a bad thing.
              </Text>
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

export default Step2;
