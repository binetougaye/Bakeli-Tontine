import React from 'react';
import  './Navigation.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RxAvatar } from "react-icons/rx";
import { GrNotification } from "react-icons/gr";

const items = [
  {
    key: '1',
    label: (
      <a href="#">
        Profil
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a href="#">
        Modifier le Mot de Passe
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a href="#">
        Déconnexion
      </a>
    ),
  },
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand para" href="#">Paramètres</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <GrNotification className='nav-ico'/>
            </li>
            <li className="nav-item">
              <RxAvatar className='nav-icons'/>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               <strong>Ndiaga SALL </strong><br />
               <span>Administrator</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                {items.map(item => (
                  <li key={item.key}>{item.label}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
