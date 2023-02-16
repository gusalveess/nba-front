import { CardPlayer } from "../../Styles/players-style";
import { useNavigate } from "react-router-dom";
import UserInfoService from "../../Services/User-Info-API";

export default function PlayerProps(props) {
  const Navigate = useNavigate();
  const TeamName = JSON.parse(JSON.stringify(localStorage.getItem("TeamName")));
  const TeamPic = JSON.parse(JSON.stringify(localStorage.getItem("TeamPic")));
  const TeamId = JSON.parse(JSON.stringify(localStorage.getItem("id")));
  const width = window.screen.width;

  function Next() {
    const body = {
      teamid: parseInt(TeamId),
      teamname: TeamName,
      logoteam: TeamPic,
      playerid: parseInt(props.id),
      playername: props.name,
      playerpicture: props.picture,
    };
    const promise = UserInfoService.CreateInfo(body);
    promise.catch((err) => {
      console.log(err);
    });

    promise.then(() => {
      Navigate("/user/my");
    });
  }

  return (
    <>
      <CardPlayer>
        <span>
          <img src={props.picture} />
        </span>
        <span style={width > 600 ? { display: "flex" } : { display: "none" }}>
          <h4>{props.position}</h4>
        </span>
        <span>
          <h2>{props.name}</h2>
        </span>
        <button onClick={() => Next()}>Finalizar Escolha</button>
      </CardPlayer>
    </>
  );
}
