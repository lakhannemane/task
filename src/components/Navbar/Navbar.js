import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Login from "../Modal/Login";

const Navbar = () => {
 
  const [show, setShow] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink to="/" className="text-decoration-none">
              <li className="nav-item">Home</li>
            </NavLink>
          </ul>
          <button
            className="btn btn-outline-secondary"
            onClick={() => setShow(true)}
          >
            Login
          </button>
        </div>
        <Login show={show} setShow={setShow} />
      </div>
    </nav>
  );
};

export default Navbar;
