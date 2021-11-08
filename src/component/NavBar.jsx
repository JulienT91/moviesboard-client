import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
    <div className="navBar-container">
      <nav className="nav_contents">
        <img className="nav_logo" src="" alt="" />
        <ul className="navigation">
          <li>
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
          </li>
        </ul>
       </nav>
      </div>
    );
  };
  
  export default NavBar;