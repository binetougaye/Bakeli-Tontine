import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Data } from "./DashboardComponents/CardData";
import Table from "./DashboardComponents/Table";
import { TableData } from "./DashboardComponents/TableData";
import { LineGraph } from "./DashboardComponents/Line";
import { Doughnuts } from "./DashboardComponents/Doughnuts";
import Table2 from "./DashboardComponents/Table2";
import { Datas } from "./DashboardComponents/TableData";
import Cards from "./DashboardComponents/Cards";
import Navbar from "./Navigation/Navbar";

// Cotisation
import Cotisation from "./Component/Cotisation";
// Utilisateurs
import FirstCard from "./Components/FirstCard";
// ARCHIVES & MEMBRES BLOQUES
import Archives from "./Components/Archives";
import BlockedUser from "./Components/BlockedUser";
// Profil Admin
import { AdminGeneraux } from "./AdminGeneraux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./Navigation/Sidebar";
import "./Navigation/Navigation.css";
import Sidebar from "./Navigation/Sidebar";
function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route
              path="/Dashboard"
              element={
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-2 p-0">
                      <Sidebar />
                    </div>
                    <div className="col-lg-10">
                      <div className="row">
                        <Navbar />
                      </div>

                      <Cards data={Data} />
                      <div className="row ps-4">
                        <div className="col-lg-6">
                          <h6 className="title p-3 fw-bold m-0 px-4 fs-6">
                            Evolution des cotisations en fonction du temps
                          </h6>
                          <div className="card rounded-bottom charts p-3 rounded-0 shadow border-0">
                            <LineGraph />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <h6 className="title p-3 fw-bold m-0 px-4 fs-6">
                            Statistiques
                          </h6>
                          <div className="card shadow rounded-bottom chart p-3 rounded-0 border-0 d-flex justify-content-center align-items-center">
                            <Doughnuts />
                          </div>
                        </div>
                      </div>
                      <div className="row ps-4">
                        <div className="col-lg-6">
                          <h5 className="fw-bold text-dark">Juin</h5>
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
                          <h5 className="fw-bold text-dark">Top Progression</h5>
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
                </div>
              }
            />
            <Route
              path="/Cotisation"
              element={
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-2 p-0">
                      <Sidebar />
                    </div>
                    <div className="col-lg-10">
                      <div className="row">
                        <Navbar />
                      </div>
                      <div className="row">
                        <Cotisation />
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
            <Route
              path="/utilisateurs"
              element={
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-2 p-0">
                      <Sidebar />
                    </div>
                    <div className="col-lg-10">
                      <div className="row">
                        <Navbar />
                      </div>
                      <div className="row">
                        <FirstCard />
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
            <Route
              path="/archives"
              element={
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-2 p-0">
                      <Sidebar />
                    </div>
                    <div className="col-lg-10">
                      <div className="row">
                        <Navbar />
                      </div>
                      <div className="row">
                        <Archives />
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
            <Route
              path="/MembresBloqués"
              element={
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-2 p-0">
                      <Sidebar />
                    </div>
                    <div className="col-lg-10">
                      <div className="row">
                        <Navbar />
                      </div>
                      <div className="row">
                        <BlockedUser />
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
            <Route
              path="/admin"
              element={
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-2 p-0">
                      <Sidebar />
                    </div>
                    <div className="col-lg-10">
                      <div className="row">
                        <Navbar />
                      </div>
                      <div className="row">
                        <AdminGeneraux />
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
