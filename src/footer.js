import styled from "styled-components";
import React from "react";
import logo from "./data/logo.svg";
import img from "./data/link.png";

export default function footer() {
  return (
    <FoterWraper>
      <div className="row">
        <div className="column">
          <img className="logo" src={logo} />
          <p>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className="column">
          <p className="title">Usefull Links</p>
          <p className="link">Content</p>
          <p className="link">How it Works</p>
          <p className="link">Create</p>
          <p className="link">Explore</p>
          <p className="link">Terms & Services</p>
        </div>
        <div className="column">
          <p className="title">Community</p>
          <p className="link">Help Center</p>
          <p className="link">Partners </p>
          <p className="link">Sugestion</p>
          <p className="link">Blog</p>
          <p className="link">Newsletters</p>
        </div>
        <div className="column">
          <p className="title">Partner</p>
          <p className="link">Our partner</p>
          <p className="link">Become a Partner</p>
        </div>
      </div>
      <div className="bottomFooter">
        <p style={{ display: "flex" }}>
          <span style={{ padding: "0 10px", display: "block", color: "white" }}>
            Copyright
          </span>
          <span style={{ padding: "0 10px", display: "block", color: "white" }}>
            @
          </span>
          <span style={{ padding: "0 10px", display: "block", color: "white" }}>
            2021 HooBank. All Rights Reserved.
          </span>
        </p>
        <div className="linkers">
          <img src={img} />
        </div>
      </div>
    </FoterWraper>
  );
}

const FoterWraper = styled.div`
  padding: 100px 7%;

  background: rgba(11, 10, 12, 0.6);
  .row {
    border-bottom: solid 0.5px white;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .column {
      width: 20%;
      .title {
        color: white;
        font-weight: 900;
        font-size: 24px;
        padding-bottom: 15px;
      }
      .link {
        color: white;
        font-weight: 300;
        font-size: 18px;
      }
      p {
        color: white;
      }
      .logo {
        display: flex;
        align-items: center;
      }
    }
  }
  .bottomFooter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px 0 0;
  }
`;
