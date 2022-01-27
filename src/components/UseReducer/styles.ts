import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  button {
    background-color: #8400ff;
    border: none;
    color: inherit;
    padding: 16px 32px;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.35s ease;
    margin-left: 10px;

    &:hover {
      opacity: 0.7;
    }
  }

  div.count {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`;
