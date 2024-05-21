import { useState } from "react";
import ThirdContentCard from "./ThirdContentCard";

const ThirdCard = ({ totalffectif, centmembre }) => {


  const tableau = [
    { nom: "Selena Roy", date: "01/01/2022", montant: "300.000 FCFA", progression1: "100%", statut1: "Actif", progress1: "100%" },
    { nom: "Emma Watson", date: "01/01/2022", montant: "300.000 FCFA", progression2: "57%", statut2: "Bloqué", progress2: "57%" },
    { nom: "Selena Roy", date: "01/01/2022", montant: "300.000 FCFA", progression3: "100%", statut3: "Actif", progress1: "100%" },
    { nom: "Emma Watson", date: "01/01/2022", montant: "300.000 FCFA", progression4: "57%", statut4: "Actif", progress3: "50%" },
    { nom: "Selena Roy", date: "01/01/2022", montant: "300.000 FCFA", progression5: "100%", statut5: "Actif", progress4: "50%" },
    { nom: "Emma Watson", date: "01/01/2022", montant: "300.000 FCFA", progression6: "57%", statut6: "Bloqué", progress5: "64%" },

  ];

  const [card, setCard] = useState(false)


  const handleClick = () => {
    setCard(!card);
  }

  return (<div>
    <div className=" shadow bg-white carte2 p-3" onClick={handleClick} >
      <h5 className=" card-h5   p-2">{totalffectif}</h5>
      <h4 className=" card-h4 fs-3 p-2 fw-bold">{centmembre}</h4>
    </div>



    {card && (

      <ThirdContentCard
        th1="Membres"
        th2="Date Début"
        th3="Seuil"
        th4="Progression"
        th5="Statut"
        th6="Actions"
        tableau={tableau}


      />
    )}
  </div>);
}

export default ThirdCard;