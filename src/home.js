import React from "react";
import style from "styled-components";
import Navbar from "./components/navbar";
import homeImg from "./data/Group 481777.png";
import UserNumber from './components/userNumbers'

const Home = () => {
  return (
    <HomeStyle>
      <Navbar />
      <SectionWraper>
        <div className="left">
          <div
            className="subtitle"
            style={{
              borderRadius: "0 10px 0 10px",
              boxShadow: "1px 1px 5px grey",
              width: "text-content",
              padding: "5px",
              fontSize: "10px",
              color: "white",
            }}
          >
            20% DISCOUNT FOR 1 MONTH ACCOUNT
          </div>
          <div className="bodyText">
            <div className="uppercase">
              <h1 style={{ fontSize: "62px", marginTop: "0" }}>The Next</h1>
              <h1 style={{ fontSize: "62px" }} className="h2">
                Generation
              </h1>
              <h1 style={{ fontSize: "62px" }}>Payment Method.</h1>
            </div>
            <div className="circul"></div>
          </div>
          <p style={{ width: "65%", fontSize: "18px" }}>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        <div className="right">
          <img src={homeImg} alt="" />
        </div>
        
      </SectionWraper>
      <UserNumber/>
    </HomeStyle>
  );
};
export default Home;
const SectionWraper = style.div`
display:flex;
width:100%;
justify-content:space-between;
positio:relative;
.left{
    width:50%;
    color:white !important;
    // border:1px solid red;
    display:flex;
    padding:50px 0 0 7%;
    flex-direction:column;
 .h2{
    font-size: 72px;
    background: radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
 }
 .subtitle{
     margin-left:30px;
     width:fit-content;
 }



}
.right{
    width:50%;
    height:90vh;
    // filter:drop-shadow(16px 16px 20px);
}
img{
    position:absolute;
    top:20%;
    left:55%;
    width:45%;
    // box-shadow: 2px 0px 15px 0.1px grey;
    // border-radius:15px;
}


`;
const HomeStyle = style.div`
margin:0;
padding:0;
box-size:border-box;
// height:500vh;

`;
