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
    border-radius: 12px;
    padding: 6px 24px;
  }

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

  div.repos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    gap: 15px;
    div.repo {
      background-color: #282828;
      a {
        display: block;
        font-size: 20px;
        color: #8400ff;
      }

      span {
        font-size: 18px;
        display: block;
      }
    }
  }

  div.count {
    span {
      display: block;
      text-align: center;
      margin: 8px 0;
    }
  }
`;
