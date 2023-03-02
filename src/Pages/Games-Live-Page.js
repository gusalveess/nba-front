import Header from "../Components/Header";
import React, { useEffect, useState } from "react";
import { Center, Container, ContainerGames } from "../Styles/games-live-style";
import GamesLiveProps from "../Components/Games-Live/Games-Live-Props";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import GamesService from "../Services/Games-API";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const promise = GamesService.GamesLiveService();

    promise.then((response) => {
      setData(response.data);
    });
    promise.catch(() => {
      toast.error("Erro de requisição, aguarde um minuto! 🏀", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    });
  }, []);

  return (
    <>
      <Header />
      <ToastContainer />
      <Container>
        <h1>Jogos ao vivo:</h1>
      </Container>
      <Center>
        <ContainerGames>
          {data.length !== 0 ? (
            data.map((item, index) => (
              <GamesLiveProps
                key={index}
                id={item.id}
                nicknameHome={item.teams.home.nickname}
                logoHome={item.teams.home.logo}
                homePoints={item.scores.home.points}
                visiPoints={item.scores.visitors.points}
                visiNickname={item.teams.visitors.nickname}
                visiLogo={item.teams.visitors.logo}
              />
            ))
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1>Não há jogos ao vivo</h1>
              <img
                src="https://media.tenor.com/IOxRkEFDAwMAAAAj/sports-sportsmanias.gif"
                alt="loading"
              />
            </div>
          )}
        </ContainerGames>
      </Center>
    </>
  );
}
