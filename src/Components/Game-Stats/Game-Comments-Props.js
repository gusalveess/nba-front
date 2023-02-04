export default function CommentsProps(props) {
    return (
        <>
        <div>
            <img src={props.picture} />
            <span>
                <h1>{props.name}:</h1>
                <p>{props.comment}</p>
            </span>
        </div>
        </>
    )
}