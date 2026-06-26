import React,{useState} from "react";
import ReactDOM from "react-dom/client";


let rootEle= document.getElementById("root");

let root= ReactDOM.createRoot(rootEle);

function App(){
    let count=2;
    let [cp,setCp]=useState(0);
    return (
        <>
        <h1>Count:{cp}</h1>
        <button onClick={()=> {
            
            console.log("varible:",count);
            count++;
            
            setCp(cp+1);
            console.log(cp);
            } }>Add</button>
        </>
    )
}


root.render(<App/>);