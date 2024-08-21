import { useRef, useState } from "react";
import Dashboard from "../components/Dashboard";
import MOCK_DATA from "../mock";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(new Array(6).fill('pokeBall'));
  const [selectedMark, setSelectedMark] = useState([]);

  const scrollRef = useRef();

  const scrollToTop = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Dashboard
        scrollRef={scrollRef}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
        setSelectedMark={setSelectedMark}
      />
      <PokemonList
        MOCK_DATA={MOCK_DATA}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
        selectedMark={selectedMark}
        setSelectedMark={setSelectedMark}
      />
      <span
        id="top-scroll"
        onClick={scrollToTop}
        className="material-symbols-rounded"
      >
        arrow_upward
      </span>
    </>
  );
};

export default Dex;
