/** @format */
import React from "react";
import styled from "styled-components";

const IframeStyle = styled.iframe`
 overflow: hidden;
 border: 0;
 align-self: center;
 position: absolute;
//  top: -44px;
 left: 0;
 width: 100%;
 height: 100%;
 margin-top: -70px;
 z-index: -1;
`;


const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;   

  return (
    <main>
      <div className="embed-responsive">
        <IframeStyle
          src={src}
          title="gallery"
        ></IframeStyle>
      </div>
    </main>
  );
};

export default Iframe;
