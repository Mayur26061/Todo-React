import { useState } from 'react';
import './App.css';
import InputBox from './InputBox';
import TodoList from './TodoList'

function App() {
  const [tid,setTid] = useState(0);
  const [todo,setTodo] = useState([])
  const setter = (ev,av)=>{
    const ob = {
      id:tid,
      tsk:av,
      done:false
    }
    setTid(tid+1)
    setTodo(old=>[...old,ob])
    console.log(todo)
  }
  const isDone=(id)=>{
    const new_todo = todo.map((to)=>{
      if(to.id===id){
        to.done = !to.done
      }
      return to
    })
    setTodo(new_todo)
    console.log(id)
  }
  return (
    <div className="App">
      <InputBox setter={setter}/>
      {
          todo.length > 0 &&
            <TodoList list={todo} isDone={isDone}/>
          
        }
    </div>
  );
}

export default App;
