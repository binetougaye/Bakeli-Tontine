export default function Table2({ membres, date, progression, datas }) {
  const tableStyle = {
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "white",
    width: "100%",
  };

  return (
    <div>
      <table style={tableStyle}>
        <thead>
          <tr className="bg">
            <th>{membres}</th>
            <th>{date}</th>
            <th>{progression}</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <td>{data.membre}</td>
              <td>{data.date}</td>
              <td>
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={data.Progression} aria-valuemin="0" aria-valuemax="100">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${data.Progression}%`,
                      backgroundColor: data.Progression === 100 ? "#20DF7F" : "#093545",
                    }}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
