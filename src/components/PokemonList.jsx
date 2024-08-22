import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import PokemonCard from "./PokemonCard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const PokemonList = () => {
  const {
    MOCK_DATA,
    selectedPokemon,
    setSelectedPokemon,
    selectedMark,
    setSelectedMark,
  } = useContext(PokemonContext);

  const connectedScrollY = useLocation().state.current.scrollY ?? 0;
  const connectedList =
    useLocation().state.current.selectedPokemon ?? selectedPokemon;
  const connectedSelectedMark =
    useLocation().state.current.selectedMark ?? selectedMark;

  useEffect(() => {
    connectedScrollY &&
      window.scrollTo({
        top: connectedScrollY,
      });
    setSelectedPokemon(connectedList);
    setSelectedMark(connectedSelectedMark);
  }, []);

  return (
    <ul id="pokemon-list-container">
      {MOCK_DATA.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </ul>
  );
};

export default PokemonList;
