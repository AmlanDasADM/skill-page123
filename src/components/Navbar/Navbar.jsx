import React from 'react'
import {  NavLink } from "react-router-dom"
import "./Navbar.css"


function Navbar() {
    return (
<div className='bla'>
<nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
                            <NavLink exact activeClassName='active-page ' className="nav-link" to="/home"> <i class="fas fa-book-open"></i> Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName='active-page '  className="nav-link"  to="/about"> <i class="fas fa-book-open"></i> About</NavLink>
                        </li> 
                        <li className="nav-item">    
                            <NavLink exact activeClassName='active-page'  className="nav-link"  to="/" ><i class="fas fa-rocket"></i> Skill</NavLink>
                        </li>
                        <li className="nav-item">   
                            <NavLink exact activeClassName='active-page'  className="nav-link" to="/contact"><i class="fas fa-mobile-alt"></i> Contact</NavLink>
                        </li>   
      </ul>
    </div>
  </div>
</nav>  
                </div>
)
}

export default Navbar
