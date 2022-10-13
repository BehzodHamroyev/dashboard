import React from 'react'
import { createGlobalStyle } from "styled-components";
import Home from './home'
import AppWrapper from './Appstyle.js'

const GlobalStyle = createGlobalStyle`
   body{
     margin:0;
     padding:0;
     box-sizing:border-box;
   }
`;


const  App =()=> {
  return <AppWrapper>
    <GlobalStyle/>
  <Home/>
  </AppWrapper> 
}

export default App