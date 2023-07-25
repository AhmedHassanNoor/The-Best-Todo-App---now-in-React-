import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import Spinner from "./components/Spinner";
import "./App.css";

export type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const App = () => {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      if (data.length === 0) {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/todos");

          const list = await response.json();
          setData(list.slice(0, 5));
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (itemId: number) => {
    setData((prevData) =>
      prevData.map((item) => (item.id === itemId ? { ...item, completed: !item.completed } : item))
    );
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="App">
          <h1>The Best Todo App</h1>
          <TodoList data={data} onCheckboxChange={handleCheckboxChange} setData={setData} />
        </div>
      )}
    </>
  );
};

export default App;
