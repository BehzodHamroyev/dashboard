import React from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./home";
import AppWrapper from "./Appstyle.js";
import Section1 from "./section1";

const GlobalStyle = createGlobalStyle`
   body{
     margin:0;
     padding:0;
     box-sizing:border-box;
   }
`;

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Home />
      <Section1 />
    </AppWrapper>
  );
};

export default App;
