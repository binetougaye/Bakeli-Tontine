import React from "react";
import "./Navigation.css";
import images from "./imagess.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { GrNotification } from "react-icons/gr";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <h1 className="navbar-brand para" href="#">
          Paramètres
        </h1>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 position-absolute end-0">
            <li className="nav-item">
              <GrNotification className="nav-ico" />
            </li>
            <li className="nav-item">
              <img className="image" src={images} alt="imagess" />
            </li>
            <li className="dropdown" data-bs-theme="light">
              <strong
                className="dropdown-toggle"
                type="text"
                id="dropdownMenuButtonLight"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ndiaga SALL{" "}
              </strong>
              <br />
              <span>Administrator</span>
              <ul
                className="dropdown-menu text-center"
                aria-labelledby="dropdownMenuButtonLight"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Profil
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {" "}
                    Modifier le Mot de Passe
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Déconnexion
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
