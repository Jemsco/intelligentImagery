/** @format */
import React, {useRef, useEffect} from 'react';
import styled from "styled-components";
import { useLocation } from "react-router";
import { PAGE_LOCATIONS } from './utils/constants/PageLocations';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  // color: palevioletred;
`;

const Wrapper = styled.section`
  margin-top: 4em;
  // background: papayawhip;
`;
 const Header = () => {

  const {pathname} = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
    console.log('useEffect ',ref);
  },[ref]);

   return (
     <header>
       <Wrapper>
         <Title ref={ref} tabIndex={0}>{PAGE_LOCATIONS[pathname.substring(1)]}</Title>
       </Wrapper>
     </header>
   );
 };

 export default Header;
