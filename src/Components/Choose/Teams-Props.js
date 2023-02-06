import { Logo } from "../../Assets/Logos";
import { CardTeam } from "../../Styles/teams-style";
import { useNavigate } from "react-router-dom";

export default function TeamsProps(props) {


    const logoFilter = Logo.filter(
        (item) => item.nick === props.nickname
      );
      const logo = logoFilter.map((item) => item.logo);
      const Navigate = useNavigate();

      function Next() {
        localStorage.setItem("id", props.id)
        localStorage.setItem("TeamName", props.name)
        localStorage.setItem("TeamPic", logo)
        Navigate('/choose/player')
      }

    return (
        <>
        <CardTeam>
            <span> <img src={logo}/></span>
            <span><h1>{props.name}</h1></span>
            <span></span>
            <span></span>
            <button onClick={() => Next()}>Prosseguir</button>
        </CardTeam>
        </>
    )
}