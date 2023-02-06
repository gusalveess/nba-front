import Header from "../Components/Header";
import React, { useEffect, useState } from "react";
import { Center, Container, ContainerGames } from "../Styles/games-live-style";
import GamesLiveProps from "../Components/Games-Live/Games-Live-Props";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const promise = axios.get("http://localhost:4000/games/live");

    promise.then((response) => {
        console.log(response.data)
        setData(response.data);
    });
    promise.catch((err) => {
      alert(err);
    });
  }, []);

  return (
    <>
      <Header />
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
            <img src="https://media.tenor.com/IOxRkEFDAwMAAAAj/sports-sportsmanias.gif" />
          )}
        </ContainerGames>
      </Center>
    </>
  );
}
