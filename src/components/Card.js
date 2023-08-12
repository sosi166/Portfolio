
const Card = (props) => {

    return (
        <>
            <div className="card">
                <img alt="Project photo" src={props.image} loading="lazy" />
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <p>{props.text1}</p>
                <a href={props.link} target="_blank">
                    <p>GitHub</p>
                </a>
            </div>
        </>
    )
}
export default Card;