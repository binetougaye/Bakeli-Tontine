import { useState } from "react";
import Icons from "./Icons";
import SecondContentCard from "./SecondContentCard";
const SecondCard = ({ membresbloques, sixmembres }) => {


  const tableau = [
    { nom: "Selena Roy", date: "01/01/2022", montant: "300.000 FCFA", statut1: "Bloqué", progress1: "100%" },
    { nom: "Emma Watson", date: "01/01/2022", montant: "300.000 FCFA", statut2: "Bloqué", progress2: "57%" },
    { nom: "Selena Roy", date: "01/01/2022", montant: "300.000 FCFA", statut3: "Bloqué", progress1: "100%" },
    { nom: "Emma Watson", date: "01/01/2022", montant: "300.000 FCFA", statut4: "Bloqué", progress3: "50%" },
    { nom: "Selena Roy", date: "01/01/2022", montant: "300.000 FCFA", statut5: "Bloqué", progress4: "50%" },
    { nom: "Emma Watson", date: "01/01/2022", montant: "300.000 FCFA", statut6: "Bloqué", progress5: "64%" },

  ];

  const [card, setCard] = useState(false)
  const handleClick = () => {
    setCard(!card);
  }

  return (<div>
    <div className=" shadow bg-white card p-3" onClick={handleClick}>
      <div className="d-flex gap-1">
        <h5 className=" card-h5  p-2">{membresbloques}</h5>
        <Icons
          icon2="fa-solid fa-ban  ban1" />
      </div>
      <h4 className=" card-h4 fs-3 p-2 fw-bold">{sixmembres}</h4>
    </div>
    {card && (
      <SecondContentCard
        th1="Membres"
        th2="Date Début"
        th3="Seuil"
        th4="Statut"
        th5="Actions"
        tableau={tableau}

      />

    )}

  </div>);
}

export default SecondCard;