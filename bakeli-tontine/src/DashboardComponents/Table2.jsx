import React from "react";
// import { Data } from "./CardData";
export default function Table2({ membres, date, progression, datas }) {
  return (
    <div>
      <table className="table mt-5">
    
          <tr className="bg">
            <th scope="col">{membres}</th>
            <th scope="col">{date}</th>
            <th scope="col">{progression}</th>
          </tr>
      
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <td>{data.membre}</td>
              <td>{data.date}</td>
              <td>
                {/* <div
                  className="progress bg-primary"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow= {data.Progression}
                  aria-valuemin="0"
                  aria-valuemax={data.Progression}
                  style={{ width: `${data.Progression}%` }}
                >
                  <div className="progress-bar bg-dark" style={{width: }}></div>
                </div>
                {data.Progression}% */}
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {data.Progression=== 100? (  <div className="progress-bar" style={{ width:"100", backgroundColor: "#20DF7F" }}></div>):(  <div className="progress-bar" style={{ width: data.Progression, backgroundColor: "#093545" }}></div>)}
                
                
                </div>
                {/* {data.Progression} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
