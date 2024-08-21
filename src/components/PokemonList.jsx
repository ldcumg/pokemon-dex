import PokemonCard from "./PokemonCard";

const PokemonList = ({ MOCK_DATA, myPokemons, setMyPokemons }) => {
  return (
    <ul id="pokemon-list-container">
      {MOCK_DATA.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            myPokemons={myPokemons}
            setMyPokemons={setMyPokemons}
          />
        );
      })}
    </ul>
  );
};

export default PokemonList;
