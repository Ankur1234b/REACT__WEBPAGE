import React from 'react'
import img1 from '../Image/logo-dark.svg'
export default function Navbar() {
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <img src={img1}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="d nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
             </li>
        <li className="d nav-item">
          <a className="nav-link active" href="#">Pages</a>
        </li>
        <li className="d nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu">
            <li><a className=" dropdown-item" href="#">Content Marketing </a></li>
            <li><a className=" dropdown-item" href="#">App Development</a></li>
            <li><a className=" dropdown-item" href="#">Search Engine Optimization</a></li>
            <li><a className=" dropdown-item" href="#">PPC Managment</a></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
            <li><a className=" dropdown-item" href="#">Social Media Marketing</a></li>
          </ul>
        </li>
        <li className="d nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Portfolia
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Portfolia Masonry </a></li>
            <li><a className="dropdown-item" href="#">Portfolia Grid</a></li>
            <li><a className="dropdown-item" href="#">Portfolia Grid2</a></li>
            <li><a className="dropdown-item" href="#">Portfolia Carousel</a></li>
            <li><a className="dropdown-item" href="#">Portfolia Carousel2</a></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
            <li><a className="dropdown-item" href="#">Portfolia Single</a></li>
          </ul>
        </li>
        <li className="d nav-item">
          <a className="nav-link active" href="#">Blog</a>
        </li>
        <li className="d nav-item">
          <a className="nav-link active" href="#">Contacts</a>
        </li>
      </ul>

      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <button className=" Contact btn btn-primary btn-lg" type="Contact us">Contact us</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
