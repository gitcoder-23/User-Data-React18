import React from 'react'
// import { Link } from "react-router-dom";
// import {  } from "bootstrap";
import { Button, Nav } from 'react-bootstrap';

const Menu = () => {
  return (
    <>
    <Nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="/">Navbar</a> */}
    <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </Button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            App Menu
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/userapp">userapp</a></li>
            <li><a className="dropdown-item" href="/userapptask">UserAppTask</a></li>
            <li><hr className="dropdown-divider"/></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</Nav>
    </>
    )
    
}

export default Menu
