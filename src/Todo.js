const Todo = ({ todo, todoListner }) => {
    return (
        <div className="todo" onClick={(ev) => todoListner(ev, todo.id)}>
            <div className={`${todo.done ? "checked" : "unchecked"} truncate`} >
                <span>{todo.task}</span>
            </div>
            <span className="delete">x</span>
        </div>
    )
}
export default Todo
