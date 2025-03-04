import { useState } from "react"


// export default function FetchData(){
    
//     const [details,setDetails]=useState({})


//     // fetch('https://dummyjson.com/products/1')
//     // .then(res => res.json())
//     // .then(json => setDetails(json))
                
            
//     return(
//          <div>
//             <p>{details.id}</p>
//             <p>{ details.description}</p>
//             <p>{ details.price}</p>
//          </div>
//     )
// }


  function FetchData(){
   
    const [details,setDetails]=useState({})
    async function FetchData(){
        const res= await fetch('https://dummyjson.com/quotes/1')
    const data= await res.json()
    console.log(data);
    setDetails(data)
    
                
    }

    
            
    return(
         <div>
            <button onClick={FetchData}>fetch data</button>
            <p>{details.id}</p>
            <p>{details.quote}</p>
            <p>{details.author}</p>
         </div>
    )
}

export default FetchData;
   

