import MOCK_DATA from "./../mock";
import PokemonCard from "./PokemonCard";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const PokemonList = () => {
  const yCoordinate = useSelector((state) => state.yCoordinate);

  useEffect(() => {
    window.scrollTo({
      top: yCoordinate,
    });
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
