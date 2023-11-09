import { useState } from 'react';
import './App.css';
import InputBox from './InputBox';
import TodoList from './TodoList'

function App() {
  const [tid, setTid] = useState(0);
  const [todo, setTodo] = useState([])
  const setter = (data) => {
    const dataObj = {
      id: tid,
      tsk: data,
      done: false
    }
    setTid(tid + 1)
    setTodo(old => [...old, dataObj])
    console.log(todo)
  }
  const removeTodo = (id) => {
    setTodo(todo.filter((data) => data.id !== id))
  }
  const isDone = (ev, id) => {
    if (ev.target.classList.contains('delete')) {
      return
    }
    const new_todo = todo.map((to) => {
      if (to.id === id) {
        to.done = !to.done
      }
      return to
    })
    setTodo(new_todo)
    console.log(id)
  }
  return (
    <div className="App">
      <InputBox setter={setter} />
      {
        todo.length > 0 &&
        <TodoList list={todo} isDone={isDone} removeTodo={removeTodo} />

      }
    </div>
  );
}

export default App;
