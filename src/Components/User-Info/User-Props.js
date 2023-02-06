export default function UserProps(props) {
    return (
        <>
         <span>
            <p>Seu time favorito:</p>
            <img src={props.TeamImage}/>
            <h1>{props.TeamName}</h1>
            <p>Seu jogador favorito: </p>
            <img src={props.PlayerImage}/>
            <h1>{props.PlayerName}</h1>
         </span>
        </>
    )
}