import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import InputComp from "./InputComp.js"
import Todo from "./Todo.js";


let rootEle= document.getElementById("root");

let root= ReactDOM.createRoot(rootEle);


function App(){

    let [todos,setTodos]= useState([]);
    let [id,setId]= useState(0);


    function inputHandler(value){
        console.log("value:",value);


        let todo= {
            id:id,
            text:value
        }
        setId(id+1);
        setTodos((prev)=>{
            return ([...prev,todo]);
        })

        console.log("todos",todos);

    }

    function deleteTodo(id){

        setTodos((prev)=>{
            return prev.filter((todo)=> todo.id != id);
        })
    }

    function updateTodo(id){

        let newText= window.prompt("Enter new text");

        setTodos((prev)=>{
            return (
                prev.map((ele)=>{
                    return ele.id == id ? {...ele,text:newText}: ele;
                })
            )
        })
    }

    return(
        <>
        <div className="container">
            <div className="application">
                <h1>todo</h1>
                <InputComp 
                style={{
                    padding:"5px"
                }}
                placeholder={"Enter some data"}
                inputHandler={inputHandler}
                />
                <div className="todos">
                    {
                        todos.map((todo)=>{
                            return (
                                <Todo data={todo} key={todo.id} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

root.render(<App/>);