import { SwalAlert, SwalConfirm } from "../styles/Swal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { add, remove } from "../redux/modules/selectPokemon";

const usePokemon = () => {
  const dispatch = useDispatch();
  const selectedPokemon = useSelector((state) => state.selectPokemon);

  const addPokemon = (newPokemon) => {
    if (!selectedPokemon.includes("pokeBall")) {
      SwalAlert("소유할 수 있는 포켓몬이 가득 찼습니다.", "error");
      return;
    }

    if (selectedPokemon.some(
      (myPokemon) => myPokemon.id === newPokemon.id
    )) {
      SwalAlert("이미 존재하는 포켓몬입니다.", "error");
      return;
    }

    const pokeBallIndex = selectedPokemon.indexOf("pokeBall");
    dispatch(add({ pokeBallIndex, newPokemon }));

    const selectedPokemonNum = selectedPokemon.filter(
      (item) => item !== "pokeBall"
    ).length;
    SwalAlert(
      `${newPokemon.korean_name} 이(가) 추가되었습니다.`,
      "success",
      selectedPokemonNum + 1
    );
    return;
  };

  const removePokemon = (targetPokemon) => {
    SwalConfirm(
      `${targetPokemon.korean_name} 을(를) 삭제하시겠습니까?`,
      "삭제"
    ).then((result) => {
      if (result.isConfirmed) {
        dispatch(remove(targetPokemon.id));
        const selectedPokemonNum = selectedPokemon.filter(
          (item) => item !== "pokeBall"
        ).length;
        SwalAlert(
          `${targetPokemon.korean_name} 을(를) 삭제했습니다.`,
          "success",
          selectedPokemonNum - 1
        );
      } else {
        SwalAlert("삭제를 취소하였습니다.", "error");
      }
    });
  };

  const resetPokemon = () => {
    SwalConfirm("정말로 포켓몬 목록을 초기화시키겠습니까?", "초기화").then(
      (result) => {
        if (result.isConfirmed) {
          dispatch({ type: "RESET" });
          SwalAlert("포켓몬 목록을 초기화하였습니다.", "success");
        } else {
          SwalAlert("초기화를 취소하였습니다.", "error");
        }
      }
    );
  };

  return { addPokemon, removePokemon, resetPokemon };
};

export default usePokemon;
