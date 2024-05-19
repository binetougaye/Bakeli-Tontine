import Icons from "./Icons";

const ContentCard = ({ th1, th2, th3, th4, th5, th6, tableau }) => {

    return (<div>
        <table>
            <thead className="shadow">
                <tr>
                    <th className=" p-4  th1" scope="col">{th1}</th>
                    <th className=" p-4  th1" scope="col">{th2}</th>
                    <th className=" p-4  th1" scope="col">{th3}</th>
                    <th scope="col" className="p-4  th1">{th4}</th>
                    <th className=" p-4  th1" scope="col">{th5}</th>
                    <th className=" p-4  th1" scope="col">{th6}</th>

                </tr>
            </thead>
            <tbody className="bg-white mt-2 shadow">

                {
                    tableau.map((item, index) => (
                        <tr key={index}>
                            <td className=" p-4 td1">{item.nom}</td>
                            <td className="p-4 td1">{item.date}</td>
                            <td className=" td1">{item.montant}</td>
                            <td className="d-flex gap-3 td1">
                                <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="100" aria-valuemin="0">
                                    <div className="progress-bar" style={{ width: item.progress1 }}></div>
                                    <div className="progress-bar2" style={{ width: item.progress2 }}></div>
                                    <div className="progress-bar" style={{ width: item.progress1 }}></div>
                                    <div className="progress-bar2" style={{ width: item.progress3 }}></div>
                                    <div className="progress-bar2" style={{ width: item.progress4 }}></div>
                                    <div className="progress-bar2" style={{ width: item.progress5 }}></div>
                                </div>
                                <div className="lol">
                                    <span>{item.progression1}</span>
                                    <span>{item.progression2}</span>
                                    <span>{item.progression3}</span>
                                    <span>{item.progression4}</span>
                                    <span>{item.progression5}</span>
                                    <span>{item.progression6}</span>
                                </div> :
                            </td>
                            <td>
                                <div className="statut1">{item.statut1}</div>
                                <div className="statut2">{item.statut2}</div>
                                <div className="statut3">{item.statut3}</div>
                                <div className="statut4">{item.statut4}</div>
                                <div className="statut5">{item.statut5}</div>
                                <div className="statut6">{item.statut6}</div>
                            </td>
                            <td className="d-flex gap-3 mt-3">

                                <Icons
                                    icon4={<i className="fa-regular fa-eye eye" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>}
                                    icon5="fa-solid fa-file-arrow-down"
                                    icon6="fa-solid fa-ban file"
                                />

                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

        <nav aria-label="..." >
            <ul className="pagination d-flex justify-content-center align-items-center mt-5">
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

export default ContentCard;