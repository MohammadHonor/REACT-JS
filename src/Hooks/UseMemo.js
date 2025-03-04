import React, { useState } from 'react'
import { CreateTodoList } from '../utils/CreateTodoList';
import { createTodo } from '../utils/CreateTodo';

function UseMemo() {

  const [tab, setTab] = useState('all')
  const [isDark, setIsDark] = useState(false);
  return (
    <div> 
      <h1>UseMemo demonstration</h1>
      <button onClick={()=>setTab('all')}>{"All"}</button>
      <button onClick={()=>setTab('active')}>Active</button>
      <button onClick={()=>setTab("completed")}>Completed</button>
      <br />
      <label>
        <input type='checkbox'
          checked={isDark}
          onChange={(e)=>setIsDark(e.target.checked)}
        />
        Dark Mode
      </label>
      <hr />
      <CreateTodoList
        todos={createTodo()}
        tab={tab}
        theme={isDark ? 'dark':'light'}
      />
    </div>
  )
}

export default UseMemo