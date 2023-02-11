import { Logo } from "../../Assets/Logos";

export default function TeamStats(props) {
  const logoFilter = Logo.filter((item) => item.nick === props.nickname);
  const logo = logoFilter.map((item) => item.logo);

  return (
    <>
      <div>
        <span>
        <img src={logo} alt="logo"/>
        </span>
        <span>
          <h1>{props.nickname}</h1>
        </span>
        <span></span>
        <span></span>
        <span>
          <h1>{props.Wins}</h1>
        </span>
        <span>
          <h1>{props.Loss}</h1>
        </span>
        <span>
          <h1>{props.gamesBehind === null ? '-' : props.gamesBehind}</h1>
        </span>
        <span>
          <h1>{props.u10Win} - {props.u10Loss}</h1>
        </span>
      </div>
    </>
  );
}
