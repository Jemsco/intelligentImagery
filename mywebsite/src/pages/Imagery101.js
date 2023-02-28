/** @format */
import React from 'react';
import styled from "styled-components";
import Card from "../components/Card";
import { useNavigate } from "react-router";



const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section({
  padding: '1em',
  background: 'papayawhip',
   flexDirection: 'row',
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'space-around',
  flexWrap: 'wrap',
});

const Steps = styled.div({
  marginTop: '.5em',
  width: "250px",
  padding: "0.5em 1em",
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
const Imagery101 = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Wrapper>
        <Title>
          The Image Academy is designed around creating images. Whether you own
          a high end DSLR or a mobile phone camera, the Image Academy will help
          you create better images. There is information targeted toward DSLR
          users, but the purpose of the Image Academy is to provide information
          useful for creating images from any device that has a camera. Fiction
          or non fiction, Professional, Amateur or snapshots, there is something
          here for you. The step program is designed to address specific topics
          in a logical order but the steps can be taken in any order you choose.
          This is to accommodate anyone from the beginner to the experienced,
          and allow for the steps to be referred back to at any time. Use the
          interactive Intelligent Imagery Steps Menu at the top of this page to
          select the Step desired.
        </Title>
      </Wrapper>
      <Wrapper>
        <Step1 tabIndex={0} onClick={() => navigate("/step1")} name="step1">
          <Card title="Step 1" text="IMAGE 101 THE BASICS" />
        </Step1>
        <Step2 tabIndex={0} onClick={() => navigate("/step2")} name="step2">
          <Card title="Step 2" text="About Your Camera" />
        </Step2>
        <Step3 tabIndex={0} onClick={() => navigate("/step3")} name="step3">
          <Card title="Step 3" text="Prisms Of Light" />
        </Step3>
        <Step4 tabIndex={0} onClick={() => navigate("/step4")} name="step4">
          <Card title="Step 4" text="The Subject IS the Subject" />
        </Step4>
      </Wrapper>
    </main>
  );
};

export default Imagery101;
