import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 210px;

  input {
    width: 876px;
    height: 47px;
    margin-bottom: 30px;
    border: none;
    outline: none;
    padding-left: 20px;
    font-size: 20px;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.6);
    box-shadow: 10px 0px 100px 5px rgba(0, 0, 0, 0.6);
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
    background-color: #0d0d14;
    color: #fff;
  }

  button:hover {
    background-color: #f38225;
  }

  h3 {
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #fff;
  }

  h4 {
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #fff;
  }

  @media (max-width: 600px) {
    margin-top: 160px;

    h3 {
      font-size: 13.5px;
    }

    input {
      width: 100%;
      padding-left: 10px;
      margin-bottom: 5px;
    }
    form {
      width: 100%;
    }

    h4 {
      font-size: 15px;
    }
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
  background-color: transparent;
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 99.9%;
  height: 400px;
  overflow-y: scroll;

  div {
    width: 99%;
    display: flex;
    align-items: center;
  }

  img {
    height: 40px;
    width: 50px;
    border-radius: 40%;
    padding-bottom: 5px;
    padding-left: 10px;
  }

  span {
    background-color: #f0f2f5;
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
    padding-left: 10px;
  }

  h2 {
    font-family: "Sunflower", sans-serif;
    font-weight: 500;
    font-size: 18px;
    padding-left: 10px;
    color: #fff;
    padding-top: 150px;
  }

  p {
    font-family: "Sunflower", sans-serif;
    font-weight: 200;
    font-size: 16px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 25px;
    padding-bottom: 10px;
  }

  @media (max-width: 600px) {
    width: 99.5%;
    border-radius: 0px;

    p {
      padding-right: 10px;
    }

    img {
      max-width: 50px;
      box-sizing: border-box;
      width: auto;
    }
  }
`;

export const CardGame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 80px;
    width: 90px;
  }

  p {
    font-family: "Sunflower", sans-serif;
    color: #fff;
    font-weight: 600;
    font-size: 26px;
    margin-top: 10px;
  }

  h5 {
    font-family: "Sunflower", sans-serif;
    color: #fff;
    font-weight: 600;
    font-size: 26px;
  }
  h2 {
    font-family: "Sunflower", sans-serif;
    color: #fff;
    font-weight: 600;
    font-size: 26px;
    padding-left: 5px;
    padding-right: 5px;
  }

  div {
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 40px;
    border-radius: 5px;
  }

  span {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    img {
      width: 45px;
      height: 40px;
    }

    p {
      font-size: 15px;
      margin-top: 5px;
    }

    div {
      width: 40px;
    }

    h2 {
      font-size: 15px;
    }

    h5 {
      font-size: 15px;
    }

    span {
      margin-left: 20px;
    }
  }

  @media (min-width: 700px) {
  span {
    margin-left: 25px;
  }
}
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

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
    background-color: #f38225;
  }

  @media (max-width: 600px) {
    width: 300px;

    button {
      width: 100px;
      font-size: 14px;
    }
  }
`;

export const ContainerData = styled.div`
  width: 100%;

  div {
    display: flex;
    justify-content: space-around;
    border: 1px solid #fff;
    width: 100%;
    font-family: "Sunflower", sans-serif;
    color: #fff;
    height: 35px;
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
    width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 25px;
    height: 25px;
  }
  @media (max-width: 600px) {
    width: 385px;
    p {
      font-size: 13px;
    }
    h1 {
      font-size: 11px;
    }
    img {
      padding-right: 5px;
    }
    span {
      width: 47px;
    }
  }
`;

export const ContainerTime = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #fff;
  border-width: 0px 0px 1px 0px;

  div {
    width: 30%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 14px;
  }

  h5 {
    font-family: "Sunflower", sans-serif;
    color: #fff;
    font-weight: 600;
    font-size: 26px;
  }

  h6 {
    font-family: "Sunflower", sans-serif;
    color: #ff0046;
    padding-left: 10px;
    font-weight: 600;
    font-size: 25px;
    -webkit-animation: scale-up-center 1.5s cubic-bezier(0.645, 0.045, 0.355, 1)
      infinite alternate-reverse both;
    animation: scale-up-center 1.5s cubic-bezier(0.645, 0.045, 0.355, 1)
      infinite alternate-reverse both;
  }

  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @media (max-width: 600px) {
    height: 40px;

    h5 {
      font-size: 15px;
    }
    h6 {
      font-size: 15px;
    }
  }
`;
