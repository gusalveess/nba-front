import {
  CardGame,
  Flex,
  ContainerNicks,
  ContainerTime,
} from "../../Styles/games-stats-style";
import { Logo } from "../../Assets/Logos";

export default function GameStatsProps(props) {
  const logoHomeFilter = Logo.filter(
    (item) => item.nick === props.nicknameHome
  );
  const logoVisFilter = Logo.filter((item) => item.nick === props.visiNickname);
  const logoHome = logoHomeFilter.map((item) => item.logo);
  const logoVisitors = logoVisFilter.map((item) => item.logo);

  return (
    <>
      <div>
        <Flex>
          <CardGame>
            <span>
              <img src={logoHome} />
              <p>{props.nicknameHome}</p>
            </span>
            <div style={{ marginLeft: "13px" }}>
              <h2>{props.homePoints}</h2>
            </div>
            <div
              style={{
                border: "none",
                marginLeft: "3px",
                marginRight: "10px",
                flexDirection: "column",
              }}
            >
              <h5>X</h5>
            </div>
            <div>
              <h2>{props.visiPoints}</h2>
            </div>
            <span>
              <img src={logoVisitors} />
              <p>{props.visiNickname}</p>
            </span>
          </CardGame>
        </Flex>
      </div>

      <ContainerTime
        style={
          props.status === "Finished"
            ? { display: "none" }
            : { display: "flex" }
        }
      >
        <div>
          <h5>Período:</h5>
          <h5>
            {props.periods}/{props.totalperiods}
          </h5>
        </div>

        <div>
          <h5>Tempo:</h5>
            <h6>{props.clock === null ? "Intervalo" : props.clock}</h6>
        </div>
      </ContainerTime>

      <ContainerNicks>
        <button onClick={() => props.Choose(props.nicknameHome)}>
          {props.nicknameHome} Stats
        </button>
        <span></span>
        <button onClick={() => props.Choose(props.visiNickname)}>
          {props.visiNickname} Stats
        </button>
      </ContainerNicks>
    </>
  );
}
