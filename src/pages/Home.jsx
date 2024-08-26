import { useNavigate } from "react-router-dom";
import StBtn from "../styles/StBtn.jsx";
import { useEffect } from "react";
import { useRef } from "react";
import PressSign from "../styles/PressSign.jsx";
import startLogo from "./../img/logo.png";

const Home = () => {
  const startBtnRef = useRef(null);

  useEffect(() => {
    startBtnRef.current.focus();
  }, []);

  const navigate = useNavigate();
  return (
    <div id="start">
      <img id="start-logo" src={startLogo} alt="pokemon-logo" />
      <StBtn
        ref={startBtnRef}
        onClick={() => {
          navigate("/pokemon-dex");
        }}
      >
        시작하기
      </StBtn>
      <PressSign $startSign={true}>press enter to start</PressSign>
    </div>
  );
};

export default Home;
