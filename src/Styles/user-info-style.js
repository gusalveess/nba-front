import styled from "styled-components";

export const Container = styled.div`
  margin-top: 180px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    border: 1px solid #fff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 900px;
  }

    button {
    height: 49px;
    width: 320px;
    margin-top: 20px;
    border-radius: 5px;
    border: 1px solid #fff;
    font-family: "Sunflower", sans-serif;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    background-color: #0D0D14;
    color: #fff;
    margin-bottom: 45px;
  }

  button:hover {
    background-color: #F38225;
  }

  h1 {
    font-size: 26px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    color: #fff;
    padding-left: 16px;
    padding-top: 40px;
    margin-bottom: 80px;
  }

  img {
    height: 90px;
    width: 90px;
    border: 1px solid #fff;
    border-radius: 50%;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  p {
    font-size: 36px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    color: #fff;
    margin-bottom: 20px;
  }
`;
