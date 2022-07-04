import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ user, logout }) {

  return (
    <div class="navbar">        
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/dashboard">Dashboard </NavLink>  
      {/* <text>Wellcome, {user.firstName}!</text>   */}

      <button type="button" onClick={()=>{logout(null)}}>
        Sign Out
      </button>
    </div>
  );
}

export default NavBar;

