import { useState } from "react"

export default function SetEmail(){
     const [email,SetEmail]=useState("")
     const [pass,setPass]=useState("")
     const [user,setUser]=useState([])
    function createUser(e){
        let myArr=user;
        myArr.push({email:email,pass:pass})
        setUser(myArr)
        SetEmail("")
        setPass("")
        
        // setUser([...user,{email:email,pass:pass}])
       
    }
    return(
        <div>
            < input 
            type="text" 
            value={email}
            // onChange={(e)=>{
            //     SetEmail(e.target.value)
            // }}

            onChange={(e)=>{
                SetEmail(e.target.value)
            }}
            />
             < input 
            type="password" 
            value={pass}
            // onChange={(e)=>{
            //     SetEmail(e.target.value)
            // }}

            onChange={(evnt)=>{
                setPass(evnt.target.value)
            }}/>
            <button onClick={ (e)=>{createUser(e)}}>click me</button>
            {user.map((item,i)=>{
            return(
             
             <p key={i}>{item.email}-{item.pass}</p>
             
         )
         })}
            
                
                        
                    
                
            
            
            
        </div>
    )
}