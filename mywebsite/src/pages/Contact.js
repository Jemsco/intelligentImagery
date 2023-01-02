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

const Contact =() => {
  return (
    <main>
      <Wrapper>
        <Title>
          <h1>This is the contact page</h1>
        </Title>{" "}
        <button>Button</button>
      </Wrapper>
    </main>
  );
}

export default Contact;
