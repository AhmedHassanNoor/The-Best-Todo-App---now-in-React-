import React, { useState } from "react";
import "./style.css"; // Import your custom CSS for styling
import { Data } from "../../App";

type InputProps = {
  data: Data[];
  setData: (data: Data[]) => void;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({ data, setData, placeholder }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const newItem: Data = {
        userId: 1,
        id: data.length + 1,
        title: newTodo,
        completed: false,
      };
      setData([...data, newItem]);
      setNewTodo("");
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        id="inputField"
        placeholder={placeholder || "Enter value here..."}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default Input;
