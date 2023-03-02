import { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Container } from "../Styles/teams-style";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
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
  }, []);

  return (
    <>
      <Header />
      <ToastContainer />
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
