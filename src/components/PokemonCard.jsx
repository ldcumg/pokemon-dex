import { Link } from "react-router-dom";
import StBtn from "../styles/StBtn";
import { SwalAlert } from "../styles/Swal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add } from "../redux/slices/selectPokemonSlice";
import { setY } from "../redux/slices/yCoordinateSlice";

const PokemonCard = ({ pokemon }) => {
  const selectedPokemon = useSelector((state) => state.selectPokemon);
  const isAlreadySelected = selectedPokemon.some(
    (myPokemon) => myPokemon.id === pokemon.id
  );
  const dispatch = useDispatch();

  const addPokemon = () => {
    if (!selectedPokemon.includes("pokeBall")) {
      SwalAlert("소유할 수 있는 포켓몬이 가득 찼습니다.", "error");
      return;
    }

    if (isAlreadySelected) {
      SwalAlert("이미 존재하는 포켓몬입니다.", "error");
      return;
    }

    const pokeBallIndex = selectedPokemon.indexOf("pokeBall");
    dispatch(add({ pokeBallIndex, newPokemon: pokemon }));

    const selectedPokemonNum = selectedPokemon.filter(
      (item) => item !== "pokeBall"
    ).length;
    SwalAlert(
      `${pokemon.korean_name} 이(가) 추가되었습니다.`,
      "success",
      selectedPokemonNum + 1
    );
    return;
  };

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
      <StBtn $active={isAlreadySelected} onClick={addPokemon}>
        추가
      </StBtn>
    </li>
  );
};

export default PokemonCard;
