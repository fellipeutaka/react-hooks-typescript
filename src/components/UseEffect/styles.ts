import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  gap: 15px;

  input {
    background: none;
    outline: none;
    color: inherit;
    border: 2px solid #8400ff;
    padding: 6px 24px;
  }
`;
