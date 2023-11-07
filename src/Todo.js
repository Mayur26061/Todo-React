const Todo = ({todo,isDone})=>{
    return(
        <div className="todo">
            <div onClick={()=>isDone(todo.id)}>
            <span className={`${todo.done?"checked":"unchecked"}`}>{todo.tsk}</span>
            </div>
        </div>
    )
}
export default Todo