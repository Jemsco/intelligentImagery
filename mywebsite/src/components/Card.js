/** @format */

import React from "react";
import styled from "styled-components";


const CardContainer = styled.div({
  fontSize: "1.5em",
  textAlign: "center",
  color: "white",
});
const Title = styled.h3({
  fontSize: '1.5em',
  textAlign: 'center',
  color: 'white',
});

const Text = styled.div({
  fontSize: "1em",
  textAlign: "center",
  color: "white",
});
const Card = (props) => {
  return (
    <CardContainer>
      <Title>{props.title}</Title>
      {/* <div className="cardButtons">
        <button type="button" className="tertiary">
          show back
        </button>
        <div>
          <button type="button" className="secondary">
            edit
          </button>
          <button type="button" className="secondary danger">
            delete
          </button>
        </div> 
      </div>*/}
      <Text>{props.text}</Text>
    </CardContainer>
  );
}

export default Card;
