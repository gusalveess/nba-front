import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 180px;

  input {
    width: 576px;
    height: 47px;
    margin-bottom: 30px;
    border: none;
    outline: none;
    padding-left: 20px;
    font-size: 20px;
    font-family: "Sunflower", sans-serif;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input::placeholder {
    font-size: 20px;
    font-family: "Sunflower", sans-serif;
    color: gray;
  }

  button {
    height: 49px;
    width: 104px;
    border: 1px solid #fff;
    font-family: "Sunflower", sans-serif;
    font-weight: 600;
    outline: none;
    background-color: #0D0D14;
    color: #fff;
  }

  button:hover {
    background-color: #F38225;
  }

  h3 {
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #fff;
  }
`;

export const ContainerStats = styled.div`
  border-radius: 20px 20px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-height: 650px;
`;

export const ContainerComment = styled.div`
  border: 1px solid #fff;
  border-radius: 20px 20px 0px 0px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 700px;
  height: 700px;
  overflow-y: scroll;

  div {
    width: 99%;
    display: flex;
    align-items: center;
  }

  img {
    height: 40px;
    width: 50px;
    border-radius: 50%;
    padding-bottom: 5px;
    padding-left: 10px;
  }

  span {
    background-color: #F0F2F5;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;
    display: flex;
    border-radius: 5px;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  h1 {
    font-family: "Sunflower", sans-serif;
    font-weight: 600;
    font-size: 16px;
    padding-left: 15px;
    padding-top: 5px;
  }

  p {
    font-family: "Sunflower", sans-serif;
    font-weight: 200;
    font-size: 16px;
    padding-top: 15px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
  }
`;

export const CardGame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 750px;
  margin-bottom: 15px;

  img {
    height: 80px;
    width: 80px;
    padding-left: 10px;
  }


  p {
    font-family: "Sunflower", sans-serif;
    color: #fff;
    font-weight: 600;
    font-size: 26px;
    padding-left: 15px;
  }

  h2 {
    font-family: "Sunflower", sans-serif;
    color: #fff;
    font-weight: 600;
    font-size: 26px;
  }

  div {
    border: 1px solid #fff;
    margin-left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 40px;
    border-radius: 10px;
  }
`;

export const Flex = styled.div`

display: flex;
justify-content: center;
  `

  export const ContainerNicks = styled.div`

  display: flex;
  justify-content: space-around;
  width: 600px;
  margin-top: 50px;

  span {
    border: 1px solid #fff;
    width: 0px;
    height: 43px;
    margin-bottom: 70px;
    }

  button {
    height: 49px;
    width: 165px;
    border-radius: 5px;
    outline: none;
    background-color: transparent;
    font-family: "Sunflower", sans-serif;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
  }

  button:hover {
    background-color: #F38225;
  }
  
  `

export const ContainerData = styled.div`

  width: 100%;

  div {
    display: flex;
    justify-content: space-around;
    border: 1px solid #fff;
    width: 100%;
    font-family: "Sunflower", sans-serif;
    color: #fff;
  }

  h1 {
    padding-top: 5px;
    padding-bottom: 5px;
    color: #fff;
  }

  p {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  span {
    width: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`