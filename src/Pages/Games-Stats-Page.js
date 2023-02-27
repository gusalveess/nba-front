import Header from "../Components/Header";
import React, { useEffect, useState } from "react";
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
import GamesService from "../Services/Games-API";
import { GetToken } from "../Custom-Hooks/Token";

export default function GameStats() {
  const [data, setData] = useState([]);
  const [dataPlayer, setDataPlayer] = useState([]);
  const [comment, setComment] = useState([]);
  const [comments, setComments] = useState("");
  const { gameid } = useParams();
  const token = GetToken();
  const width = window.screen.width;

  function Choose(string) {
    const promise = GamesService.ChooseService(gameid);
    promise.then((response) => {
      const filter = response.data.filter(
        (item) => item.team.nickname === string
      );
      setDataPlayer(filter);
    });
    promise.catch((err) => {
      alert(err);
    });
  }

  function PostComment(e) {
    e.preventDefault();
    const body = {
      comment: comments,
      gameid: parseInt(gameid),
    };
    const promise = GamesService.PostCommentService(body);
    promise.then(() => {
      setTimeout(() => {
        window.location.reload(true);
      }, 1000);
    });
    promise.catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    const promise = GamesService.GetTeamsGame(gameid);
    const commentPromise = GamesService.GetComments(gameid);

    commentPromise.then((response) => {
      setComment(response.data);
    });
    commentPromise.catch((err) => {
      alert(err);
    });

    promise.then((response) => {
      setData(response.data);
      console.log(response.data);
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
                status={item.status.long}
                clock={item.status.clock}
                periods={item.periods.current}
                totalperiods={item.periods.total}
                Choose={Choose}
              />
            ))
          ) : (
            <img
              src="https://media.tenor.com/IOxRkEFDAwMAAAAj/sports-sportsmanias.gif"
              alt="loading"
            />
          )}
          <ContainerData>
            <div>
              <span>{width > 600 ? <p>Posição</p> : <p>Pos</p>}</span>
              <span>
                <p>Jogador</p>
              </span>
              <span>{width > 600 ? <p>Minutos</p> : <p>Min</p>}</span>
              <span>{width > 600 ? <p>Pontos</p> : <p>Pts</p>}</span>
              <span>{width > 600 ? <p>Assistências</p> : <p>Ast</p>}</span>
              <span>{width > 600 ? <p>Rebotes</p> : <p>Reb</p>}</span>
              <span>{width > 600 ? <p>Roubos</p> : <p>Stl</p>}</span>
              <span>{width > 600 ? <p>Bloqueios</p> : <p>Blk</p>}</span>
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
                steals={item.steals}
                blocks={item.blocks}
              />
            ))}
          </ContainerData>
        </ContainerStats>

        <div>
          <ContainerComment>
            {comment.length !== 0 ? (
              comment.map((item, index) => (
                <CommentsProps
                  key={index}
                  picture={item.users.picture}
                  name={item.users.name}
                  comment={item.comment}
                />
              ))
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <h2>Ainda não há comentários? Seja o primeiro a comentar!</h2>
              </div>
            )}
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
                    marginTop: "20px",
                    marginBottom: "30px",
                  }
                : { display: "none" }
            }
          >
            <h3
              style={
                token === null
                  ? { display: "flex", justifyContent: "center" }
                  : { display: "none" }
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
