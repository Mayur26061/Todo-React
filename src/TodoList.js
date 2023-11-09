import Todo from './Todo'
const Todolist = ({ list, isDone, removeTodo }) => {
  return (
    <div className="todolist">
      {
        list.map((td) => {
          return (
            <Todo todo={td} key={td.id} isDone={isDone} removeTodo={removeTodo} />
          )
        })
      }
    </div>
  );
}

export default Todolist;
