import React from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./home";
import AppWrapper from "./Appstyle.js";
import Section1 from "./section1";
import Section2 from "./section2";

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
      <Section2/>
    </AppWrapper>
  );
};

export default App;
