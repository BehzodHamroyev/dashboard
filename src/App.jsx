import React from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./home";
import AppWrapper from "./Appstyle.js";
import Section1 from "./section1";
import Section2 from "./section2";
import Footer from "./footer";
const GlobalStyle = createGlobalStyle`
   body{
     margin:0;
     padding:0;
     box-sizing:border-box;
   }
   ::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background:#00D6BE ;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: grey; 
}
`;

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Home />
      <Section1 />
      <Section2/>
      <Footer/>
    </AppWrapper>
  );
};

export default App;
