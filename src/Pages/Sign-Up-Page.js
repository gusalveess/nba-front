import { useState } from "react";
import Header from "../Components/Header";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Container, Box } from "../Styles/sign-up-style";
import { useNavigate } from "react-router-dom";
import AuthenticationAPI from "../Services/Authentication-API.js";

export default function SignUpPage() {
  const [type, setType] = useState("password");
  const [typeTwo, setTypeTwo] = useState("password");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [confirm, setConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("");
  const [disable, setDisable] = useState(false);
  const Navigate = useNavigate();

  function Post(e) {
    e.preventDefault();
    const body = {
      name: name,
      email: email,
      password: password,
      picture: picture,
    };
    const promise = AuthenticationAPI.SignUpService(body);

    promise.then(() => {
      setDisable(true);
      toast(`Usuário Cadastrado com sucesso, agora só se logar! 🏀`, {
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
        Navigate("/sign-in");
      }, 2500);
    });
    promise.catch((error) => {
      setDisable(true);
      toast.error("Erro ao se Cadastrar! 🏀", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log(error);
    });
  }

  return (
    <>
      <Header />
      <ToastContainer />
      <Container>
        <Box>
          <img
            src="https://logospng.org/download/nba/logo-nba-2048.png"
            alt="logo"
          />
          <form onSubmit={Post}>
            <input
              type="text"
              placeholder="Nome do usuário"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={disable}
            />

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
              style={
                password !== confirm
                  ? { border: "2px solid red" }
                  : { border: "none" }
              }
            />
            {type === "password" ? (
              <AiOutlineEye
                style={{ position: "absolute", top: "693px", left: "1060px" }}
                onClick={() => setType("text")}
              />
            ) : (
              <AiOutlineEyeInvisible
                style={{ position: "absolute", top: "693px", left: "1060px" }}
                onClick={() => setType("password")}
              />
            )}
            <input
              type={typeTwo}
              placeholder="Confirme a senha"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              disabled={disable}
              style={
                password !== confirm
                  ? { border: "2px solid red" }
                  : { border: "none" }
              }
            />
            {typeTwo === "password" ? (
              <AiOutlineEye
                style={{ position: "absolute", top: "784px", left: "1060px" }}
                onClick={() => setTypeTwo("text")}
              />
            ) : (
              <AiOutlineEyeInvisible
                style={{ position: "absolute", top: "784px", left: "1060px" }}
                onClick={() => setTypeTwo("password")}
              />
            )}
            <input
              type="text"
              placeholder="Link da sua foto"
              value={picture}
              onChange={(e) => setPicture(e.target.value)}
              required
              disabled={disable}
            />
            <h2
              style={
                password !== confirm
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              As senhas estão diferentes!
            </h2>
            <button disabled={disable}>Cadastrar-se</button>
          </form>
          <button onClick={() => Navigate("/sign-in")}>
            Já tem conta? Logue-se agora
          </button>
        </Box>
      </Container>
    </>
  );
}
