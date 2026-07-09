import { useSelector,useDispatch } from "react-redux";
import { increament,decreament,reset,addAmount } from "../store/productSlice.js";
import { useState } from "react";
function App(){

    let count= useSelector((state)=> state.counter.value);
    
    let dispatch= useDispatch();

    let [input,setInput]= useState(0);
    function handlerIncreament(){
        dispatch(increament());
    }
    return (
        <>
        <h1>Redux: value: {count}</h1>
        <button onClick={handlerIncreament}>Increament</button>
        <button onClick={()=>dispatch(decreament())}>Increament</button>
        <button onClick={()=>dispatch(reset())}>Increament</button>
        
        <input type="number" value={input} onChange={(e)=>setInput(e.target.value)}></input>
        <button onClick={()=> dispatch(addAmount(input))}>Add</button>
        </>
    )
}

export default App;