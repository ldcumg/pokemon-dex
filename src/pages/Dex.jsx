import { useRef } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const topScrollRef = useRef();

  const scrollToTop = () => {
    topScrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Dashboard topScrollRef={topScrollRef} />
      <PokemonList />
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
