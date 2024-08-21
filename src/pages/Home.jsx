import { useNavigate } from "react-router-dom";
import StBtn from "../styles/StBtn.jsx";
import { useEffect } from "react";
import { useRef } from "react";

const Home = () => {
  const startRef = useRef(null);
  useEffect(() => {
    startRef.current.focus();
  }, []);

  const navigate = useNavigate();
  return (
    <div id="start">
      <img id="start-logo" src="./../public/img/logo.png" alt="pokemon-logo" />
      <StBtn
        ref={startRef}
        onClick={() => {
          navigate("/pokemon-dex");
        }}
      >
        시작하기
      </StBtn>
      <div className="press-sign">press enter to start</div>
    </div>
  );
};

export default Home;
