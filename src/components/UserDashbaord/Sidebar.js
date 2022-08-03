import React from "react";
import { NavLink  } from "react-router-dom";


const Sidebar = () => {

  
  return (
    <div className="bg-light" style={{ width: "370px", height: "120vh" }}>
      <nav id="sidebar" className="sidebar-panel">
        <div className="logo-sidebar text-warning ">
          <span className="bs-icon-s bs-icon-rounded pt-5 h1  bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon ">
            Construction
          </span>
        </div>

        <div className="mt-5 scroll-sidebar scrollbarbar text-center">
          <ul className="list-unstyled w-75 text-start ms-5 pt-5 ">
            <NavLink to="/dashbord" className="text-decoration-none text-dark">
              <li className="py-2 text-black">
                {" "}
                <i className="fas fa-th " /> &nbsp; &nbsp;Dashboard
              </li>
            </NavLink>
            <NavLink to="/user" className="text-decoration-none text-dark">
              <li className="py-2 text-black">
                {" "}
                <i className="fas fa-th " /> &nbsp; &nbsp;Contractor
              </li>
            </NavLink>
            <NavLink to="/work" className="text-decoration-none text-dark">
              <li className="py-2 text-black">
                {" "}
                <i className="fas fa-th " /> &nbsp; &nbsp;Work constractor
              </li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
