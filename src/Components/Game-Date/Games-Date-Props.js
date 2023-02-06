import { CardGame, Flex, Sheduled } from "../../Styles/games-date-style";
import { Logo } from "../../Assets/Logos";
import { GiBasketballBasket, GiSharpCrown } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export default function GamesLiveProps(props) {
  const logoHomeFilter = Logo.filter(
    (item) => item.nick === props.nicknameHome
  );
  const logoVisFilter = Logo.filter((item) => item.nick === props.visiNickname);
  const logoHome = logoHomeFilter.map((item) => item.logo);
  const logoVisitors = logoVisFilter.map((item) => item.logo);
  const Navigate = useNavigate();

  return (
    <>
      <Flex>
        <CardGame>
          <img src={logoHome} />
          <span>
            <p>{props.nicknameHome}</p>
          </span>
          {props.status === "Scheduled" ? (
            <h1>Em breve</h1>
          ) : (
            <Sheduled>
              <div>
                <h2>{props.homePoints}</h2>
              </div>
              <p>X</p>
              <div>
                <h2>{props.visiPoints}</h2>
              </div>
            </Sheduled>
          )}
          <span>
            <p>{props.visiNickname}</p>
          </span>

          <img src={logoVisitors} />
        </CardGame>
        <span>
          <button onClick={() => Navigate(`/game/${props.id}`)}>
            Ver Mais
            <GiBasketballBasket />
          </button>
        </span>
      </Flex>
    </>
  );
}
