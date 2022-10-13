import React from "react";
import style from 'styled-components'
import logo from './../data/Group 481747.png'
const Navbar=()=>{

return <NavbarWrapper>
 <div className="logo">
 <img src={logo} />
 <p>Hoo<span>Book</span></p>
 </div>
<div className="menu">
  <ul>
      <li>
          Home
      </li>
      
      <li>
          Home
      </li>
      
      <li>
          Home
      </li>
      
      <li>
          Home
      </li>
      </ul>

</div>


</NavbarWrapper>

}
export  default Navbar;


const NavbarWrapper=style.div`
width:100%;
height:200px;
display:flex;
justify-content:space-between;
align-items:center;
.logo{
    display:flex;
    justify-content:center;
    align-items:center;
   p{
       font-size:18px;
       margin:0 15px;
       color:white;
       span{
           color:#5CE1E6;
       }
   }
    img{
        width:50px;
        margin-left:50px;
    }
}
ul{
    width:30%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    li{
        display:block;
        color:white;
        padding: 0 20px;
    }
}

`
