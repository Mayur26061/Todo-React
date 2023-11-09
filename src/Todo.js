const Todo = ({ todo, isDone, removeTodo }) => {
    return (
        <div className="todo" onClick={(ev) => isDone(ev, todo.id)}>
            <div className={`${todo.done ? "checked" : "unchecked"}`} >
                <span>{todo.tsk}</span>
            </div>
            <span className="delete" onClick={() => { removeTodo(todo.id) }}>x</span>
        </div>
    )
}
export default Todo
