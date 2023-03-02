import Header from "../Components/Header";
import { Container, SearchContainer } from "../Styles/players-style";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import PlayerProps from "../Components/Choose/Players-Props";
import UserInfoService from "../Services/User-Info-API";

export default function ChoosePlayer() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [Change, setChange] = useState(false);

  function searchUser(search) {
    if (search.length !== 0) {
      const promise = UserInfoService.GetPlayer(search);

      promise.catch((err) => {
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

      promise.then((res) => {
        setData(res.data);
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
      <ToastContainer />
      <Container>
        <h1>Pesquise o sobrenome do jogador desejado!</h1>
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
