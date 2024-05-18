import React from "react";
import group from "../images/Group.png";

export default function CardTest() {
  return (
    <div className="col-lg-4 ">
      <div className="card shadow rounded rounded-3 teste p-2 carte d-flex justify-content-center align-items-center flex-row ">
        <div className="img rounded d-flex justify-content-center align-items-center ">
          <img src={group} className="" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title text-dark">Caisse</h5>
          <p className="card-text">
            <span className="fw-bold span">3.500.000 FCFA </span> <span className="span2 fw-bold">/ 5.000.000 FCFA</span> 
          </p>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
