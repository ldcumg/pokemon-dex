import { useRef, useState } from "react";
import Dashboard from "../components/Dashboard";
import MOCK_DATA from "../mock";
import PokemonList from "../components/PokemonList";
import { PokemonContext } from "../context/PokemonContext";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(
    new Array(6).fill("pokeBall")
  );
  const [selectedMark, setSelectedMark] = useState([]);

  const scrollRef = useRef();

  const scrollToTop = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <PokemonContext.Provider
      value={{
        MOCK_DATA,
        scrollRef,
        selectedPokemon,
        setSelectedPokemon,
        selectedMark,
        setSelectedMark,
      }}
    >
      <Dashboard />
      <PokemonList />
      <span
        id="top-scroll"
        onClick={scrollToTop}
        className="material-symbols-rounded"
      >
        arrow_upward
      </span>
    </PokemonContext.Provider>
  );
};

export default Dex;
