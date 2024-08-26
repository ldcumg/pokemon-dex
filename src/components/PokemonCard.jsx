import { Link } from "react-router-dom";
import StBtn from "../styles/StBtn";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setY } from "../redux/modules/yCoordinate";
import usePokemon from "../hooks/usePokemon";

const PokemonCard = ({ pokemon }) => {
  const selectedPokemon = useSelector((state) => state.selectPokemon);
  const {addPokemon}=usePokemon()

  const isAlreadySelected = selectedPokemon.some(
    (myPokemon) => myPokemon.id === pokemon.id
  );
  const dispatch = useDispatch();

  return (
    <li className="pokemons">
      <Link
        onClick={() => dispatch(setY(window.scrollY))}
        to={`/pokemon-detail?id=${pokemon.id}`}
      >
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <div>{pokemon.korean_name}</div>
        <div>No.{pokemon.id}</div>
      </Link>
      <StBtn $active={isAlreadySelected} onClick={() => addPokemon(pokemon)}>
        추가
      </StBtn>
    </li>
  );
};

export default PokemonCard;
