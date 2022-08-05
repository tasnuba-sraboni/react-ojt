import React, { useState } from "react";
import { Todo } from "../model";
import "./styles.css";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';

type SingleTodoProps = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<SingleTodoProps> = ({ todo, todos, setTodos }) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);


    const handleDone = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos((prev) =>
            prev.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        );
        setEdit(false);
    };

    const handleDelete = (id: number) => {
        setTodos((prev) =>
            prev.filter((todo) =>
                todo.id !== id
            )
        )
    }


    return (
        <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>


            <span>
                <input type="checkbox" className="todos__single--checkbox" onClick={() => handleDone(todo.id)} />
            </span>

            {edit ? (
                <input
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                    className="todos__single--text"
                />
            ) : todo.isDone ? (
                <s className="todos__single--text">{todo.todo}</s>
            ) : (
                <span className="todos__single--text">{todo.todo}</span>
            )}

            <div>
                <span className="todos__single--icon" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }}>
                    <EditTwoToneIcon />
                </span>
                <span className="todos__single--icon" onClick={() => handleDelete(todo.id)}>
                    <ClearTwoToneIcon />
                </span>

            </div>
        </form>
    )
}

export default SingleTodo;