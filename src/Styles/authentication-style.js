import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  margin-top: 180px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  img {
    width: 250px;
    height: 250px;
    margin-bottom: 30px;
  }

  h1 {
    font-size: 66px;
    font-weight: 700;
    font-style: italic;
    font-family: "Roboto", sans-serif;
    color: #0e499d;
  }

  input {
    width: 300px;
    height: 57px;
    margin-top: 30px;
    outline: none;
    border: none;
    font-size: 24px;
    font-family: "Roboto", sans-serif;
    padding-left: 17px;
    border-radius: 5px;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.6);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.6);
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
    margin-bottom: 5px;
  }

  button:hover {
    background-color: #F38225;
  }

  input::placeholder {
    font-size: 24px;
    font-family: "Roboto", sans-serif;
  }

  p {
    font-size: 20px;
    margin-top: 20px;
    font-family: "Roboto", sans-serif;
    color: #fff;
  }

  p:hover {
    color: #F38225;
    cursor: pointer;
  }

  svg {
    position: absolute;
    top: 604px;
    left: 1060px;
    font-size: 30px;
    cursor: pointer;
  }

  h2 {
    margin-top: 20px;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    color: red;
  }
`;
