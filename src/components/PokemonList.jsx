import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const { MOCK_DATA } = useContext(PokemonContext);
  return (
    <ul id="pokemon-list-container">
      {MOCK_DATA.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </ul>
  );
};

export default PokemonList;
