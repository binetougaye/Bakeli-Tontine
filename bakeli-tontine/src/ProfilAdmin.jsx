import React, { useState } from "react";

import "./Profil.css";
import { Link } from "react-router-dom";
import Buton from "./buton";

const ProfilAdmin = ({ profil, personne, admin, img }) => {
  const tableau = [
    {
      prenom: "Ndiaga",
      nom: "Sall",
      statut: "administrateur",
      email: "ndiaga@gmail.com",
    },
  ];

  const array = [
    {
      nombre1: "25",
      nombre2: "10",
      nombre3: "4",
    },
  ];

  return (
    <div className="container containers">
      <div className="profil">
        <p className="titre">{profil}</p>
        <img className="img" src={img} alt="" />

        <p className="font m-0">{personne} </p>
        <p className="">{admin}</p>

        <Link to="/editAdmin">
          <Buton button="Editer" />
        </Link>
      </div>
      <div className="bordure"></div>
      <div>
        <div>
          <p className="info ps-3">Information general</p>
          <table className="table">
            <thead>
              {/* <tr className='d-flex flex-column'> */}
              <tr className="d-flex justify-content-between groupeInput">
                <th scope="col" className="th">Prenom</th>
                <td className="ps-3">{tableau[0].prenom}</td>
              </tr>
              <tr className="d-flex justify-content-between groupeInput">
                <th scope="col" className="th">Nom</th>
                <td>{tableau[0].nom}</td>
              </tr>
              <tr className="d-flex justify-content-between groupeInput">
                <th scope="col" className="th">Statut</th>
                <td>{tableau[0].statut}</td>
              </tr>
              <tr className="d-flex justify-content-between groupeInput">
                <th scope="col" className="th">Email</th>
                <td>{tableau[0].email}</td>
              </tr>
            </thead>
            <tbody>
              {/* {tableau.map((item, index) => (
                <tr key={index} className='d-flex'>
                  <td>{item.prenom}</td>
                  <td>{item.nom}</td>
                  <td>{item.statut}</td>
                  <td>{item.email}</td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
        <div>
          <p className="info ps-3">Statistique</p>
          <table class="table">
            <thead>
              {/* <tr className='d-flex flex-column'> */}
              <tr className="d-flex justify-content-between groupeInput">
                <th scope="col">Nombre de membre ajoutés</th>
                <td>{array[0].nombre1}</td>
              </tr>
              <tr className="d-flex justify-content-between groupeInput">
                <th scope="col">Nombre de membre archivés</th>
                <td>{array[0].nombre2}</td>
              </tr>
              <tr className="d-flex justify-content-between groupeInput">
                <th scope="col">Nombre de membre bloqués</th>
                <td>{array[0].nombre3}</td>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfilAdmin;
