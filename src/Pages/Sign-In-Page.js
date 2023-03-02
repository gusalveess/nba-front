import { useState } from "react";
import Header from "../Components/Header";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Container, Box } from "../Styles/sign-in-style";
import AuthenticationAPI from "../Services/Authentication-API";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [type, setType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false)
  const Navigate = useNavigate();

  function Post(e) {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    const promise = AuthenticationAPI.SignInService(body);

    promise.then((res) => {
      setDisable(true)
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.name);
      toast(`🏀 Seja Bem vindo, ${res.data.name}!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        style: { textAlign: "center" },
        progressStyle: { backgroundColor: "#fc924c" },
      });
      setTimeout(() => {
        Navigate('/')
        window.location.reload(true)
      }, 2000);
    });
    promise.catch((error) => {
      setDisable(false)
      toast.error('Erro ao se logar, tente novamente!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      console.log(error)
    });
  }

  return (
    <>
      <Header />
      <Container>
      <ToastContainer />
        <Box>
          <img
            src="https://logospng.org/download/nba/logo-nba-2048.png"
            alt="logo"
          />
          <form onSubmit={Post}>
            <input
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={disable}
            />
            <input
              type={type}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={disable}
            />
            {type === "password" ? (
              <AiOutlineEye onClick={() => setType("text")} />
            ) : (
              <AiOutlineEyeInvisible onClick={() => setType("password")} />
            )}
            <button>Entrar</button>
          </form>
          <button disabled={disable} onClick={() => Navigate("/sign-up")}>
            Não tem conta ainda? Cadastre-se e Torça já pelo seu time!
          </button>
        </Box>
      </Container>
    </>
  );
}
