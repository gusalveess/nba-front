import styled from "styled-components";

export const Container = styled.div`
  margin-top: 180px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  div {
    border: 1px solid #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 900px;
    height: 500px;
  }


  h1 {
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    color: #fff;
  }

  h3 {
    font-size: 26px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    color: #fff;
    margin-top: 230px;
  }

  button {
    height: 44px;
    width: 120px;
    border-radius: 5px;
    border: 1px solid #fff;
    font-family: "Sunflower", sans-serif;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    background-color: #0D0D14;
    color: #fff;
    margin-left: 50px;
  }

  button:hover {
    background-color: #F38225;
  }
`;

export const CardPlayer = styled.span`
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
    border-radius: 50%;
  }

  h1 {
    font-family: "Sunflower", sans-serif;
    color: #fff;
  }
`;

export const SearchContainer = styled.span`

input {
    width: 576px;
    height: 47px;
    border: none;
    outline: none;
    font-size: 20px;
    font-family: "Sunflower", sans-serif;
    border-radius: 5px;
    padding-left: 15px;
  }

  input::placeholder {
    font-size: 18px;
    font-family: "Roboto", sans-serif;
  }

  form {
    display: flex;
  }

  span {
    width: 600px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 60px;
  }
`

