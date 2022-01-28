import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;

  input {
    background: none;
    outline: none;
    color: inherit;
    border: 2px solid #8400ff;
    padding: 6px 20px;
    margin: 0 auto 12px auto;
    display: block;
    width: 240px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    gap: 30px;
  }

  li {
    display: block;
    background-color: #141414;
  }
`;
