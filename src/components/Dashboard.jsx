import { Link } from "react-router-dom";
import StBtn from "../styles/StBtn";
import { useSelector, useDispatch } from "react-redux";
import { setY } from "../redux/slices/yCoordinateSlice";
import usePokemon from "../hooks/usePokemon";
import pokeBall from "./../img/poke-ball.png";
import { STR_POKE_BALL } from "../redux/slices/selectPokemonSlice";

const Dashboard = ({ topScrollRef }) => {
  const myPokemons = useSelector((state) => state.selectPokemon);

  const dispatch = useDispatch();
  const { removePokemon, resetPokemon } = usePokemon();

  return (
    <div ref={topScrollRef} id="my-dashboard">
      <h1>나만의 포켓몬</h1>
      <ul id="my-pokemon-list">
        {myPokemons.map((item) => {
          return item.korean_name === STR_POKE_BALL.korean_name ? (
            <li key={item.id}>
              <img className="pokeballs" src={pokeBall} alt="pokeBall" />
            </li>
          ) : (
            <li className="my-pokemons" key={item.id}>
              <Link
                onClick={() => dispatch(setY(window.scrollY))}
                to={`/pokemon-detail?id=${item.id}`}
              >
                <img src={item.img_url} alt={item.korean_name} />
                <h3>{item.korean_name}</h3>
                <p>No.{item.id}</p>
              </Link>
              <StBtn onClick={() => removePokemon(item)}>삭제</StBtn>
            </li>
          );
        })}
      </ul>
      <StBtn onClick={resetPokemon}>초기화</StBtn>
    </div>
  );
};

export default Dashboard;
