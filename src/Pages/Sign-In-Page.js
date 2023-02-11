import { useState } from "react";
import Header from "../Components/Header";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Container, Box } from "../Styles/authentication-style";
import AuthenticationAPI from "../Services/Authentication-API";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [type, setType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  function Post(e) {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    const promise = AuthenticationAPI.SignInService(body);

    promise.then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.name);
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
          <img src="https://logospng.org/download/nba/logo-nba-2048.png" alt="logo"/>
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
            <button>Entrar</button>
          </form>
          <button onClick={() => Navigate("/sign-up")}>
            Não tem conta ainda? Cadastre-se e Torça já pelo seu time!
          </button>
        </Box>
      </Container>
    </>
  );
}
