import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
    <div className="navBar-container">
      <nav>
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