import React from 'react'
import { useMemo } from 'react'

export const UseCallbackChild = React.memo(
    (props) => {
    console.log("child render")
    
    return (
      <div>
        <button onClick={props.handler}>{props.click}</button>
      </div>
    )
  }
)

// function UseCallbackChild(props) {
//     console.log("child render")
//     return (
//       <div>
//         <button>{props.click}</button>
//       </div>
//     )
//   }
// export UseCallbackChild = useMemo(UseCallbackChild)
  
