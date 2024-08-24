import styled from "styled-components";

const PressSign = styled.div`
  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }

  font-family: "CookieRun-Regular";
  color: white;
  font-style: italic;
  animation: blink-effect 1s step-end infinite;
  font-size: ${({ $startSign }) => ($startSign ? "26px" : "22px")};
  margin-top: ${({ $startSign }) => ($startSign ? "24px" : "8px")};
`;

export default PressSign;
