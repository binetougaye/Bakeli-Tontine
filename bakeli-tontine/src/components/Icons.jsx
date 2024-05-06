const Icons = ({ icon, icon2, icon3, icon4, icon5, icon6, icon7, icon8 }) => {
    return (<div>
        <i className={`mt-2 icône ${icon}`}></i>
        <i className={` mt-2  ${icon2}`}></i>
        <i>{icon3}</i>
        <div className="d-flex justify-content-center align-items-center gap-2 mt-1 fs-6 icon ">
            <i>{icon4}</i>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title p-2" id="exampleModalLabel">Détails Cotisations</h5>
                        </div>
                        <div class="modal-body">
                            <h6 className="fs-5 fw-bold p-2">Selene Roy</h6>
                            <span className="span">Designere</span>

                            <table className="table-striped text-center">
                                <thead >
                                    <tr>
                                        <th className="p-2 fs-6" scope="col">Mois</th>
                                        <th className="fs-6" scope="col">Date </th>
                                        <th className="fs-6" scope="col">Montant</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="tr">
                                        <td className="p-2">Janvier</td>
                                        <td>22-01-2022</td>
                                        <td>25.000 FCFA</td>

                                    </tr>
                                    <tr className="tr1">
                                        <td className="p-2" >Février</td>
                                        <td>01/01/2022</td>
                                        <td>25.000 FCFA</td>

                                    </tr>


                                    <tr className="tr2">
                                        <td className="p-2" >Mars</td>
                                        <td>01/01/2022</td>
                                        <td>25.000 FCFA</td>

                                    </tr>
                                    <tr className="tr3">
                                        <td className="p-2" >Avril</td>
                                        <td>01/01/2022</td>
                                        <td>25.000 FCFA</td>

                                    </tr>
                                    <tr className="tr4">
                                        <td className="p-2">Mai</td>
                                        <td>01/01/2022</td>
                                        <td>25.000FCFA</td>


                                    </tr>
                                    <tr className="tr5">
                                        <td className="p-2" >Juin</td>
                                        <td>01/01/2022</td>
                                        <td>25.000 FCFA</td>
                                    </tr>

                                </tbody>
                            </table>
                            <div className="d-flex justify-content-end">
                                <div className="bef">

                                </div>
                            </div>

                            <div className="d-flex justify-content-end total mt-3">
                                <h5 className="fs-5">Total = </h5>
                                <h5 className="fs-5">300.000 FCFA</h5>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <i className={` arrow-file ${icon5}`}></i>
            <i className={` file ${icon6}`}></i>
            <i>{icon7}</i>
            <i className={` text-danger fw-bold file2 ${icon8}`}></i>

        </div>

    </div>);
}

export default Icons;