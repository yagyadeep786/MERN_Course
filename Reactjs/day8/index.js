import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client";


let rootEle= document.getElementById("root");

let root= ReactDOM.createRoot(rootEle);

let App= ()=>{
  let [count,setCount]= useState(0);

    useEffect(()=>{

        console.log("componet mount");


    },[count]);

    useEffect(()=>{

        let timer= setInterval(()=>{
            console.log("i am Inverval function");
        },1000);

        return ()=>{
            clearInterval(timer)
        }

    },[]);


    useEffect(()=>{

        async function fun() {
            
            let response= await fetch("https://jsonplaceholder.typicode.com/todos")
            let data= await response.json();
    
            console.log(data);
        }

        fun();

    },[]);

    return(
        <>
        <h1>React useEffect {count}</h1>
        <button onClick={()=> setCount(count+1)}>Add</button>
        </>
    )
}


let Parent= ()=>{
    let [show,setShow]= useState(true);

    

    return(
        <>
         {show && <App/>}
         <button onClick={()=>{
            setShow(!show);
         }} >hide</button>
        </>
    )
}


root.render(<Parent/>);