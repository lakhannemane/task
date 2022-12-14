import axios from "axios";
import React from "react";
import {useNavigate} from "react-router-dom"

const Header = () => {

  const navigate = useNavigate()




  const Logout = () => {
    axios
      .post("http://mmrda.prometteur.in:5000/admin/admin-logout", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
       
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      
      localStorage.clear();
      navigate("/")
    // navigate("/");
    alert("logout Succesfull");
    alert("hello")
  };

  return (
    <nav className="bg-light    ">
      <div className="mx-5 d-flex">
        <div className=" me-auto my-2">
          <h2 className="align-items-center ">
            Hi, <span>Lakhan dada</span>
          </h2>
        </div>
        <ul className="list-unstyled">
          <li className="nav-item dropdown mt-3" style={{ border: "none" }}>
            <a
              className="nav-link dropdown-toggle text-dark text-decoration-none"
              href="/"
              id="navbarDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="ms-2">
                <i className="fas fa-user"></i> My Profile
              </li>
              <li className="ms-2">
                <i className="fas fa-user-cog"></i> Account Setting
              </li>

              <li onClick={Logout} className="ms-2">
                <i className="fas fa-sign-out-alt"></i>
                Logout
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
