import React from "react";
import "./index.css";
import Checkbox from "../Checkbox";
import { Data } from "../../App";

type TodoItemProps = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
  onCheckboxChange: (id: number) => void;
  data: Data[];
  setData: (data: Data[]) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ id, userId, title, completed, onCheckboxChange, setData, data }) => {
  const handleRemoveTodo = (id: number) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };
  return (
    <div className="todo-item">
      <Checkbox checked={completed} onCheckboxChange={() => onCheckboxChange(id)} />
      <div className="todo-info">
        <p className="text">
          <span>ID: {id}</span>
          <span>User ID: {userId}</span>
        </p>
        <p className={`text ${completed ? "completed" : ""}`}>{title}</p>
      </div>
      <span className="remove" onClick={() => handleRemoveTodo(id)}>
        X
      </span>
    </div>
  );
};

export default TodoItem;
