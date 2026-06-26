import React from "react";
import ReactDOM from "react-dom/client";


let rootEle= document.getElementById("root");

let root= ReactDOM.createRoot(rootEle);




let heading= <h1>React Component</h1>;

// components

function Greet(){

    return (<div>
        <h1>Hello I am first component</h1> 
        <p>i am pera</p>
        </div>)
}


function Person(){

    let age= 21;
    return (
        <div>
            <Greet/>
            <h2>Yagyadeep</h2>
            <Greet/>
            <Greet/>
            <Greet/>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <h2>{age}</h2>
        </div>
    )
}

const Card= ()=> (<h2>I am a Card Component</h2>)




root.render(<Person/>);