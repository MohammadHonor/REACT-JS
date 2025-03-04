import './NewChat.css';
import image from './assets/image.jpeg';

function NewChat({name,time,text}){
    return(
        <div id="chat-box">
            <div>
           <img style={{width:"80px"}}src={image}/>
           </div>
           <div className="info">
            <div className="details">
            <b>{name}</b>
            <spane>today at {time}</spane>
            </div>
            <div>
            <p>{text}</p>
            </div>
            </div>
            
            
        </div>
    )
}

export default NewChat;