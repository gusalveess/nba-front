import { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Container } from "../Styles/teams-style";
import TeamsProps from "../Components/Choose/Teams-Props";
import UserInfoService from "../Services/User-Info-API";

export default function TeamsChoose() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const promise = UserInfoService.GetTeams();

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
        <div>
          {data.map((item, index) => (
            <TeamsProps
              key={index}
              id={item.id}
              logo={item.logo}
              name={item.name}
              nickname={item.nickname}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
