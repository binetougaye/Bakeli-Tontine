import Input from "./Input";
import Icons from "./Icons";

const Bouton = ({ bouton, bouton2, icon3, addmember }) => {
  return (
    <div className="d-flex justify-content-end">
      <div>{bouton}</div>
      <div
        className="modal fade "
        id="staticBackdrop4"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className=" modal-dialog">
          <div className="modal-content dialog">
            <div className="d-flex justify-content-end p-2 fs-4">
              <Icons
                icon3={
                  <i
                    className="fa-solid fa-xmark"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    {icon3}
                  </i>
                }
              />
            </div>

            <div className="modal-body">
              <h2 className="text-center modal-h2">{addmember}</h2>
              <form className="row g-3   mt-4">
                <div className="col-md-6 form ">
                  <Input
                    name="Nom"
                    input={
                      <input type="text" className="form-control" required />
                    }
                  />

                  <Input
                    born="Date de naissance"
                    input={
                      <input type="date" className="form-control" required />
                    }
                  />
                </div>

                <div className="col-md-6 ">
                  <Input
                    firstname="Prenom"
                    input={
                      <input type="text" className="form-control" required />
                    }
                  />

                  <Input
                    job="Profession"
                    input={
                      <input type="text" className="form-control" required />
                    }
                  />
                </div>

                <div className="col-md-6 form1 ">
                  <Input
                    mail="Email"
                    input={
                      <input type="mail" className="form-control" required />
                    }
                  />

                  <Input
                    phone="Télèphone"
                    input={
                      <input type="text" className="form-control" required />
                    }
                  />
                </div>
                <div className="col-md-6 ">
                  <Input
                    adress="Adresse"
                    input={
                      <input type="text" className="form-control" required />
                    }
                  />

                  <Input
                    organisation="Organisations"
                    input={
                      <input
                        type="text"
                        className="form-control mb-2"
                        required
                      />
                    }
                  />
                </div>
              </form>
            </div>
            <div className="d-flex justify-content-center align-items-center ">
              {bouton2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bouton;
