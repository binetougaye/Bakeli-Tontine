
const Card = ({items,key}) => (
  <div className="col-lg-4" key={key}>
   <div className="card test rounded-3 shadow">
  <div className="card-body card-bodyy">
    <p className="card-title para">{items.mois}</p>
    <h5 className="card-text card-texte fw-bold fs-4">{items.montant} FCFA</h5>
    <h6 className="card-text">Cotisation: {items.cotisation}</h6>
   
  </div>
</div>
  </div>
);

export default Card;
