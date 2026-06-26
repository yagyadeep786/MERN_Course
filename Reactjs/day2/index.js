import React from "react";
import ReactDOM from "react-dom/client";

console.log("I am Javascript");

let heading= React.createElement("h1",{id:"heading"},"This is React heading");
let pera= React.createElement("p",{},"this is pera in React");

// JSX 

let jsxHeading= <h1>JSX heading</h1>;
let age= 21;
let nestedEle= ( <div>

    <h2>Heading 2 in jsx {age}</h2>
    <p>this is react jsx </p>
</div>)

// JSX -> React Element (object type elements) -> convert -> babel
console.log(jsxHeading);

let rootEle = document.getElementById("root");

let root= ReactDOM.createRoot(rootEle);

root.render(nestedEle);