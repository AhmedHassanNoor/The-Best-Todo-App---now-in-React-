import React from "react";
import TodoItem from "../TodoItem";
import Input from "../Input";
import { Data } from "../../App";

type TodoListProps = {
  data: Data[];
  onCheckboxChange: (id: number) => void;
  setData: (data: Data[]) => void;
};

const TodoList: React.FC<TodoListProps> = ({ data, onCheckboxChange, setData }) => {
  return (
    <div>
      <Input setData={setData} data={data} placeholder="Add a new ToDo List" />
      {data.map((user) => (
        <TodoItem
          key={user.id}
          id={user.id}
          userId={user.userId}
          title={user.title}
          completed={user.completed}
          onCheckboxChange={onCheckboxChange}
          setData={setData}
          data={data}
        />
      ))}
    </div>
  );
};

export default TodoList;
