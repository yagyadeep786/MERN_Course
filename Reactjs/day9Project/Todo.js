
function Todo({data,deleteTodo,updateTodo}){

    return(
        <div>
            <p>{data.text}</p>
            <button onClick={()=>{deleteTodo(data.id)}}>Delete</button>
            <button onClick={()=>{updateTodo(data.id)}}>Update</button>
        </div>
    )
}

export default Todo;