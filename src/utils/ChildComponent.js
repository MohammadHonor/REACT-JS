import React, { useImperativeHandle } from 'react'

export const ChildComponent = (props) => {
  useImperativeHandle(props.ref, () => {
    return {
      dis:display
    }
  })
  const display = () => {
    console.log("I am child components");
  }
  return (
    <div>
      Hi, I am child components
    </div>
  )
};
