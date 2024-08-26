import { Link } from "react-router-dom";
import StBtn from "../styles/StBtn";
import { SwalAlert, SwalConfirm } from "../styles/Swal";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const Dashboard = () => {
  const { scrollRef, selectedPokemon, setSelectedPokemon } =
    useContext(PokemonContext);

  const removePokemon = (target, name) => {
    SwalConfirm(`${name} 을(를) 삭제하시겠습니까?`, "삭제").then((result) => {
      if (result.isConfirmed) {
        setSelectedPokemon(
          selectedPokemon.map((pokemon) => {
            if (pokemon.id === target) return "pokeBall";
            return pokemon;
          })
        );
        const selectedPokemonNum = selectedPokemon.filter(
          (item) => item !== "pokeBall"
        ).length;
        SwalAlert(
          `${name} 을(를) 삭제했습니다.`,
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
          setSelectedPokemon(new Array(6).fill("pokeBall"));
          SwalAlert("포켓몬 목록을 초기화하였습니다.", "success");
        } else {
          SwalAlert("초기화를 취소하였습니다.", "error");
        }
      }
    );
  };

  return (
    <div ref={scrollRef} id="my-dashboard">
      <h1>나만의 포켓몬</h1>
      <ul id="my-pokemon-list">
        {selectedPokemon.sort().map((item) => {
          if (item === "pokeBall") {
            return (
              <li key={crypto.randomUUID()}>
                <img
                  className="pokeballs"
                  src="./../public/img/poke-ball.png"
                  alt="pokeBall"
                />
              </li>
            );
          } else {
            return (
              <li className="my-pokemons" key={item.id}>
                <Link
                  to={`/pokemon-detail?id=${item.id}`}
                  state={{ selectedPokemon }}
                >
                  <img src={item.img_url} alt={item.korean_name} />
                  <div>{item.korean_name}</div>
                  <div>No.{item.id}</div>
                </Link>
                <StBtn onClick={() => removePokemon(item.id, item.korean_name)}>
                  삭제
                </StBtn>
              </li>
            );
          }
        })}
      </ul>
      <StBtn onClick={resetPokemon}>초기화</StBtn>
    </div>
  );
};

export default Dashboard;
