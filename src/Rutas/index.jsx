import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";
import { ContextoProvider } from "../Context";
import AgentData from "../components/AgentData";

function Rutas() {
  return (
    <BrowserRouter>
      <Header />
      <ContextoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agentes" element={<AgentData />} />
          <Route
            path="*"
            element={
              <div>
                <p style={{ textAlign: "center", fontSize: "100px" }}>404</p>
                <h2 style={{ textAlign: "center" }}>Página no encontrada</h2>
              </div>
            }
          />
        </Routes>
      </ContextoProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default Rutas;
