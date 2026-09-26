import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

import Inicio from "./pages/Inicio";
import Adote from "./pages/Adote";
import ComoAdotar from "./pages/ComoAdotar";
import Produtos from "./pages/Produtos";
import SobreNos from "./pages/SobreNos";
import Perfil from "./pages/Perfil";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Inicio />} />

        <Route path="/adote" element={<Adote />} />

        <Route
          path="/como-adotar"
          element={<ComoAdotar />}
        />

        <Route
          path="/produtos"
          element={<Produtos />}
        />

        <Route
          path="/sobre"
          element={<SobreNos />}
        />

        <Route
          path="/perfil"
          element={<Perfil />}
        />

      </Routes>
    </>
  );
}

export default App;