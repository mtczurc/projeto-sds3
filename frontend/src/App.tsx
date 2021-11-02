import BarChat from "componets/BarChart";
import DataTable from "componets/DataTable";
import DonutChart from "componets/DonutChart";
import Footer from "componets/Footer";
import NavBar from "componets/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">DeshBoard de Vendas</h1>

        <div className="row px-3">
          <div className="coll-sm-6">
          <h5 className="text-center text-secondary">Taxa de Sucesso(%)</h5>
          <BarChat />
          </div>
          <div className="coll-sm-6">
          <h5 className="text-center text-secondary">Todas Vendas</h5>
          <DonutChart />
          </div>
        </div>

          <div className="py-3">
            <h2 className="text-primary">Todas as Vendas</h2>
          </div>
      
      <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
