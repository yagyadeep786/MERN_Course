import { createContext,useState } from "react";


// create context

let UserContext= createContext();

const UserContextProvider= ({children})=>{

    let [data,setData]= useState(0);
    return(
        <UserContext.Provider value={{data,setData}}>
            {children}
        </UserContext.Provider>
    )

}


export {UserContext,UserContextProvider};