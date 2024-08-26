import { Link } from "react-router-dom";
import StBtn from "../styles/StBtn";
import { SwalAlert } from "../styles/Swal";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const PokemonCard = ({ pokemon }) => {
  const { selectedPokemon, setSelectedPokemon, connect } =
  useContext(PokemonContext);

  const addPokemon = () => {
    if (!selectedPokemon.includes("pokeBall")) {
      SwalAlert("소유할 수 있는 포켓몬이 가득 찼습니다.", "error");
      return;
    }

    if (
      selectedPokemon.some((myPokemon) => {
        return myPokemon.id === pokemon.id;
      })
    ) {
      SwalAlert("이미 존재하는 포켓몬입니다.", "error");
      return;
    }

    const pokeBallIndex = selectedPokemon.indexOf("pokeBall");
    setSelectedPokemon(
      selectedPokemon.map((item, index) => {
        if (index === pokeBallIndex) return pokemon;
        return item;
      })
    );
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
        onClick={() => {
          connect.current.selectedPokemon = selectedPokemon;
          connect.current.scrollY = window.scrollY;
        }}
        to={`/pokemon-detail?id=${pokemon.id}`}
        state={{ connect }}
      >
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <div>{pokemon.korean_name}</div>
        <div>No.{pokemon.id}</div>
      </Link>
      <StBtn
        $active={selectedPokemon.some((item) => item.id === pokemon.id)}
        onClick={addPokemon}
      >
        추가
      </StBtn>
    </li>
  );
};

export default PokemonCard;
