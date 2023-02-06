import Header from "../Components/Header";
import { Container, SearchContainer } from "../Styles/players-style";
import { useState } from "react";
import axios from "axios";
import PlayerProps from "../Components/Choose/Players-Props";

export default function ChoosePlayer() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [Change, setChange] = useState(false);
  const token = JSON.parse(JSON.stringify(localStorage.getItem("token")));

  function searchUser(search) {
    if (search.length >= 3) {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const promise = axios.get(
        `http://localhost:4000/choose/${search}`,
        config
      );

      promise.catch((err) => {
        console.log(err);
      });

      promise.then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    }
  }

  function HandleSubmit(e) {
    e.preventDefault();
    searchUser(search);
    setChange(!Change);
  }

  return (
    <>
      <Header />
      <Container>
        <SearchContainer>
          <span>
            <form onSubmit={HandleSubmit}>
              <input
                type="text"
                placeholder="Pesquise o sobrenome do seu jogador preferido!"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button>Pesquisar</button>
            </form>
          </span>
        </SearchContainer>
        <div>
          {data.length > 0 ? (
            data.map((item, index) => (
              <PlayerProps
                key={index}
                id={item.PlayerID}
                position={item.Position}
                name={item.FanDuelName}
                picture={item.PhotoUrl}
              />
            ))
          ) : (
            <h3>Escolha seu jogador favorito!</h3>
          )}
        </div>
      </Container>
    </>
  );
}
