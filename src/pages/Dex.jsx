import { useRef, useState } from "react";
import Dashboard from "../components/Dashboard";
import MOCK_DATA from "../mock";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const [myPokemons, setMyPokemons] = useState(new Array(6).fill('pokeBall'));

  const scrollRef = useRef();

  const scrollToTop = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Dashboard
        scrollRef={scrollRef}
        myPokemons={myPokemons}
        setMyPokemons={setMyPokemons}
      />
      <PokemonList
        MOCK_DATA={MOCK_DATA}
        myPokemons={myPokemons}
        setMyPokemons={setMyPokemons}
      />
      <span
        id="top-scroll"
        onClick={scrollToTop}
        className="material-symbols-rounded"
      >
        arrow_upward
      </span>
    </>
  );
};

export default Dex;
