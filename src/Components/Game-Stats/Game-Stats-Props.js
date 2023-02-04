import { CardGame, Flex, ContainerNicks } from "../../Styles/games-stats-style"
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
          <img src={logoHome} />
          <p>{props.nicknameHome}</p>
          <div>
            <h2>{props.homePoints}</h2>
          </div>
          <p>X</p>
          <div>
            <h2>{props.visiPoints}</h2>
          </div>
          <p>{props.visiNickname}</p>
          <img src={logoVisitors} />
        </CardGame>
      </Flex>
         </div>
         <ContainerNicks>
            <button onClick={() => props.Choose(props.nicknameHome)}>{props.nicknameHome} Stats</button>
            <span></span>
            <button onClick={() => props.Choose(props.visiNickname)}>{props.visiNickname} Stats</button>
         </ContainerNicks>
        </>
    )
}