import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/inicio/Inicio";
import Diamantes from "./pages/diamantes/Diamantes";
import Descuentos from "./pages/servicios/Servicios";
import Servicios from "./pages/servicios/Servicios";
// import Thanks1 from './logos/LOGO-WHITE/GRACIAS POR TU PREFERENCIA-ESFERAS.png'
import Thanks2 from "./logos/LOGO-WHITE/GRACIAS POR TU PREFERENCIA.png";

import "./app.css";
import Navbar from "./components/Navbar";
import ThanksPreference1 from "./components/ThanksPreference1";

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Inicio" element={<Home />} />
        <Route path="Descuentos" element={<Descuentos />} />
        <Route path="Diamantes" element={<Diamantes />} />
        <Route path="Servicios" element={<Servicios />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
