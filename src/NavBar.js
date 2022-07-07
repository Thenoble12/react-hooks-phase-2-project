import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar({ user, logout }) {

  let navigate = useNavigate();
 
  return (
    <div class="navbar">        
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/dashboard">Dashboard </NavLink>      

      <button type="button" onClick={()=>{
              logout(null)
              navigate("/")
      }}>
        Sign Out
      </button>
    </div>
  );
}

export default NavBar;

