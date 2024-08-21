import styled from "styled-components";

const StBtn = styled.button`
  width: ${({ children }) => {
    switch (children) {
      case "추가":
        return "60px";
      case "삭제":
        return "55px";
      case "뒤로 가기":
        return "120px";
      default:
        return "200px";
    }
  }};

  height: ${({ children }) => {
    switch (children) {
      case "추가":
        return "25px";
      case "삭제":
        return "22px";
      case "뒤로 가기":
        return "36px";
      default:
        return "50px";
    }
  }};

  background-color: ${({ children }) => {
    switch (children) {
      case "추가":
        return "var(--green-color)";
      case "뒤로 가기":
        return "var(--gray-color)";
      default:
        return "var(--red-color)";
    }
  }};

  font-size: ${({ children }) => {
    switch (children) {
      case "추가":
        return "14px";
      case "삭제":
        return "12px";
      case "뒤로 가기":
        return "18px";
      default:
        return "30px";
    }
  }};

  color: white;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: ${({ children }) => {
      switch (children) {
        case "추가":
          return "var(--dark-green-color)";
        case "뒤로 가기":
          return "var(--dark-gray-color)";
        default:
          return "var(--dark-red-color)";
      }
    }};
    box-shadow: 0px 0px 0px 1px gray;
  }
`;

export default StBtn;
