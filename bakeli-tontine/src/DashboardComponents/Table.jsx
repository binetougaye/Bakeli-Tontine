export default function Table({ membres, montant, date, statut, tableData }) {
  return (
    <div>
      <table className="table mt-5 shadow">
        <thead className="test" style={{backgroundColor: 'red'}}>
          <tr>
            <th scope="col">{membres}</th>
            <th scope="col">{montant}</th>
            <th scope="col">{date}</th>
            <th scope="col">{statut}</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((tab, index) => (
            <tr key={index}>
              <td>{tab.membre}</td>
              <td>{tab.montant}</td>
              <td>{tab.date}</td>
              <td>{tab.statut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
