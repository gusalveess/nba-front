import styled from "styled-components";

export const Container = styled.div`
  margin-top: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  div {
    border: 1px solid #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 900px;
  }

  button {
    height: 39px;
    width: 120px;
    border-radius: 5px;
    border: 1px solid #fff;
    font-family: "Sunflower", sans-serif;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    background-color: #0d0d14;
    color: #fff;
    margin-bottom: 5px;
  }

  button:hover {
    background-color: #f38225;
  }
`;

export const CardTeam = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #fff;
  width: 100%;
  height: 60px;

  span {
    width: 120px;
  }

  img {
    width: 40px;
    height: 40px;
  }

  h1 {
    font-family: "Sunflower", sans-serif;
    color: #fff;
  }
`;
