import React from "react";
import { Todo } from "../model";
import SingleTodo from "./singleToDo";
import './styles.css';


interface TodoListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {

    return (

        <div className="todos">
            {todos.map((todo) => (
                <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
            ))}
        </div>

    )
}

export default TodoList;
