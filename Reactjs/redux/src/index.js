import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App.js";
import {Provider} from "react-redux"
import store from "../store/store.js";

let rootEle= document.getElementById("root");

let root= ReactDOM.createRoot(rootEle);


root.render(
<Provider store={store}>
    <App/>
</Provider>

);
