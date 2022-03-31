
import React from 'react';
import {Outlet,NavLink} from 'react-router-dom';
import logo from "../images/logo.png";

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <NavLink className="navbar-brand"  to="#">
        <img className="logo" src="https://mega.nz/file/uOoklaRB#AI1-t6F49Y1CjEXXFUoAsU3CCfZ-J1sSZoSGstS6agI" alt="logo" srcSet=''/>
        <b className="font">React Project</b>
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto" >
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      
    </ul>
  </div>
</nav>
<Outlet/>
    </>
  );
}

export default Navbar;