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
  const todoListner = (ev, id) => {
    if (ev.target.classList.contains('delete')) {
      removeTodo(id)
      return
    }
    const new_todo = todo.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
      return todo
    })
    setTodo(new_todo)
  }
  return (
    <div className="App">
      <h1>TODOLISTS</h1>
      <InputBox setter={setter} />
      {
        todo.length > 0 &&
        <TodoList list={todo} todoListner={todoListner}/>

      }
    </div>
  );
}

export default App;
