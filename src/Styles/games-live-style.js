import styled from "styled-components";

export const Container = styled.div`
  margin-top: 160px;
  margin-bottom: 50px;

  h1 {
    font-family: "Sunflower", sans-serif;
    color: #fff;
    font-weight: 600;
    font-size: 36px;
    padding-left: 60px;
    padding-top: 20px;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 30px;
      padding-left: 14px;
    }
}	
`;

export const Center = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const ContainerGames = styled.div`
  border: 1px solid #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    width: 105%;
    border-radius: 0px;
	}
`;

export const CardGame = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  height: 80px;
  width: 70%;
  margin-bottom: 15px;

  img {
    height: 50px;
    width: 50px;
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

  h3 {
    font-family: "Sunflower", sans-serif;
    color: #fff;
    font-weight: 600;
    font-size: 26px;
  }

  div {
    border: 1px solid #fff;
    margin-left: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60px;
    height: 40px;
    border-radius: 10px;
  }

  span {
    width: 80px;
  }

  @media (max-width: 600px) {

    width: 50%;
    justify-content: space-evenly;

    p {
      display: none;
    }

    div {
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      height: 45px;
      width: 45px;
    }

    h3 {
      margin-left: 15px;
      font-size: 20px;
    }
  }	
`

export const Flex = styled.div`

display: flex;
justify-content: space-around;
width: 90%;

span {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  button {
    height: 60px;
    width: 130px;
    border-radius: 5px;
    border: 1px solid #fff;
    background-color:  #12121D;
    font-family: "Sunflower", sans-serif;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    transition: all ease-in-out 0.3s;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  button:hover {
    background-color: #F38225;
    border: none;
  }

  svg {
    height: 30px;
    width: 30px;
  }

  @media (max-width: 600px) {

  width: 80%;
  margin-left: 67px;

   button {
    width: 50px;
    height: 30px;
    margin-left: 60px;
   }
}

`
