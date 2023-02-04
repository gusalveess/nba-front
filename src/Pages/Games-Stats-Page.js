import Header from "../Components/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Container,
  ContainerComment,
  ContainerData,
  ContainerStats,
} from "../Styles/games-stats-style";
import GameStatsProps from "../Components/Game-Stats/Game-Stats-Props";
import PlayerStats from "../Components/Game-Stats/Player-Stats-Props";
import CommentsProps from "../Components/Game-Stats/Game-Comments-Props";

export default function GameStats() {
  const [data, setData] = useState([]);
  const [team, setTeam] = useState("");
  const [dataPlayer, setDataPlayer] = useState([]);
  const [comment, setComment] = useState([]);
  const { gameid } = useParams();

  function Choose(string) {
    setTeam(string);
    const promise = axios.get(`http://localhost:4000/games/${gameid}`);
    promise.then((response) => {
      const filter = response.data.filter(
        (item) => item.team.nickname === string
      );
      setDataPlayer(filter);
      console.log(dataPlayer);
    });
    promise.catch((err) => {
      alert(err);
    });
  }

  useEffect(() => {
    const promise = axios.get(`http://localhost:4000/games/stats/${gameid}`);
    const commentPromise = axios.get(
      `http://localhost:4000/comments/${gameid}`
    );

    commentPromise.then((response) => {
      setComment(response.data);
    });
    commentPromise.catch((err) => {
      alert(err);
    });

    promise.then((response) => {
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
        <ContainerStats>
          {data.length !== 0 ? (
            data.map((item, index) => (
              <GameStatsProps
                key={index}
                id={item.id}
                nicknameHome={item.teams.home.nickname}
                logoHome={item.teams.home.logo}
                homePoints={item.scores.home.points}
                visiPoints={item.scores.visitors.points}
                visiNickname={item.teams.visitors.nickname}
                visiLogo={item.teams.visitors.logo}
                Choose={Choose}
              />
            ))
          ) : (
            <img src="https://media.tenor.com/IOxRkEFDAwMAAAAj/sports-sportsmanias.gif" />
          )}
          <ContainerData>
            <div>
              <span>Pos</span>
              <span>
                <p>Jogador</p>
              </span>
              <span>
                <p>Min</p>
              </span>
              <span>
                <p>Pts</p>
              </span>
              <span>
                <p>Ast</p>
              </span>
              <span>
                <p>Reb</p>
              </span>
            </div>
            {dataPlayer.map((item, index) => (
              <PlayerStats
                key={index}
                pos={item.pos}
                firstName={item.player.firstname}
                lastName={item.player.lastname}
                min={item.min}
                pts={item.points}
                ast={item.assists}
                reb={item.totReb}
              />
            ))}
          </ContainerData>
        </ContainerStats>

        <div>
          <ContainerComment>
            {comment.map((item, index) => (
              <CommentsProps
                key={index}
                picture={item.users.picture}
                name={item.users.name}
                comment={item.comment}
              />
            ))}
          </ContainerComment>
          <span>
            <input type="text" placeholder="Comente sobre o jogo" />
            <button>Enviar</button>
          </span>
        </div>
      </Container>
    </>
  );
}
