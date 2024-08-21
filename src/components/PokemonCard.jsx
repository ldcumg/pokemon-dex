import { Link, useLocation } from "react-router-dom";
import StBtn from "../styles/StBtn";
import { useEffect, useRef } from "react";
import { SwalAlert } from "../styles/Swal";

const PokemonCard = ({ pokemon, myPokemons, setMyPokemons }) => {
  const scrollY = useRef();

  const linkedScrollY = useLocation().state?.scrollY;
  const linkedList = useLocation().state?.myPokemons ?? myPokemons;
  useEffect(() => {
    window.scrollTo({
      top: linkedScrollY?.current,
    });
    setMyPokemons(linkedList);
  }, []);

  const addPokemon = () => {
    if (!myPokemons.includes("pokeBall")) {
      SwalAlert("소유할 수 있는 포켓몬이 가득 찼습니다.", "error");
      return;
    }

    if (
      myPokemons.some((myPokemon) => {
        return myPokemon.id === pokemon.id;
      })
    ) {
      SwalAlert("이미 존재하는 포켓몬입니다.", "error");
      return;
    }

    const newPokemon = {
      img: pokemon.img_url,
      name: pokemon.korean_name,
      id: pokemon.id,
    };
    const pokeBallIndex = myPokemons.indexOf("pokeBall");
    setMyPokemons(
      myPokemons.map((item, index) => {
        if (index === pokeBallIndex) return newPokemon;
        return item;
      })
    );
    const selectedPokemonNum = myPokemons.filter(
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
        onClick={() => (scrollY.current = window.scrollY)}
        to={`/pokemon-detail?id=${pokemon.id}`}
        state={{ myPokemons, scrollY }}
      >
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <div>{pokemon.korean_name}</div>
        <div>No.{pokemon.id}</div>
      </Link>
      <StBtn onClick={addPokemon}>추가</StBtn>
    </li>
  );
};

export default PokemonCard;
