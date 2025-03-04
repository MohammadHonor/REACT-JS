import './style.css'
 function CustomBtn(probes){
    return(
        <div >
        
            <button class={probes.cls}  onClick={probes.onClick}>{probes.text}</button>
        </div>
    );
 }
 export default CustomBtn;