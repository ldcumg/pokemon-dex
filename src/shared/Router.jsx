import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dex from "../pages/Dex";
import Home from "../pages/Home";
import PokemonDetail from "../pages/PokemonDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemon-dex" element={<Dex />} />
        <Route path="pokemon-detail" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
