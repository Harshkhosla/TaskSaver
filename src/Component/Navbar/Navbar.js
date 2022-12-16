import React from 'react'
import './Navbar.css'
import logo from "../../Assets/download.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light fixed-top navBar">
      <div class="container-fluid">
        
        <a class="navbar-brand" href="#"><img className='mx-2 logo' src={logo} alt='LOGO'></img>TaskEP</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item mx-2">
              <a class="nav-link text-dark" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link text-dark" href="#">About</a>
            </li>
          </ul>
          <ul className=' navbar-nav mb-2 mb-lg-0'>
            <div class="btn-group">
            <li class="nav-item">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                Settings
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Menu item</a></li>
                <li><a class="dropdown-item" href="#">Menu item</a></li>
                <li><a class="dropdown-item" href="#">Menu item</a></li>
                <li class="nav-item dropdown developerDrop">
                  <a class="nav-link dropdown-toggle text-dark mx-2" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                    Developer
                  </a>
                  <ul class="dropdown-menu">
                    <div class="form-check mx-2 d-flex align-items-center">
                      <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label class="form-check-label" for="flexRadioDefault1">
                        WordPress
                      </label>
                    </div>
                    <div class="form-check mx-2 d-flex align-items-center">
                      <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label class="form-check-label" for="flexRadioDefault1">
                        PHP
                      </label>
                    </div>
                    <div class="form-check mx-2 d-flex align-items-center">
                      <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label class="form-check-label" for="flexRadioDefault1">
                        React Native
                      </label>
                    </div>
                    <div class="form-check mx-2 d-flex align-items-center">
                      <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label class="form-check-label" for="flexRadioDefault1">
                        React JS
                      </label>
                    </div>
                    <div class="form-check mx-2 d-flex align-items-center">
                      <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Node JS
                      </label>
                    </div>
                    <div class="form-check mx-2 d-flex align-items-center">
                      <input class="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label class="form-check-label" for="flexRadioDefault1">
                        UI/UX
                      </label>
                    </div>
                  </ul>
                </li>
              </ul>
            </li>
            </div>
          </ul>
          <Link to="/sign-in" class="nav-item mx-2 SignOutBtn btn btn-primary">
           Sign Out
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
