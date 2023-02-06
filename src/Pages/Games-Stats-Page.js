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
  const [comments, setComments] = useState("");
  const [change, setChange] = useState(false);
  const { gameid } = useParams();
  const getting = localStorage.getItem("token");
  const stringfy = JSON.stringify(getting);
  const token = JSON.parse(stringfy);

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

  function PostComment(e) {
    e.preventDefault();
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const body = {
      comment: comments,
      gameid: parseInt(gameid),
    };
    const promise = axios.post(
      "http://localhost:4000/comments/create",
      body,
      config
    );
    promise.then(() => {
      setTimeout(() => {
        window.location.reload(true)
      }, 1000);
    });
    promise.catch((err) => {
      console.log(err);
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
            <form
              style={token === null ? { display: "none" } : { display: "flex" }}
              onSubmit={PostComment}
            >
              <input
                style={
                  token === null ? { display: "none" } : { display: "flex" }
                }
                type="text"
                placeholder="Comente sobre o jogo"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
              <button
                style={
                  token === null ? { display: "none" } : { display: "block" }
                }
              >
                Enviar
              </button>
            </form>
          </span>
          <span
            style={
              token === null
                ? {
                    display: "block",
                    border: "1px solid #fff",
                    marginTop: "20px",
                  }
                : { display: "none" }
            }
          >
            <h3
              style={
                token === null ? { display: "block" } : { display: "none" }
              }
            >
              Entre em sua conta para poder comentar o jogo do seu time!
            </h3>
          </span>
        </div>
      </Container>
    </>
  );
}
