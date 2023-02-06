import axios from "axios";
import { CardPlayer } from "../../Styles/players-style";
import { useNavigate } from "react-router-dom";

export default function PlayerProps(props) {
  const Navigate = useNavigate();
  const TeamName = JSON.parse(JSON.stringify(localStorage.getItem("TeamName")));
  const TeamPic = JSON.parse(JSON.stringify(localStorage.getItem("TeamPic")));
  const TeamId = JSON.parse(JSON.stringify(localStorage.getItem("id")));
  const token = JSON.parse(JSON.stringify(localStorage.getItem("token")));

  function Next() {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const body = {
      teamid: parseInt(TeamId),
      teamname: TeamName,
      logoteam: TeamPic,
      playerid: parseInt(props.id),
      playername: props.name,
      playerpicture: props.picture,
    };
    const promise = axios.post(
      "http://localhost:4000/user/create",
      body,
      config
    );

    promise.catch((err) => {
      console.log(err);
    });

    promise.then((res) => {
      alert("Funcionou!");
      Navigate("/user/my");
    });
  }

  return (
    <>
      <CardPlayer>
        <span>
          <img src={props.picture} />
        </span>
        <span><h1>{props.position}</h1></span>
        <span>
          <h1>{props.name}</h1>
        </span>
        <button onClick={() => Next()}>Finalizar Escolha</button>
      </CardPlayer>
    </>
  );
}
