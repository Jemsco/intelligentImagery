/** @format */
import React, {useEffect} from 'react';
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

const Main = styled.main`

`;


const Home = (...props) => {
useEffect(() => {
  document.title = "Intelligent Imagery Home";
}, []);
console.log('Home props ',...props);
  return (
    <Main>
      <Wrapper>
        <Title>
          Unlock your future into creating beautiful images. The step by step
          guide in the Image Academy will provide useful information to help you
          create your best images. Regardless of your skill level or experience,
          Intelligent Imagery has something for everyone. So, checkout the Image
          Academy and use the interactive Intelligent Menu at the top of the
          Image Academy page to move to other steps when ready. Be sure to click
          on Events and the Blog for the latest updates and information on
          creating intelligent images.
        </Title>
      </Wrapper>
    </Main>
  );
};

export default Home;
