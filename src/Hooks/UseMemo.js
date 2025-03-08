import React, { useMemo, useState } from 'react'
import { CreateTodoList } from '../utils/CreateTodoList';
import { createTodo } from '../utils/CreateTodo';

function UseMemo() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0)
  const increaseByInputValue = (v) => {
    console.log("delay")
    for (let i = 0; i < 1000000000; i++){ }
    // setInput((prev)=>prev+5)
    return input;
  }
  const value = useMemo(() => {
    return increaseByInputValue(input)
  },[input])
  return (
    <div> 
      <h1>UseMemo demonstration</h1>
      <button onClick={()=>setCount((prev)=>prev+1)}>Increase</button>
      <p>count: {count}</p>
      <input type='number' placeholder='Enter number'
      value={input} onChange={(e)=>setInput(e.target.value)}/>
      <p>inputValue:{ value }</p>
    </div>
  )
}

export default UseMemo