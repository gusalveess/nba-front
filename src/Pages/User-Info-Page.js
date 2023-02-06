import Header from "../Components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "../Styles/user-info-style";
import { useNavigate } from "react-router-dom";
import UserProps from "../Components/User-Info/User-Props";

export default function UserInfo() {
  const getting = localStorage.getItem("token");
  const stringfy = JSON.stringify(getting);
  const token = JSON.parse(stringfy);
  const get = localStorage.getItem("name");
  const stringify = JSON.stringify(get);
  const name = JSON.parse(stringify);
  const Navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const promise = axios.get("http://localhost:4000/user/my", config);

    promise.then((response) => {
      console.log(response.data);
      setData(response.data);
    });
    promise.catch((err) => {
      alert(err);
    });
  }, []);

  return (
    <>
      <Header />
      {data.length === 0 ? (
        <Container>
          <div>
            <h1>Olá {name}, ainda não escolheu suas preferências?</h1>
            <button onClick={() => Navigate("/choose/teams")}>
              Começar a escolher!
            </button>
          </div>
        </Container>
      ) : (
        <Container>
          <div>
            <h1>Olá {name}! Aqui estão suas preferências:</h1>
            {data.map((item, index) => (
              <UserProps
                key={index}
                TeamImage={item.logoteam}
                TeamName={item.teamname}
                PlayerImage={item.playerpicture}
                PlayerName={item.playername}
              />
            ))}
          </div>
        </Container>
      )}
    </>
  );
}
