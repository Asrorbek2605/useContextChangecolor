import React from 'react';
import { createContext,useState } from 'react';
import Firstcom from "./components/Firstcom";
 export const  myContext = createContext()
function App() {
     const [active,setActive]=  useState(true)
     const [color,setColor]=  useState('white')
 function toogleModal() {
     setActive(prev=>!prev)
 }
 
  return (
      <myContext.Provider value={{active:active,color:color,setColor:setColor}}>
    <div className="container">
<h2>fffsdf</h2>
<h2>fffsdf</h2>
        <div className={"btn btn-success"} onClick={toogleModal}>Toggle</div>
        <div className={"col-md-6"}>    <Firstcom/>
        </div>
    </div>
</myContext.Provider>
    );
}

export default App;
