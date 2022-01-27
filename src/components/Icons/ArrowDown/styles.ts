import styled from "styled-components";

export const Container = styled.svg`
  position: absolute;
  bottom: 30px;
  width: 24px;
  height: 24px;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;
