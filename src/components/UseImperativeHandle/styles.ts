import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  gap: 15px;

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
    display: block;
    margin: 8px 0;
  }
`;
