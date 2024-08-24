import styled from "styled-components";

const StBtn = styled.button`
  font-family: "CookieRun-Regular";
  color: white;
  border: none;
  border-radius: 10px;
  padding: 2px;
  margin: 0 3px;
  letter-spacing: ${({ children }) => (children === "초기화" ? "10px" : "2px")};

  width: ${({ children }) => {
    switch (children) {
      case "추가":
        return "60px";
      case "삭제":
        return "55px";
      case "시작하기":
        return "200px";
      case "초기화":
        return "230px";
      default:
        return "100px";
    }
  }};

  height: ${({ children }) => {
    switch (children) {
      case "추가":
        return "25px";
      case "삭제":
        return "22px";
      case "시작하기":
        return "50px";
      case "초기화":
        return "55px";
      default:
        return "40px";
    }
  }};

  background-color: ${({ $active, children }) => {
    if ($active) return "var(--blue-color)";
    switch (children) {
      case "추가":
        return "var(--green-color)";
      case "추가하기":
        return "var(--green-color)";
      case "뒤로가기":
        return "var(--gray-color)";
      default:
        return "var(--red-color)";
    }
  }};

  font-size: ${({ children }) => {
    switch (children) {
      case "추가":
        return "13px";
      case "삭제":
        return "11px";
      case "시작하기":
        return "30px";
      case "초기화":
        return "31px";
      default:
        return "15px";
    }
  }};

  &:hover {
    background-color: ${({ $active, children }) => {
      if ($active) return "var(--dark-blue-color)";
      switch (children) {
        case "추가":
          return "var(--dark-green-color)";
        case "추가하기":
          return "var(--dark-green-color)";
        case "뒤로가기":
          return "var(--dark-gray-color)";
        default:
          return "var(--dark-red-color)";
      }
    }};
    box-shadow: 0px 0px 0px 1px gray;
  }
`;

export default StBtn;
