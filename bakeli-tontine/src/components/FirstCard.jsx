import { useState } from "react";
import Icons from "./Icons";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
import Bouton from "./Bouton";
import ContentCard from "./ContentCard";
import "./Card.css";

const FirstCard = () => {
  const [card, setCard] = useState(true);

  const tableau = [
    {
      nom: "Selena Roy",
      date: "01/01/2022",
      montant: "300.000 FCFA",
      progression1: "100%",
      statut1: "Terminé",
      progress1: "100%",
    },
    {
      nom: "Emma Watson",
      date: "01/01/2022",
      montant: "300.000 FCFA",
      progression2: "57%",
      statut2: "En cours",
      progress2: "57%",
    },
    {
      nom: "Selena Roy",
      date: "01/01/2022",
      montant: "300.000 FCFA",
      progression3: "100%",
      statut3: "Terminé",
      progress1: "100%",
    },
    {
      nom: "Emma Watson",
      date: "01/01/2022",
      montant: "300.000 FCFA",
      progression4: "50%",
      statut4: "En cours",
      progress3: "50%",
    },
    {
      nom: "Selena Roy",
      date: "01/01/2022",
      montant: "300.000 FCFA",
      progression5: "50%",
      statut5: "En cours",
      progress4: "50%",
    },
    {
      nom: "Emma Watson",
      date: "01/01/2022",
      montant: "300.000 FCFA",
      progression6: "64%",
      statut6: "En cours",
      progress5: "64%",
    },
  ];

  const handleClick = () => {
    setCard(true);
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center p-4 gap-4">
        <div className="shadow cartess p-3" onClick={handleClick}>
          <div className="d-flex gap-1">
            <h5 className="h5 p-2">Membres Actif</h5>
            <Icons icon="fa-solid fa-circle" />
          </div>
          <h4 className="fs-3 p-2 fw-bold h4">94 Membres</h4>
        </div>
        <SecondCard membresbloques="Membres Bloqués" sixmembres="6 Membres" />
        <ThirdCard totalffectif="Total Effectif" centmembre="100 Membres" />
      </div>
      <Bouton
        bouton={
          <button
            type="button"
            className="add2 text-white shadow mb-5"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop4"
            id="bouton"
          >
            Ajouter
          </button>
        }
        addmember="Ajouter un membre"
        bouton2={
          <button className="p-2 add shadow" type="submit">
            Ajouter
          </button>
        }
      />
      {card && (
        <ContentCard
          th1="Membres"
          th2="Date Début"
          th3="Seuil"
          th4="Progression"
          th5="Statut"
          th6="Actions"
          tableau={tableau}
        />
      )}
    </div>
  );
};

export default FirstCard;
