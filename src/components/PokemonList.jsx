import { useLocation } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import { useEffect } from "react";
import { useRef } from "react";

const PokemonList = (props) => {
  const { MOCK_DATA, selectedPokemon, setSelectedPokemon } = props;

  const connect = useRef({});

  const connectedScrollY = useLocation().state.current?.scrollY;
  const connectedList =
    useLocation().state.current?.selectedPokemon ?? selectedPokemon;

  useEffect(() => {
    connectedScrollY &&
      window.scrollTo({
        top: connectedScrollY,
      });
    setSelectedPokemon(connectedList);
  }, []);

  return (
    <ul id="pokemon-list-container">
      {MOCK_DATA.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            props={{ ...props, pokemon, connect }}
          />
        );
      })}
    </ul>
  );
};

export default PokemonList;
