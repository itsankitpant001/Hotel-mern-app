import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Hotel Admin Page
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" to="/">
          Add Staff
        </NavLink>
        <NavLink className="nav-link active" aria-current="page" to="/menu">
          Add Menu
        </NavLink>
        <NavLink className="nav-link active" aria-current="page" to="/showstaff">
          Show staff
        </NavLink>
        <NavLink className="nav-link active" aria-current="page" to="/showmenu">
          Show menu
        </NavLink>
      </div>
    </div>
  </div>
</nav>   
      </>
    )
}

export default Navbar
