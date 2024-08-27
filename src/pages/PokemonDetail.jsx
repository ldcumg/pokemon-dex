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

  const arrowKeys = {
    left: "ArrowLeft",
    right: "ArrowRight",
    up: "ArrowUp",
    down: "ArrowDown",
  };

  useEffect(() => {
    addRemoveRef.current.focus();
    const handleKeyDown = (event) => {
      switch (event.key) {
        case arrowKeys.left:
          addRemoveRef.current.focus();
          setBackSign(false);
          break;
        case arrowKeys.right:
          backRef.current.focus();
          setBackSign(true);
          break;
        case arrowKeys.up:
          targetId < 151 && setSearchParams({ id: targetId + 1 });
          break;
        case arrowKeys.down:
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
    <article id="detail-container">
      {targetId > 1 ? (
        <nav
          onClick={() => setSearchParams({ id: targetId - 1 })}
          className="material-symbols-rounded"
        >
          arrow_back_ios
        </nav>
      ) : (
        <span className="block">null</span>
      )}
      <section id="pokemon-detail">
        <img src={targetPokemon.img_url} alt={targetId} />
        <h3>{targetPokemon.korean_name}</h3>
        <p>타입 : {targetPokemon.types.join(", ")}</p>
        <p>{targetPokemon.description}</p>
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
      </section>
      {targetId < 151 ? (
        <nav
          onClick={() => setSearchParams({ id: targetId + 1 })}
          className="material-symbols-rounded"
        >
          arrow_forward_ios
        </nav>
      ) : (
        <span className="block">null</span>
      )}
    </article>
  );
};

export default PokemonDetail;
