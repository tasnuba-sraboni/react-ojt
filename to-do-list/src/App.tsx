import React, { useState } from 'react';
import './App.css';
import InputField from './components/inputField';
import TodoList from './components/todoList';
import { Todo } from './model';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todo);

  const handleAdd = (e: React.FormEvent)=>{
    e.preventDefault();

    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  };

  console.log(todos);
  
  
  return (
    <div className="App">
      <span className='heading'>TO-DO List</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
    
    </div>
  );
}

export default App;
