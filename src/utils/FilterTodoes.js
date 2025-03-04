import React from 'react'

export const FilterTodoes = (tab,todos) => {
  console.log('[ARTIFICIALLY SLOW] Filtering ' + todos.length + ' todos for "' + tab + '" tab.');
  console.log("filter_toodoos",todos)
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // nothing
  }
  return todos.filter((todo) => {
      if (tab === "all") {
        return true
      } else if (tab === "active") {
        return !todo.completed
      } else if (tab === "completed") {
        return todo.completed
      }
    })
  
}

