import Header from "../Components/Header";
import {
  Container,
  ContainerData,
  ContainerStats,
  ContainerNicks,
} from "../Styles/games-stats-style";
import { useState } from "react";
import GamesService from "../Services/Games-API";
import TeamStats from "../Components/Standing/Standing-Props";

export default function StandingPage() {
  const [data, setData] = useState([]);
  const width = window.screen.width;

  function Choose(conference) {
    const promise = GamesService.GetStanding(conference);

    promise.then((response) => {
      setData(response.data);
    });
    promise.catch((err) => {
      alert(err);
    });
  }

  return (
    <>
      <Header />

      <Container style={{marginTop: '120px'}}>
        <h4 style={{marginBottom: '60px'}}>Escolha o lado da conferência para ver a Classificação:</h4>
        <ContainerStats>
          <ContainerNicks>
            <button onClick={() => Choose("east")}>Leste</button>
            <span></span>
            <button onClick={() => Choose("west")}>Oeste</button>
          </ContainerNicks>
          <ContainerData style={{marginBottom: '70px'}}>
            <div>
              <span></span>
              <span>
                <p>Equipe</p>
              </span>
              <span></span>
              <span></span>
              <span>{width > 600 ? <p>Vitórias</p> : <p>V</p>}</span>
              <span>{width > 600 ? <p>Derrotas</p> : <p>D</p>}</span>
              <span>{width > 600 ? <p>Jogos Atrás</p> : <p>J-A</p>}</span>
              <span>{width > 600 ? <p>U-10</p> : <p>U10</p>}</span>
            </div>
            {data.map((item, index) => (
              <TeamStats
                key={index}
                Pos={item.conference.rank}
                nickname={item.team.nickname}
                Wins={item.win.total}
                Loss={item.loss.total}
                gamesBehind={item.gamesBehind}
                u10Win={item.win.lastTen}
                u10Loss={item.loss.lastTen}
              />
            ))}
          </ContainerData>
        </ContainerStats>
      </Container>
    </>
  );
}
