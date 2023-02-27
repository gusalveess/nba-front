import { CardGame, Flex, ContainerNicks } from "../../Styles/games-stats-style";
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
            <div>
              <h2>{props.homePoints}</h2>
            </div>
            <div style={{border: 'none', marginLeft: '20px', marginRight: '10px', flexDirection: 'column'}}>
            <h5>Período</h5>
            <h5 style={{paddingTop: '5px'}}>{props.periods}/{props.totalperiods}</h5>
            {props.status === 'Finished' ? <h5>X</h5> : <h6>{props.clock === null ? "Intervalo" : props.clock}</h6>}
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
