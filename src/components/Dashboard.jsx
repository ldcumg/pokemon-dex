import { Link } from "react-router-dom";
import StBtn from "../styles/StBtn";
import { useSelector, useDispatch } from "react-redux";
import { setY } from "../redux/slices/yCoordinateSlice";
import usePokemon from "../hooks/usePokemon";

const Dashboard = ({ topScrollRef }) => {
  const selectedPokemon = useSelector((state) => state.selectPokemon);

  const dispatch = useDispatch();
  const { removePokemon, resetPokemon } = usePokemon();

  return (
    <div ref={topScrollRef} id="my-dashboard">
      <h1>나만의 포켓몬</h1>
      <ul id="my-pokemon-list">
        {selectedPokemon.map((item) => {
          return item === "pokeBall" ? (
            <li key={crypto.randomUUID()}>
              <img
                className="pokeballs"
                src="./../public/img/poke-ball.png"
                alt="pokeBall"
              />
            </li>
          ) : (
            <li className="my-pokemons" key={item.id}>
              <Link
                onClick={() => dispatch(setY(window.scrollY))}
                to={`/pokemon-detail?id=${item.id}`}
              >
                <img src={item.img_url} alt={item.korean_name} />
                <div>{item.korean_name}</div>
                <div>No.{item.id}</div>
              </Link>
              <StBtn onClick={() => removePokemon(item)}>
                삭제
              </StBtn>
            </li>
          );
        })}
      </ul>
      <StBtn onClick={resetPokemon}>초기화</StBtn>
    </div>
  );
};

export default Dashboard;
