export default function Table({ membres, montant, date, statut, tableData }) {
  const tableStyle = {
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "white",
    width: "100%",
  };
  return (
    <>
      <table style={tableStyle} className="shadow">
        <tr className="bg rounded-tr">
          <th>{membres}</th>
          <th>{montant}</th>
          <th>{date}</th>
          <th>{statut}</th>
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
