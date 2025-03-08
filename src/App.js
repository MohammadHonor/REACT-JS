
import './App.css';
// import {Chat } from './Chat.js';
// import Card from './component/card/card.js'
// import Login from './component/login/login.js'
// import NewChat from './component/NewChat/NewChat.js'
// import CustomBtn from './component/customButton/index.js'
// import Counter from './component/Counter/index.js';
// import SetEmail from './component/Email/index.js';
// import FetchData from './component/FetchData/index.js';
// import ComA from './component/com/comA.js'

// import {  useState } from 'react';
// function App(){
//   return(
//     <>
//     <Card name="ali" marks="85" desc="he is very honest person"/>
//     <Card name="ali" marks="85" desc="he is very honest person"/>
//     <Card name="ali" marks="85" desc="he is very honest person"/>
//     </>
//   )
// }

// function App(){
//   return(
//     <>
//    <Login/>
//     </>
//   )
// }



// function App(){
//   let msg=[
//     {name:"Alex",time:"7:00 pm",text:"How are u"},
//     {name:"Alex",time:"7:00 pm",text:"How are u"},
//     {name:"Alex",time:"7:00 pm",text:"How are u"},
//     {name:"Alex",time:"7:00 pm",text:"How are u"},
//     {name:"Alex",time:"7:00 pm",text:"How are u"},
//     {name:"Alex",time:"7:00 pm",text:"How are u"}
//   ]
//   return(
//     <>
//     {msg.map((item)=>{
//       return(
//         < NewChat name={item.name} time={item.time} text={item.text}/>
//       );
//     })}
//     </>

//   );
// }


// function App(){
//   const func1=()=>{
//     alert("first class");
//   }

//   const func2=()=>{
//     alert("second class");
//   }
//   const func3=()=>{
//     alert("Third class");
//   }
//   return(
//     < div>
//     <CustomBtn cls={"btn1"} text={"click me"} onClick={func1}/>
//     <CustomBtn cls={"btn2"} text={"click me"} onClick={func2}/>
//     <CustomBtn cls={"btn3"} text={"click me"} onClick={func3}/>

//     </div>
//   )
// }
// export default App;



// export default function App(){
//   return(
//     <>
//     < Counter/>
//     </>
//   )
// }


// export default function App(){
//   return(
//     <>
//     {/* <SetEmail/> */}
//     <FetchData/>
//     </>
//   )
// }


// import { createContext } from 'react';
// let firstname = createContext();
// const LastName= createContext();

// function App() {
//   return (<>
//     <firstname.Provider value={"Mohammad"} >
//       <LastName.Provider value={" ali"}> <ComA /></LastName.Provider>

//     </firstname.Provider>

//   </>)
// }


// export default App;
// export {firstname , LastName}

// import { useState } from 'react';
// import Form from './component/Form/f.js';
// export default function App() {
//   const [theme, setTheme] = useState('light');
//   return (
//     <createTheme.Provider value={theme}>
//       <Form />
//       <label>
//         <imput
//           type="checkbox"
//           checked={theme ==="dark"}
//           onChange={(e) => {
//             setTheme(e.target.checked ? "dark" : "light")
//           }}/>
//          Use dark Mode
//       </label>
//     </createTheme.Provider>
//   )
// }

// import { createContext } from 'react';
// const themDesign=createContext();

// function App(){
//    const [them,setTheme]=useState('dark');

//   return(
//     <themDesign.Provider value={them}>
//         <Panel />
//     <label >
//     <input
//     type='checkbox'
//     checked={them =='dark'}
//     onChange={(e)=>{
//       setTheme(e.target.checked ?'dark' : 'light')
//     }}
//     />
//     check box
//     </label>
//     </themDesign.Provider>
    
    
    
  
  
//   )
// }



// export default App;
// export {themDesign} ;

import { UseReducer } from './Hooks/UseReducer';
import { UseActionState } from './Hooks/UseActionState';
import { UseCallback } from './Hooks/UseCallback';
import UseMemo from './Hooks/UseMemo';
import { UseTransition } from './Hooks/UseTransition';
import { WindowApi } from './WindowApi/WindowApi';
import { UseId } from './Hooks/UseId';
import { UseImperativeHandle } from './Hooks/UseImperativeHandle';
import { UseInsertionEffect } from './Hooks/UseInsertionEffect';

const App = () => {
  return (
    <UseMemo/>
    // <UseCallback/>
    // <UseActionState />
    // <UseReducer/>
    // <UseTransition/>
    // <WindowApi/>
    // <UseId/>
    // <UseImperativeHandle/>
    // <UseInsertionEffect/>

  )
}
export default App
