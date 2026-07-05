import React from "react";
import ReactDom from "react-dom/client"
import App from "./App.js";
import "./style.css"

let rootEle= document.getElementById("root");

let root= ReactDom.createRoot(rootEle);


root.render(<App/>)