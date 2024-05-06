import Icons from "./Icons";

const SecondContentCard = ({ th1, th2, th3, th4, th5, tableau }) => {



    return (<div>
        <table>
            <thead className=" shadow">
                <tr>
                    <th className=" th1 p-4" scope="col">{th1}</th>
                    <th className="p-2 th1" scope="col">{th2}</th>
                    <th className="p-2 th1" scope="col">{th3}</th>
                    <th scope="col" className="px-4 th1">{th4}</th>
                    <th className="p-2 th1" scope="col">{th5}</th>

                </tr>
            </thead>

            <tbody className="bg-white mt-2">

                {
                    tableau.map((item, index) => (
                        <tr key={index}>
                            <td className="p-4 td1">{item.nom}</td>
                            <td className="p-2 td1">{item.date}</td>
                            <td className="p-2 td1">{item.montant}</td>
                            <td>
                                <div className=" text-danger fw-bold statut7">{item.statut1}</div>
                                <div className=" text-danger fw-bold  statut7">{item.statut2}</div>
                                <div className="text-danger fw-bold  statut7">{item.statut3}</div>
                                <div className=" text-danger fw-bold  statut7">{item.statut4}</div>
                                <div className=" text-danger fw-bold  statut7">{item.statut5}</div>
                                <div className="text-danger fw-bold  statut7">{item.statut6}</div>


                            </td>
                            <td className="d-flex gap-3 mt-3">

                                <Icons
                                    icon7={<i className="fa-regular fa-eye " data-bs-toggle="modal" data-bs-target="#exampleModal"></i>}
                                    icon8="fa-solid fa-ban file2"

                                />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <nav aria-label="..." >
            <ul className="pagination d-flex justify-content-center align-items-center  mt-5">
                <li className="text-secondary page"> Previous page  </li>
                <li className="d-flex gap-3">
                    <li className="page-item1">1</li>
                    <li className="page-item">2</li>
                    <li className="page-item">3</li>
                    <li className="page-item">4</li>

                    <li className=" fw-bold">Next page</li>
                </li>
            </ul>
        </nav>


    </div>);
}
export default SecondContentCard;