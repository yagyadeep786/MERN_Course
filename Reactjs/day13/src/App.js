
import Landing from "../components/Landing.js";

function App(){
    return (
        <>
       <div className="flex flex-row items-center justify-between px-5 w-screen bg-gray-800">
         <h1 className="text-5xl text-red-300 px-5 py-5">Landing</h1>
         <div className="flex flex-row items-center gap-10">
            <p className="text-blue-500 cursor-pointer">Home</p>
            <p className="text-blue-500 cursor-pointer">About</p>

         </div>
       </div>
        <Landing/>
        </>
    )
}

export default App;