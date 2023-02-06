import { useEffect, useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import { Container } from "../Styles/teams-style";
import TeamsProps from "../Components/Choose/Teams-Props";

export default function TeamsChoose() {
  const [data, setData] = useState([]);
  const getting = localStorage.getItem("token");
  const stringfy = JSON.stringify(getting);
  const token = JSON.parse(stringfy);

  useEffect(() => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const promise = axios.get("http://localhost:4000/choose/teams", config);

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
