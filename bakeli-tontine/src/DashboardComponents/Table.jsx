export default function Table({ membres, montant, date, statut, tableData,text }) {
  return (
    <>
   
      <table className="table  shadow">
        <tr className="bg">
          <th scope="col">{membres}</th>
          <th scope="col">{montant}</th>
          <th scope="col">{date}</th>
          <th scope="col">{statut}</th>
        </tr>
        <tbody>
          {tableData.map((tab, index) => (
            <tr key={index}>
              <td>{tab.membre}</td>
              <td>{tab.montant}</td>
              <td>{tab.date}</td>
              {tab.statut === "Validé" ? (
                <td style={{ color: "#20DF7F", fontWeight: "bold" }}>
                  {tab.statut}
                </td>
              ) : (
                <td style={{ color: "#093545", fontWeight: "bold" }}>
                  {tab.statut}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
