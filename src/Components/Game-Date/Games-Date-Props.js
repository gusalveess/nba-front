import { CardGame, Flex } from "../../Styles/games-live-style";
import { Logo } from "../../Assets/Logos";
import { GiBasketballBasket } from "react-icons/gi";
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
          <span>
            <img src={logoHome} />
          </span>

          <span>
            <p>{props.nicknameHome}</p>
          </span>

          <span>
            <div>
              <h2>{props.homePoints}</h2>
            </div>
          </span>

          <span>
            <p>X</p>
          </span>

          <span>
            <div>
              <h2>{props.visiPoints}</h2>
            </div>
          </span>

          <span>
            <p>{props.visiNickname}</p>
          </span>

          <span>
            <img src={logoVisitors} />
          </span>
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
