import React from "react";
import styled from "styled-components";
export default function userNumbers() {
  return (
    <UserNumWraper>
      <Card className="first">
        <p className="num">3800+</p>
        <p className="str">User Active</p>
      </Card>
      <Card className="second">
        <p className="num">230+</p>
        <p className="str">TRUSTED BY COMPANY</p>
      </Card>
      <Card className="third">
        <p className="num">$230M+</p>
        <p className="str">TRANSACTION</p>
      </Card>
    </UserNumWraper>
  );
}
const Card = styled.div`
  margin-top:50px ;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .num{
      font-size:40px ;
      color:white;
  }
  .str {
    background: radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size:20px ;
    padding-left:30px ;
  }
`;
const UserNumWraper = styled.div`
  padding:50px 7% 0 7%;  display: flex;
  justify-content: space-between;
  align-items: center;
`;
