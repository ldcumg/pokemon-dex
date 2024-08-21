import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock.js";
import StBtn from "../styles/StBtn.jsx";
import { useRef } from "react";
import { useEffect } from "react";

const PokemonDetail = () => {
  const [searchParams] = useSearchParams();
  const targetId = searchParams.get("id");

  const targetPokemon = MOCK_DATA.find(
    (pokemon) => pokemon.id === Number(targetId)
  );

  const navigate = useNavigate();
  const myPokemons = useLocation().state.myPokemons;
  const scrollY = useLocation().state.scrollY;

  const backRef = useRef(null);
  useEffect(() => {
    backRef.current.focus();
  }, []);

  return (
    <div id="detail-container">
      <div id="pokemon-detail">
        <img src={targetPokemon.img_url} alt={targetPokemon.id} />
        <div>{targetPokemon.korean_name}</div>
        <div>타입 : {targetPokemon.types.join(", ")}</div>
        <div>{targetPokemon.description}</div>
        <StBtn
          ref={backRef}
          onClick={() =>
            navigate("/pokemon-dex", { state: { myPokemons, scrollY } })
          }
        >
          뒤로 가기
        </StBtn>
        <div className="press-sign">press enter to go back</div>
      </div>
    </div>
  );
};

export default PokemonDetail;
