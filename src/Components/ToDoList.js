
import React, { useState } from "react";

function ToDoList() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  
// to add new one to list 
  function handelSubmit(e) {
    e.preventDefault();
    
    //to prevent the empty list
    if (newTodo.length===0){
      return;
    }

    //to chick done
    const toDoItem={
      text:newTodo,
      complete:false
    }
    setTodos([...todos, toDoItem]);
    setNewTodo("");
    
  }


// to delete
  function handelDelte(index){
    const filtering=todos.filter((todo,i)=>{
      return i !==index ;
    })
    setTodos(filtering);
    
    
  }


  //chickbox
  function handelChickbox(index){
    const chick=todos.map((todo,i)=>{
      if(index===i){
        todo.complete= !todo.complete;
      }
      return todo;
    })
    setTodos(chick);
  }

  return (
    <div className="App">
      <form onSubmit={(e) => handelSubmit(e)}>
        <input
          onChange={(e) => setNewTodo(e.target.value)}
          type="text"
          value={newTodo}
        />
        <div>
          <button>Add To List</button>
        </div>
      </form>
      {todos.map((todo, i) => {
        return (
          <div >
            <input onChange={(e)=>{handelChickbox(i)}} type="checkbox" checked={todo.complete}/>
              
            
            <p key={i}> {todo.text}</p>
            <button onClick={(e)=>{handelDelte(i)}}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default ToDoList;
