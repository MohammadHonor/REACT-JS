import React, { useState, useTransition } from 'react'

export const UseTransition = () => {
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();
  // console.log(useTransition())
  const handleClickButton = () => {
    startTransition(async () => {
      await new Promise((resolve,reject) => setTimeout(resolve, 5000)); 
      setCount((prev) => prev + 1);
    });
  }
  return (
    <div style={{display:'flex',flexDirection:'column', justifyContent:"center" , alignItems:'center'}}>
      <p>UseTransition Demo</p>
      <p>{count}</p>
      <button onClick={ handleClickButton} disabled={isPending}>
        {isPending ? "Updating" : "increment"}</button>
    </div>
  )
}
