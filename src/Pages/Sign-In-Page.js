import { useState } from "react";
import Header from "../Components/Header";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Container, Box } from "../Styles/authentication-style";
import axios from "axios";
import { MutatingDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [type, setType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState("Entrar");
  const Navigate = useNavigate();

  function Post(e) {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    const promise = axios.post("http://localhost:4000/sign-in", body);

    promise.then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.name);
      setLoader(
        <MutatingDots
          height="100"
          width="100"
          color="#fff"
          secondaryColor="#fff"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      );
      Navigate("/");
    });
    promise.catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <Header />
      <Container>
        <Box>
          <img src="https://logospng.org/download/nba/logo-nba-2048.png" />
          <form onSubmit={Post}>
            <input
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type={type}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {type === "password" ? (
              <AiOutlineEye onClick={() => setType("text")} />
            ) : (
              <AiOutlineEyeInvisible onClick={() => setType("password")} />
            )}
            <button>{loader}</button>
          </form>
          <button onClick={() => Navigate('/sign-up')}>
            Não tem conta ainda? Cadastre-se e Torça já pelo seu time!
          </button>
        </Box>
      </Container>
    </>
  );
}
