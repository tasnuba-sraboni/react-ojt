import React, { useRef } from "react";
import './styles.css';
import AddIcon from '@mui/icons-material/Add';

interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: InputFieldProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className="input" onSubmit={(e) => { handleAdd(e); inputRef.current?.blur(); }}>
            <input
                ref={inputRef}
                type="input"
                placeholder="Task..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="input__box" />
            <button className="input__submit" type="submit" > <AddIcon/> </button>
        </form>
    )
}

export default InputField;