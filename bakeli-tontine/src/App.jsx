// import {Li}
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./DashboardComponents/Card";
import { Data } from "./DashboardComponents/CardData";
// import Titles from "./DashboardComponents/Titles";
import Table from "./DashboardComponents/Table";
import { TableData } from "./DashboardComponents/TableData";
import { LineGraph } from "./DashboardComponents/Line";
import { Doughnuts } from "./DashboardComponents/Doughnuts";
import Table2 from "./DashboardComponents/Table2";
import CardTest from "./DashboardComponents/CardTest";
import { Datas } from "./DashboardComponents/TableData";
import { Tab } from "bootstrap";
function App() {
  return (
    <div>
      <div className="container">
        <Card data={Data} />
        {/* <CardTest/> */}
        <div className="row mt-5 ">
          <div className="col-lg-6 ">
          <h6 className="title m-0">Evolution des cotisations en fonction du temps</h6>
            <div className="card charts p-3 rounded-0 shadow border-0">
           
              <LineGraph />
            </div>
          </div>
          <div className="col-lg-6  ">
            <h6 className="title m-0">Statistiques</h6>
            <div className="card chart p-3 rounded-0 border-0 d-flex justify-content-center align-items-center">
              <Doughnuts />
            </div>
          </div>
        </div>
        {/* <div className="col-lg-6"></div> */}
        <div className="row">
          <div className="col-lg-6">
            <Table
              text="Juin"
              membres="Membres"
              montant="Montant"
              date="Date"
              statut="Statut"
              tableData={TableData}
            />
          </div>
          <div className="col-lg-6">
            <Table2
              text="Progression"
              membres="Membres"
              date="Date"
              progression="Progression"
              datas={Datas}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
