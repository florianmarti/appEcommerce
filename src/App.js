import React from "react";
import "./App.css";
import Navbar from "./Componentes/Navbar/Navbar";
import ItemListConteiner from "./Componentes/ItemListConteiner/ItemListConteiner";
import "boxicons";
import "react-router-dom";
import ButtonCounter from "./Componentes/Buttons/ButtonCounter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailConteiner from "./Componentes/ItemDetailConteiner/ItemDetailConteiner";
import Button from "./Componentes/Buttons/Button";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar color="red" />
        <Button />
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route
            path="/categoria/:catId"
            element={<ItemListConteiner wellcome="Listado de Productos" />}
          />
          <Route path="/detail/:prodId" element={<ItemDetailConteiner />} />
        </Routes>
      </BrowserRouter>
      <br />
      <ButtonCounter />
    </div>
  );
}

export default App;
