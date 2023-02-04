export default function PlayerStats(props) {
    return(
        <>
          <div>
            <span>{props.pos}</span>
            <span><h1>{props.firstName} {props.lastName}</h1></span>
            <span><h1>{props.min}</h1></span>
            <span> <h1>{props.pts}</h1></span>
            <span><h1>{props.ast}</h1></span>
            <span><h1>{props.reb}</h1></span>
          </div>
        </>
    )
}