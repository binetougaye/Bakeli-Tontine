import React, { useState } from "react";
import "./Pagi1.css";
import { Modal, Table } from "react-bootstrap";
// import Vector from '../assets/Vector.png';
import Pagination from "./Pagination";
const Pagi1 = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const members = [
    {
      name: "Selena Roy",
      startDate: "01/01/2022",
      endDte: "31/12/2022",
      cotisation: "300.000FCFA",
      statut: "Termine",
    },
    {
      name: "Emma Watson",
      startDate: "01/01/2022",
      endDte: "31/12/2022",
      cotisation: "300.000FCFA",
      statut: "Termine",
    },
    {
      name: "Jhon Robert",
      startDate: "01/01/2022",
      endDte: "31/12/2022",
      cotisation: "300.000FCFA",
      statut: "Termine",
    },
    {
      name: "Anne Hataway",
      startDate: "01/01/2022",
      endDte: "31/12/2022",
      cotisation: "300.000FCFA",
      statut: "Termine",
    },
    {
      name: "Ravis Shankar",
      startDate: "01/01/2022",
      endDte: "31/12/2022",
      cotisation: "300.000FCFA",
      statut: "Termine",
    },
    {
      name: "Emme Stone",
      startDate: "01/01/2022",
      endDte: "31/12/2022",
      cotisation: "300.000FCFA",
      statut: "Termine",
    },
  ];
  return (
    <>
      <div
        className="d-flex justify-content-flex-end pagicontain"
        style={{
          backgroundColor: "#D2D2D2",
          width: "80px",
          height: "38px",
          borderRadius: "10px",
          position: "relative",
          left: "91%",
          top: "10px",
        }}
      >
        <button
          className="button"
          style={{ background: "#20DF7F" }}
          onClick={openModal}
        >
          {" "}
          <strong></strong>
        </button>
        <button
          className="button"
          style={{ background: "#20DF7F" }}
          onClick={openModal}
        >
          <strong></strong>
        </button>
        <button
          className="button"
          style={{ background: "#20DF7F" }}
          onClick={openModal}
        >
          <strong></strong>
        </button>
      </div>

      <Modal
        show={showModal}
        onHide={closeModal}
        className="bg-light"
        style={{}}
      >
        <Modal.Header
          className=""
          closeButton
          style={{
            background: "#20DF7F",
            width: "200%",
            position: "relative",
            right: "240px",
          }}
        >
          <Modal.Title
            className=""
            style={{ fontSize: "16px", marginLeft: "22px" }}
          >
            Cotisation termines
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ position: "relative", left: "25px", fontSize: "13px" }}>
            <Table
              className="table"
              style={{
                width: "190%",
                height: "",
                position: "relative",
                right: "260px",
                marginLeft: "30px",
              }}
            >
              <thead>
                <tr className="entete">
                  <th style={{ marginLeft: "20px" }}>Membres</th>
                  <th>Date de début</th>
                  <th>Date de Fin</th>
                  <th>Montant Cotisation</th>
                  <th>Statut</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody style={{ position: "relative", bottom: "17px" }}>
                {members.map((member, index) => (
                  <tr
                    key={index}
                    style={
                      member.name === "Selena Roy" ||
                      member.name === "Emma Watson" ||
                      member.name === "Jhon Robert" ||
                      member.name === "Anne Hataway" ||
                      member.name === "Ravis Shankar" ||
                      member.name === "Emme Stone"
                        ? { position: "relative", top: "30px", height: "60px" }
                        : {}
                    }
                  >
                    <td>{member.name}</td>
                    <td>{member.startDate}</td>
                    <td>{member.endDte}</td>
                    <td>{member.cotisation}</td>
                    <td style={{ color: "lime" }}>{member.statut}</td>
                    <td>
                      {/* <img src={Vector} alt="foto" onClick={() => openModal(member)} style={{ cursor: 'pointer' }} /> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Modal.Body>

        <Pagination />
      </Modal>
    </>
  );
};

export default Pagi1;
