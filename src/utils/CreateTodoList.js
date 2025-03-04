import React from 'react'
import { FilterTodoes } from './FilterTodoes'

export const CreateTodoList = ({ todos, theme, tab }) => {
  // console.log(todos, tab)
  // console.log("filter_todooosoos",FilterTodoes(todos,tab))
  
  // console.log("visibletodo",visibleTodo)
  return (
    <div className={theme}>
      <p>Note: filter todo ARTIFICIALLY SLOW down </p>
      <ul>
        {
          FilterTodoes(tab,todos).map((todo) => {
            <li key={todo.id}>
              {
                todo.completed ?
                  <s>{ todo.text}</s>:todo.text
              }
            </li>
          })
        }
      </ul>
    </div>
  )
}
