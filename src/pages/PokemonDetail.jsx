import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../data/mock.js";
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

  const { current } = useLocation().state.connect;

  const backRef = useRef(null);
  useEffect(() => {
    backRef.current.focus();
  }, []);

  return (
    <article id="detail-container">
      <section id="pokemon-detail">
        <img src={targetPokemon.img_url} alt={targetPokemon.id} />
        <h3>{targetPokemon.korean_name}</h3>
        <p>타입 : {targetPokemon.types.join(", ")}</p>
        <p>{targetPokemon.description}</p>
        <StBtn
          ref={backRef}
          onClick={() =>
            navigate("/pokemon-dex", {
              state: { current },
            })
          }
        >
          뒤로 가기
        </StBtn>
        <p className="press-sign">press enter to go back</p>
      </section>
    </article>
  );
};

export default PokemonDetail;
