import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  gap: 12px;
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

    &:hover {
      opacity: 0.7;
    }
  }

  input {
    background: none;
    outline: none;
    color: inherit;
    border: 2px solid #8400ff;
    padding: 6px 24px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 22vw;
    }
  }
`;
