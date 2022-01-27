import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  gap: 12px;

  div.search {
    display: flex;
  }

  button {
    background-color: #8400ff;
    border: none;
    color: inherit;
    padding: 16px 32px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
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
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    padding: 6px 24px;
  }

  div.user {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    a {
      text-align: center;
    }

    div.avatar {
      width: 256px;
      height: 256px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
