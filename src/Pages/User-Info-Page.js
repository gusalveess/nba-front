import Header from "../Components/Header";
import { useEffect, useState } from "react";
import { Container } from "../Styles/user-info-style";
import { useNavigate } from "react-router-dom";
import UserProps from "../Components/User-Info/User-Props";
import UserInfoService from "../Services/User-Info-API";

export default function UserInfo() {
  const name = JSON.parse(JSON.stringify(localStorage.getItem("name")));
  const Navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const promise = UserInfoService.GetMyProfile();

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
