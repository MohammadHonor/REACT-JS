import './card.css'
function Card(props){
    return(
        <div className="card">
            <h1>{props.name}</h1>
            <p>{props.marks}</p>
            <p>{props.desc}</p>
        </div>
    )
   
}
export default Card;