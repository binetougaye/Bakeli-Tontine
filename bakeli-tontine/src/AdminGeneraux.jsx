import React from "react";
import ProfilAdmin from "./ProfilAdmin";
import images from "./images.png";
import EditAdmin from "./EditAdmin";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AdminGeneraux = () => {
  return (
    <div>
      <h3 className="pt-5 fs-18  para">Parametre Generaux</h3>

      <EditAdmin
        profil={"Profil"}
        img={images}
        personne={"Diaga Sall"}
        admin={"admin"}
        editer="Editer profil"
      />

      <ProfilAdmin
        profil={"Profil"}
        img={images}
        personne={"Diaga Sall"}
        admin={"admin"}
        buton={"Editer Profil"}
      />
    </div>
  );
};
