/** @format */

import styled from "styled-components";

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Step4 = () => {
  return (
    <main>
      <Wrapper>
        <Title>
          <h1>This is the Step4 page</h1>
        </Title>
      </Wrapper>
    </main>
  );
};

export default Step4;
