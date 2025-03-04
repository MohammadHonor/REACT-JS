import { useState } from 'react'
//import './style.css';

// export default function Counter(){
//     const [cnt,setCount]=useState(0);

//     function increament(){
//         setCount(cnt+1)
//     }

//     function decreament(){
//         setCount(cnt-1)
//     }
//     return(
//         <>
//         <div>{cnt}</div>
//         <button onClick={increament}>+</button>
//         <button onClick={ decreament }>-</button>
//         </>
//     )
// }

export default function Counter(){
    const [cnt,setCount]=useState(0);

    function increament(){

        if(cnt<11){
        setCount(cnt+1)
    }
        else{
            alert("it is greater than 10")
        }
    }

    function decreament(){
       

        if(cnt>-11){
            setCount(cnt-1)
        }
            else{
                alert("it is less  than -10")
            }
        }
        return(
            <>
            <div>{cnt}</div>
            <button onClick={increament}>+</button>
            <button onClick={ decreament }>-</button>
            </>
        )
    }
    
