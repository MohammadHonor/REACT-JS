
import React, { useReducer } from 'react'

export const UseReducer = () => {
    const initialState={
        count:0
    }

    function reducer (state,action){
        console.log(action)
       if(action.type === "increament"){
          return {...state,count:state.count+1}
       }
       else if(action.type ==="decreament"){
        return{count:state.count-1}
       }

    }
  const [state, Dispatch] = useReducer(reducer, initialState)
  console.log(state)
  return (
    <div>
    <p>{state.count}</p>
        <button onClick={()=>Dispatch({type:"increament",payload:"increase the value",message:"jack is hero"})}>Increament</button>
        <button onClick={()=>Dispatch({type:"decreament",payload:"decrease the value" , message:"jack is not herror"})}>Decreament</button>
    </div>
  )
}
