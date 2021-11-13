import React,{ useState }from "react";
import { NavLink } from "react-router-dom";
import {FaBars} from "react-icons/fa";


const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
return (
  <div>
   <div className={click ? "main-container" : ""} onClick={()=>Close()} />
    <nav className="navbar" onClick={(e)=>e.stopPropagation()}>
      <div className="nav-container">
        <h1>moviesboard</h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Accueil
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/add"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Ajouter un film
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click}><FaBars /></i>
        </div>
      </div>
    </nav>
  </ div>
);
}

 
  
  export default NavBar;