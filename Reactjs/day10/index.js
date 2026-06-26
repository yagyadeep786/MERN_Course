import React,{useState,useContext} from "react";
import ReactDOM from "react-dom/client";
import {UserContext} from "./UserContext.js";
import { UserContextProvider } from "./UserContext.js";

let rootEle= document.getElementById("root");

let root= ReactDOM.createRoot(rootEle);


const App= ()=>{

    
    // let [data,setData]= useState(0);
    // let data= "i am a data";
    return (
        <>
        <h2>App Component</h2>
       <UserContextProvider>

        <Main/>
       </UserContextProvider>
        {/* <button onClick={()=>{setData(data+1)}}>Add</button> */}
        </>
    )
}

const Main = ()=>{

    return(
        <>
        <h2>Main Component</h2>
        <Card/>
        </>
    )
}

const Card = ()=>{

    return(
        <>
        <h2>Card Component</h2>
        <User/>
        </>
    )
}


const User = ()=>{
    let {data,setData}= useContext(UserContext);
    console.log(data,setData);

    return(
        <>
        <h2>User Component</h2>
        <p>{data}</p>
        <button onClick={()=> setData(data+1)}>user Add</button>
        </>
    )
}

root.render(


    <App />

);