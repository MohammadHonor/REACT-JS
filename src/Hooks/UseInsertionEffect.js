import React, { useEffect, useInsertionEffect, useLayoutEffect } from 'react'

export const UseInsertionEffect = () => {
  useInsertionEffect(() => {
    const style = `background-color:red`
    console.log("useInsertionEffect")

    const root = document.getElementById("root");
    const original = root.style.backgroundColor;
    if (root) {
      root.style.backgroundColor="blue"
    }
    return () => {
      root.style.backgroundColor = original;
    }
  },[])
  useEffect(() => {
    console.log("useEffect")
  },[])
  useLayoutEffect(() => {
    console.log("useLayoutEffect")
  },[])
  return (
    <div>
      <p>UseInsertionEffect demo</p>
      <button>click me</button>
    </div>
  )
}
