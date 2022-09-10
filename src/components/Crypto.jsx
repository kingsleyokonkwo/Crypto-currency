export default function crypto(props) {
    return(
        <div className="crypto">
            <img src={props.img} alt="crypto icon" />
            <h3 className="crypto--full">{props.crypto} <span className="short">{props.shortform}</span></h3> 
            <p className="crypto--note">{props.note}</p>
            <button>Start mining</button>
        </div>
    )
}