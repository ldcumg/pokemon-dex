import PokemonCard from "./PokemonCard";

const PokemonList = (props) => {
  const MOCK_DATA = props.MOCK_DATA;
  return (
    <ul id="pokemon-list-container">
      {MOCK_DATA.map((pokemon) => {
        return <PokemonCard key={pokemon.id} props={{ ...props, pokemon }} />;
      })}
    </ul>
  );
};

export default PokemonList;
