import Header from "../Components/Header";
import { useState } from "react";
import { Container, Center, ContainerGames } from "../Styles/games-date-style";
import GamesDateProps from "../Components/Game-Date/Games-Date-Props";
import GamesService from "../Services/Games-API";

export default function DatePage() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");
  const format = date.split("/").reverse().join("-");

  function GetGames(e) {
    e.preventDefault();
    const promise = GamesService.GamePerDate(format);

    promise.then((response) => {
      setData(response.data);
    });
    promise.catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
      <Header />
      <Container>
        <h1>Procure os jogos pela data:</h1>
        <form onSubmit={GetGames}>
          <input
            type="date"
            min="03-10-2015"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button>Enviar</button>
        </form>

        <Center>
          <ContainerGames>
            {data.length !== 0 ? (
              data.map((item, index) => (
                <GamesDateProps
                  key={index}
                  id={item.id}
                  nicknameHome={item.teams.home.nickname}
                  logoHome={item.teams.home.logo}
                  homePoints={item.scores.home.points}
                  visiPoints={item.scores.visitors.points}
                  visiNickname={item.teams.visitors.nickname}
                  visiLogo={item.teams.visitors.logo}
                  status={item.status.long}
                />
              ))
            ) : (
              <img src="https://media.tenor.com/IOxRkEFDAwMAAAAj/sports-sportsmanias.gif" alt="loading"/>
            )}
          </ContainerGames>
        </Center>
      </Container>
    </>
  );
}
