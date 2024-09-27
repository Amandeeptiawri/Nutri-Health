import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const CustomNavbar = () => {
  return (
    <section className="bg-color">
      <div className="container-fluid">
        <div className="container pt-2">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
              <h1>NutriHealth</h1>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav text-center fw-bold">
                <Link className="nav-item nav-link active hh" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
                <Link className="nav-item nav-link" to="/about">
                  About Us
                </Link>
                <Link className="nav-item nav-link" to="/recipe">
                  Recipes
                </Link>

                {/* Services Dropdown */}
                <div className="nav-item service dropdown">
                  <Link
                    className="nav-link dropdown-toggle drp"
                    to="#"
                    id="servicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    <li>
                      <Link className="dropdown-item" to="/our-team">
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/bmi-calculator">
                        BMI Calculator
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Link to="/contact" className='contact-btn'>
                <button className="btn">Contact Us</button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default CustomNavbar;
