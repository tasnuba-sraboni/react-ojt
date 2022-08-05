import React, { useState } from 'react';
import { Todo } from '../../model/todo';
import './index.css';
import InputField from './InputField';
import TodoList from './TodoList';

const ParentTodo: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent)=>{
    e.preventDefault();
    if (todo) {
      setTodos((prev)=>[...prev, {id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  };
  
  return (
    <div className="main">
      <span className='main__heading'>TO-DO List</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
    
    </div>
  );
}

export default ParentTodo;
