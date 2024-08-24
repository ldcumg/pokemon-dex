import { SwalAlert } from "../styles/Swal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const AddPokemon = (pokemon) => {
  const { selectPokemon } = useSelector((state) => state);
  const { selectedPokemon } = selectPokemon;
  const dispatch = useDispatch();

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

  const newPokemon = {
    img: pokemon.img_url,
    name: pokemon.korean_name,
    id: pokemon.id,
  };
  const pokeBallIndex = selectedPokemon.indexOf("pokeBall");
  dispatch({
    type: "ADD",
    payload: { pokeBallIndex, newPokemon, targetId: pokemon.id },
  });

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

export default AddPokemon;
