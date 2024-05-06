// import {Li}
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./DashboardComponents/Card";
import { Data } from "./DashboardComponents/CardData";
import Titles from "./DashboardComponents/Titles";
import Table from "./DashboardComponents/Table";
import { TableData } from "./DashboardComponents/TableData";
import { LineGraph } from "./DashboardComponents/Line";
import { Doughnuts } from "./DashboardComponents/Doughnuts";
// import Table2 from "./DashboardComponents/Table2";
function App() {
  return (
    <div>
      <div className="container">
        <Card data={Data} />
        <div className="row mt-5 ">
          <div className="col-lg-6 shadow ">
            <div className="card border-0">
              <LineGraph />
            </div>
          </div>
          <div className="col-lg-6 shadow d-flex justify-content-center">
            <div className="  border-0">
              <Doughnuts />
            </div>
          </div>
        </div>
        {/* <div className="col-lg-6"></div> */}
        <div className="row">
          <div className="col-lg-6">
            <Titles title="Juin" />
            <Table
              membres="Membres"
              montant="Montant"
              date="Date"
              statut="Statut"
              tableData={TableData}
            />
          </div>
          <div className="col-lg-6">
            <Titles title="Top progression" />
            <Table
              membres="Membres"
              // montant="Montant"
              date="Date"
              // statut="Statut"
              tableData={TableData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
