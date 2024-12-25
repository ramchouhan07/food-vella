import { useState } from "react";

const Func = ()=>{
   // let incre=15;
    let [incre , setcounter] = useState(12)
   return (
    <>
    <h1 >hello ram</h1>
    <button 
    onClick={()=>{
      
        incre +=1;
        setcounter(incre);
        {console.log(incre)}
    }}
    >pluse</button>
    <br></br>
    <h1>{incre}</h1>
   
    <button 
    onClick={()=>{
        incre -=1;
        setcounter(incre);
        {console.log(incre)}
    }}>minuse</button>
    </>
   )
}

let Ram = "react js"

export default Func;