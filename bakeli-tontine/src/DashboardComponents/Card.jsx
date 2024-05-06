import CardTest from "./CardTest";
const Card = ({ data }) => (
  <div>
    <div className="row">
      {data.map((card, index) => (
        <div className="col-lg-4" key={index}>
          <div className="card shadow border-0" style={{ width: "18rem" }}>
            <div className="card-body">
              <h6 className="card-title">{card.mois}</h6>
              <h4 className="card-text">{card.montant} FCFA</h4>
              <p className="card-text">
                Nombre de cotisation: {card.cotisation}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Card;
