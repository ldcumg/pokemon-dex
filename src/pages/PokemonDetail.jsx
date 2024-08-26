import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../data/mock.js";
import StBtn from "../styles/StBtn.jsx";
import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PressSign from "../styles/PressSign.jsx";
import usePokemon from "../hooks/usePokemon.js";

const PokemonDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const targetId = Number(searchParams.get("id"));
  const targetPokemon = MOCK_DATA.find((pokemon) => pokemon.id === targetId);
  const { addPokemon, removePokemon } = usePokemon();

  const addRemoveRef = useRef(null);
  const backRef = useRef(null);
  const [backSign, setBackSign] = useState(false);

  useEffect(() => {
    addRemoveRef.current.focus();
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          addRemoveRef.current.focus();
          setBackSign(false);
          break;
        case "ArrowRight":
          backRef.current.focus();
          setBackSign(true);
          break;
        case "ArrowUp":
          targetId < 151 && setSearchParams({ id: targetId + 1 });
          break;
        case "ArrowDown":
          targetId > 1 && setSearchParams({ id: targetId - 1 });
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [targetId]);

  const navigate = useNavigate();
  
  const selectedPokemon = useSelector((state) => state.selectPokemon);
  const isAlreadySelected = selectedPokemon.some(
    (myPokemon) => myPokemon.id === targetId
  );
  return (
    <div id="detail-container">
      {targetId > 1 ? (
        <span
          onClick={() => setSearchParams({ id: targetId - 1 })}
          className="material-symbols-rounded"
        >
          arrow_back_ios
        </span>
      ) : (
        <span className="block">null</span>
      )}
      <div id="pokemon-detail">
        <img src={targetPokemon.img_url} alt={targetId} />
        <div>{targetPokemon.korean_name}</div>
        <div>타입 : {targetPokemon.types.join(", ")}</div>
        <div>{targetPokemon.description}</div>
        <div id="detail-btn">
          <StBtn
            ref={addRemoveRef}
            onClick={() =>
              isAlreadySelected
                ? removePokemon(targetPokemon)
                : addPokemon(targetPokemon)
            }
          >
            {isAlreadySelected ? "삭제하기" : "추가하기"}
          </StBtn>
          <StBtn ref={backRef} onClick={() => navigate("/pokemon-dex")}>
            뒤로가기
          </StBtn>
        </div>
        <PressSign>
          press enter to{" "}
          {backSign ? "go back" : isAlreadySelected ? "remove" : "select"}
        </PressSign>
      </div>
      {targetId < 151 ? (
        <span
          onClick={() => setSearchParams({ id: targetId + 1 })}
          className="material-symbols-rounded"
        >
          arrow_forward_ios
        </span>
      ) : (
        <span className="block">null</span>
      )}
    </div>
  );
};

export default PokemonDetail;
