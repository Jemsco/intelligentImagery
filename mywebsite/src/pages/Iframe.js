/** @format */
import React from "react";
import styled from "styled-components";

const IframeStyle = styled.iframe`
 overflow: hidden;
 border: 0;
 align-self: center;
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 margin-top: 50px;
 z-index: -1;
`;


const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;   

  return (
    <main>
      {/* <div className="col-md-1"> */}
      <div className="emdeb-responsive">
        <IframeStyle src={src} title="blog"></IframeStyle>
      </div>
      {/* </div> */}
    </main>
  );
};

export default Iframe;
