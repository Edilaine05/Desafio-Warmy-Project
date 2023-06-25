import styled, { createGlobalStyle } from 'styled-components';
import imglista from "./Img/lista.gif";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Caveat', cursive;
    font-family: 'Pacifico', cursive;
  
  }

  body {
    
    margin: 0;
    padding: 0;
  }
`;
export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const CountersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  text-align:center;
  font-size: 48px;
  font-weight: 400;
  &:hover {
    transform: scale(1.5);
    font-style:oblique;
    color:#d348fa;
  }
`;
export const BackgroundImage = styled.img`
background-color:#dede;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${imglista});
  background-size: 20%;
  background-repeat:no-repeat;
  background-position: right bottom ;
  z-index: -1;
 
`;
