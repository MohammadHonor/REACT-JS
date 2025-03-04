import React, { useCallback, useState } from 'react'
import { UseCallbackChild } from '../component/UseCallbackChild';

export const UseCallback = () => {

  const [count, setCount] = useState(0);

  const countHandler = useCallback(() => {
    setCount((prev)=>prev+1)
    // setCount(count+1)
  },[count])

  // const countHandler =() => {
  //   setCount((prev)=>prev+1)
  //   // setCount(count+1)
  // }
  
  // console.log(countHandler)

  // const countHandler = () => {
  //   setCount(count+1)
  // }

  return (
    <div>
      <span>count {count}</span>
      <br />
      <br/>
      <button onClick={countHandler}>increase</button>
      <br />
      <br/>
      <UseCallbackChild click={'click me'} handler={countHandler} />
    </div>
  )
}
