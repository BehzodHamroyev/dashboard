import React from "react";
import styled from "styled-components";
import icon1 from "./data/icon1.png";
import icon2 from "./data/icon2.png";
import icon3 from "./data/icon3.png";
import icon4 from './data/icon4.png'
import icon5 from './data/icon5.png'
export default function section1() {
  return (<>
  
  <SectionWraper>
      <TextSide>
        <h3>You do the business, we’ll handle the money.</h3>
        <p>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button>Get Started</button>
      </TextSide>
      <div className="cards">
        <Card>
          <div className="icon">
            <img src={icon1} />
          </div>
          <div className="text">
            <p className="title">Rewards</p>
            <p className="subTitle">
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </div>
        </Card>
        <Card>
          <div className="icon">
            <img src={icon2} />
          </div>
          <div className="text">
            <p className="title">100% Secured</p>
            <p className="subTitle">
              {" "}
              We take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </Card>

        <Card>
          <div className="icon">
            <img src={icon3} />
          </div>
          <div className="text">
            <p className="title">Balance Transfer</p>
            <p className="subTitle">
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </Card>
      </div>
    </SectionWraper>
    
    <SectionWraper>
      
      <div className="cards">
      <img  src={icon4} />
      </div>
      <TextSide>
        <h3>Easily control your billing & invoicing.</h3>
        <p>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <button>Get Started</button>
      </TextSide>
    </SectionWraper>
    
    <SectionWraper>
      <TextSide>
        <h3>You do the business, we’ll handle the money.</h3>
        <p>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button>Get Started</button>
      </TextSide>
      <div className="cards">
        <Card>
          <div className="icon">
            <img src={icon1} />
          </div>
          <div className="text">
            <p className="title">Rewards</p>
            <p className="subTitle">
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </div>
        </Card>
        <Card>
          <div className="icon">
            <img src={icon2} />
          </div>
          <div className="text">
            <p className="title">100% Secured</p>
            <p className="subTitle">
              {" "}
              We take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </Card>

        <Card>
          <div className="icon">
            <img src={icon1} />
          </div>
          <div className="text">
            <p className="title">Balance Transfer</p>
            <p className="subTitle">
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </Card>
      </div>
    </SectionWraper>
  
  
  </>
  );
}

const SectionWraper = styled.div`
  margin-top: 100px;
  padding: 50px 7% 10% 7%;
  display: flex;
  justify-content: space-between;
  /* align-items:center ; */
  .cards{
      width:50%;
      img{
          width:50%;
      }
  }
`;
const TextSide = styled.div`
  width: 50%;
  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    color: white;
    /* or 77px */

    letter-spacing: 0.01em;
  }
  p {
    color: white;
  }
  button {
    &:hover {
    background: linear-gradient(
      153.47deg,
      rgba(255, 255, 255, 0) -341.94%,
      #14101d 95.11%
    );
    color:white ;
    
  }
    border: none;
    border-radius: 3px;
    margin-top: 50px;
    padding: 10px 20px;
    font-size: 18px;
    background: linear-gradient(
      157.81deg,
      #def9fa -43.27%,
      #bef3f5 -21.24%,
      #9dedf0 12.19%,
      #7de7eb 29.82%,
      #5ce1e6 51.94%,
      #33bbcf 90.29%
    );
  }
`;
const Card = styled.div`
width:50% ;

  &:hover {
    background: linear-gradient(
      153.47deg,
      rgba(255, 255, 255, 0) -341.94%,
      #14101d 95.11%
    );
    box-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);
    border-radius: 20px;
  }
  width: 85%;
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;
  align-items: center;
  transition: 1ms linear;
  .icon {
    align-self: center;
    padding-right: 30px;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;
    .title {
      font-size: 18px;
      padding: 20px 0 0 0;
    }
    .subtitle {
    }
  }
`;
