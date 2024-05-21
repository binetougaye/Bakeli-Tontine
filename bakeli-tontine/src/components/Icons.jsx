const Icons = ({ icon, icon2, icon3, icon4, icon5, icon6, icon7, icon8 }) => {
    return (<div>
        <i className={`mt-2 icône ${icon}`}></i>
        <i className={` mt-2  ${icon2}`}></i>
        <i>{icon3}</i>
        <div className="d-flex justify-content-center align-items-center gap-2 mt-1 fs-6 icon ">
            <i>{icon4}</i>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content content">
                        <div className="modal-header">
                            <h5 className="modal-title p-2" id="exampleModalLabel">Détails Cotisations</h5>
                        </div>
                        <div class="modal-body mod">
                            <h5 className="fs-5 fw-bold p-2 roy">Selene Roy</h5>
                            <span className="des">Designer</span>

                            <table className="table-striped text-center tablea">
                                <thead className="cabeza">
                                    <tr>
                                        <th className="fs-5 p-2 month" scope="col">Mois</th>
                                        <th className="fs-5 month" scope="col">Date </th>
                                        <th className="fs-5 month" scope="col">Montant</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="tr">
                                        <td className=" fs-6 text-dark">Janvier</td>
                                        <td className=" fs-6 text-dark">22-01-2022</td>
                                        <td className=" fs-6 text-dark">25.000 FCFA</td>

                                    </tr>
                                    <tr className="tr1">
                                        <td className=" fs-6 text-dark" >Février</td>
                                        <td className=" fs-6 text-dark">01/01/2022</td>
                                        <td className=" fs-6 text-dark">25.000 FCFA</td>

                                    </tr>


                                    <tr className="tr2">
                                        <td className=" fs-6 text-dark" >Mars</td>
                                        <td className=" fs-6 text-dark">01/01/2022</td>
                                        <td className=" fs-6 text-dark">25.000 FCFA</td>

                                    </tr>
                                    <tr className="tr3">
                                        <td className=" fs-6 text-dark" >Avril</td>
                                        <td className=" fs-6 text-dark">01/01/2022</td>
                                        <td className=" fs-6 text-dark">25.000 FCFA</td>

                                    </tr>
                                    <tr className="tr4">
                                        <td className="fs-6">Mai</td>
                                        <td className="fs-6">01/01/2022</td>
                                        <td className="fs-6">25.000FCFA</td>


                                    </tr>
                                    <tr className="tr5">
                                        <td className=" fs-6 text-dark">Juin</td>
                                        <td className=" fs-6 text-dark">01/01/2022</td>
                                        <td className=" fs-6 text-dark">25.000 FCFA</td>
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
            <i className={`  file2 ${icon8}`}></i>

        </div>

    </div>);
}

export default Icons;