import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";
import { ContextoProvider } from "../Context";

function Rutas() {
  return (
    <BrowserRouter>
      <Header />
      <ContextoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ContextoProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default Rutas;
