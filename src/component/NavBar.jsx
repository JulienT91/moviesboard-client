import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
    <div className="navBar-container">
      <nav className="nav_contents">
        <h1 className="nav_title">MoviesBoard</h1>
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