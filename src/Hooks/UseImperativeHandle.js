import React, { useRef } from 'react'
import { ChildComponent } from '../utils/ChildComponent';

export const UseImperativeHandle = () => {
  const ref = useRef();
  // console.log(ref)
  return (
    <div>
      <h2>UseImperativeHandle demo</h2>
      <ChildComponent ref = {ref}/>
      <button onClick={()=>ref.current.dis()}>click me</button>
    </div>
  )
}
