import { useState } from "react";

function InputComp(props){

    let [val,setVal]= useState("");

    // props.inputHandler(val);
    
    return(
        <>
        <input type="text" style={props.style} placeholder={props.placeholder} onChange={(e)=>{setVal(e.target.value)}} value={val}></input>
        <button onClick={()=> {props.inputHandler(val);
            setVal("");
        }}>Add</button>
        </>
    )
}

export default InputComp;