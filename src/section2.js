import styled from "styled-components";
import React from "react";
import img from "./data/1.png";
import profil from "./data/data/avatar.jpg";
import brend1 from "./data/brend1.png";
import brend2 from "./data/brend2.png";
import brend3 from "./data/brend3.png";
import brend4 from "./data/brend4.png";
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
          <h3 className="title">Let’s try our service now!</h3>
          <p className="subTitle">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <button>Get Started</button>
      </div>
    </SectionWraper>
  );
}

const SectionWraper = styled.div`
  padding: 50px 7% 7% 7%;
  .lineCard {
    margin-top: 50px;
    border-radius: 20px;
    padding:25px 0;
    background: linear-gradient(
      144.39deg,
      #ffffff -278.56%,
      #6d6d6d -78.47%,
      #11101d 91.61%
    );
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      width: 50%;
      display: flex;
      flex-direction: column;
      text-align: left;
      .title{
margin:0 ;
      }
      .subTitle {
        color: rgba(255, 255, 255, 0.7);
        padding-left:25px ;
      }
    }
    button {
      width: 150px;
      margin-right: 7%;
      color: white;
      background: linear-gradient(
        157.81deg,
        #def9fa -43.27%,
        #bef3f5 -21.24%,
        #9dedf0 12.19%,
        #7de7eb 29.82%,
        #5ce1e6 51.94%,
        #33bbcf 90.29%
      );
      padding: 10px 20px;
      border: none;
      outline-style: none;
      border-radius: 5px;
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
  .row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 50px;
    img {
      width: 15%;
    }
  }
`;
const Card = styled.div`
  width: 25%;
  color: white;
  padding: 20px 50px;
  border-radius: 20px;
  .user {
    img {
      width: 15%;
      border-radius: 50%;
      margin-right: 5%;
    }
    .job {
      font-size: 14px;
      margin: 0;
      padding: 0;
      color: rgba(255, 255, 255, 0.7);
    }
    display: flex;
    justify-content: center;
    align-items: center;
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
