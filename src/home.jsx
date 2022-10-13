import React from "react";
import homeStyle from "./homeStyle";
import style from "styled-components";
import Navbar from "./components/navbar";

const Home=()=>{
    return <HomeStyle>
<Navbar/>


    </HomeStyle>
}
export default Home;

const HomeStyle=style.div`
margin:0;
padding:0;
box-size:border-box;

`