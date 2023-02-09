import { CardGame, Flex } from "../../Styles/games-live-style";
import { Logo } from "../../Assets/Logos";
import { GiBasketballBasket } from "react-icons/gi";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function GamesLiveProps(props) {
  const logoHomeFilter = Logo.filter(
    (item) => item.nick === props.nicknameHome
  );
  const logoVisFilter = Logo.filter((item) => item.nick === props.visiNickname);
  const logoHome = logoHomeFilter.map((item) => item.logo);
  const logoVisitors = logoVisFilter.map((item) => item.logo);
  const width = window.screen.width;
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
            <h3>X</h3>
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
          {width > 600 ? (
            <button onClick={() => Navigate(`/game/${props.id}`)}>
              Ver Mais <GiBasketballBasket />
            </button>
          ) : (
            <button onClick={() => Navigate(`/game/${props.id}`)}>
              <AiOutlineEye />
            </button>
          )}
        </span>
      </Flex>
    </>
  );
}
