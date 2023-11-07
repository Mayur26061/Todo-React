import Todo from './Todo'
const Todolist = ({list,isDone}) => {
    return ( 
        <div className="todolist">
              {
        list.map((td)=>{
          return (
            <Todo todo={td} key={td.id} isDone={isDone}/>
          )
        })
      }
        </div>
     );
}
 
export default Todolist;