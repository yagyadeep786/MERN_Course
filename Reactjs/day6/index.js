import React from "react";
import ReactDOM from "react-dom/client";


let rootEle= document.getElementById("root");

let root= ReactDOM.createRoot(rootEle);

let App= ()=>{
    function greet(event){
        console.log("Hello Yagyadeep");
        // console.log("value is:",val);
        console.log(event.target);
    }

    function inputHandler(event){
        console.log(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        console.log("form submited");
    }
    return (
        <>
        <h1>Event Handling in Reacjs</h1>
        <input type="text" onChange={inputHandler}></input>
        <button
        onClick={(event)=> greet(event)}
        >
            Greet
        </button>

        <form onSubmit={submitHandler}>
            <input type="text" onChange={inputHandler}></input>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

root.render(<App/>)