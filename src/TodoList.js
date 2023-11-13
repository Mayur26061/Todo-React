import Todo from './Todo'
const Todolist = ({ list, todoListner }) => {
  return (
    <div className="todolist">
      {
        list.map((td) => {
          return (
            <Todo todo={td} key={td.id} todoListner={todoListner}/>
          )
        })
      }
    </div>
  );
}

export default Todolist;
