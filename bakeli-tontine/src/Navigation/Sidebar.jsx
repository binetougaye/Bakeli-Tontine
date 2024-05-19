import React from "react";
import "./Navigation.css";
import { RxDashboard } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import health from "./healthicons_money-bag-outline.svg";
import vector from "./fontisto_wallet.png";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Sidebar() {
  const navigate = useNavigate();
  const handleNavigation = (e) => {
    const value = e.target.value
    if(value){
      navigate(value);
    }
  
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <h3 className="hach">
          <img src={vector} alt="Wallet Icon" /> Bakéli Tontine
        </h3>
        <ul>
          <li>
            <a href="#">
              <RxDashboard className="nav-icon" />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <FiUser className="nav-icon" />
              Utilisateurs
            </a>
          </li>
          <li>
            <a onClick={handleNavigation}>
              <img src={health} alt="Money Bag Icon" className="nav-icon" />
              Cotisations
            </a>
          </li>
          <li className="setting">
            <IoSettingsOutline className="nav-icon" />
            <select onChange={handleNavigation} id="custom-dropdown" className="dropdowns text-center">
              <option disabled selected hidden>
                Paramètres
              </option>
              <option value="1">Paramètres Généraux</option>
              <option value="2">Utilisateurs</option>
              <option value="/archives">Archives</option>
              <option value="/MembresBloqués">Membres Bloqués</option>
            </select>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
