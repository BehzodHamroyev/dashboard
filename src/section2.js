import styled from "styled-components";
import React from "react";
import img from "./data/1.png";
import profil from './data/data/avatar.jpg'
import brend1 from './data/brend1.png'
import brend2 from './data/brend2.png'
import brend3 from './data/brend3.png'
import brend4 from './data/brend4.png'
export default function Section2() {
  return (
    <SectionWraper>
      <div className="text">
        <p className="title">What people are saying about us</p>
        <p className="paragh">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="row">
        <Card>
          <img src={img} />
          <p>
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className="user">
            <img src={profil} />
            <div className="nameUser">
            <p className="name">Behzod Hamroyev</p>
            <p className="job">Web developer</p>

            </div>
          </div>
        </Card>
        <Card>
          <img src={img} />
          <p>
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className="user">
            <img src={profil} />
            <div className="nameUser">
            <p className="name">Behzod Hamroyev</p>
            <p className="job">Web developer</p>

            </div>
          </div>
        </Card>
        <Card>
          <img src={img} />
          <p>
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className="user">
            <img src={profil} />
            <div className="nameUser">
            <p className="name">Behzod Hamroyev</p>
            <p className="job">Web developer</p>

            </div>
          </div>
        </Card>
      </div>
      <div className="row">
          <img src={brend1} />
          <img src={brend2} />
          <img src={brend3} />
          <img src={brend4} />
      </div>
      <div className="lineCard">
         <div className="text">
         <p className="title">Let’s try our service now!</p>
         <p className="subTitle">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
         </div>
         <button>

         </button>


      </div>
    </SectionWraper>
  );
}

const SectionWraper = styled.div`
  padding: 50px 7% 7% 7%;
    .lineCard{
        margin-top:50px;
        border-radius:20px ;
        background: linear-gradient(
      144.39deg,
      #ffffff -278.56%,
      #6d6d6d -78.47%,
      #11101d 91.61%
    );
        .text{
            
        }
    }
  .text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 50px;
    .title {
      color: white;
      font-size: 48px;
    }
    .paragh {
      color: rgba(255, 255, 255, 0.7);
      font-size: 18px;
    }
  }
  .row{
      display:flex ;
      justify-content:space-around ;
      align-items: center;
      padding-top:50px ;
      img{
          width:15% ;
      }
  }
`;
const Card = styled.div`
width:25%;
color:white ;
padding: 20px 50px;
border-radius:20px;
.user{
 img{
     width:15%;
     border-radius:50%;
     margin-right:5% ;
 }   
 .job{
     font-size:14px ;
     margin:0 ;
     padding:0;
     color: rgba(255, 255, 255, 0.7);
 }
 display:flex ;
 justify-content:center ;
 align-items:center ;
  
}
  &:hover {
    background: linear-gradient(
      144.39deg,
      #ffffff -278.56%,
      #6d6d6d -78.47%,
      #11101d 91.61%
    );
  }
`;
