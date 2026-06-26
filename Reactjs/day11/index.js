
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router"

import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Product from "./Product.js";
import Dashboard from "./Dashboard.js";
import Profile from "./Profile.js";
import Payment from "./Payment.js";
import Settings from "./Settings.js";


let rootEle= document.getElementById("root");

let root= ReactDOM.createRoot(rootEle);


const App= ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/about"} element={<About/>}></Route>
                <Route path={"/contact"} element={<Contact/>}></Route>
                <Route path={"*"} element={<h2>Page not fount</h2>}></Route>
                <Route path={"/product/:id"} element={<Product/>}></Route>
                <Route path={"/dashboard"} element={<Dashboard/>}>
                    <Route path={"profile"} element={<Profile/>}></Route>
                    <Route path={"payment"} element={<Payment/>}></Route>
                    <Route path={"settings"} element={<Settings/>}></Route>
                
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

root.render(<App/>)