import React from "react";
import "./Profil.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Buton from "./buton";

const EditAdmin = ({ profil, personne, admin, img }) => {
  return (
    <div className="container">
      <div className="profil">
        <p>{profil}</p>
        <img className="img" src={img} alt="" />
        <i class="fa-solid fa-camera"></i>
        <p className="font m-0">{personne} </p>
        <p>{admin}</p>
      </div>
      <div className="bordure"></div>
      <div>
        <div className="input d-flex justifi">
          <div class="mb-3">
            <label for="" class="form-label ps-3  mt-3">
              Prenom
            </label>
            <input type="text" className="form-control m-2 nom" />
          </div>
          <div className="mb-3">
            <label for="" class="form-label ps-3  mt-3">
              Nom
            </label>
            <input type="text" className="form-control m-2 nom" />
          </div>
        </div>

        <div className="d-flex flex-column ">
          <div cclassName="mb-3">
            <label for="" class="form-label ps-3 mt-3">
              Email{" "}
            </label>
            <input type="email" className=" form-control m-2" />
          </div>
          <div className="mb-3">
            <label for="" class="form-label ps-3 mt-3">
              Telephone
            </label>
            <input type="telephone" className="form-control m-2" />
          </div>
          <div className="mb-3">
            <label for="" class="form-label ps-3 mt-3">
              Status
            </label>
            <input
              type="text"
              className=" form-control m-2"
              placeholder="admin"
            />
          </div>
        </div>
        <div className="d-flex justify-content-end  h-50">
          <Buton button="Mettre à jour" />
        </div>
      </div>
    </div>
  );
};
export default EditAdmin;
