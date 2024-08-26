import { useRef, useState } from "react";
import Dashboard from "../components/Dashboard";
import MOCK_DATA from "../data/mock";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(
    new Array(6).fill("pokeBall")
  );

  const scrollRef = useRef();
  const connect = useRef({});

  const scrollToTop = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Dashboard
        scrollRef={scrollRef}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
        connect={connect}
      />
      <PokemonList
        MOCK_DATA={MOCK_DATA}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
        connect={connect}
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
