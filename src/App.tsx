import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import { FaPlus } from "react-icons/fa";

function App() {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState<any[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAddItemToList = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task) return;
    setItemsList([...itemsList, task]);
    setTask("");
  };

  return (
    <div className="main">
      <h1>Todo List</h1>
      <form className="form" onSubmit={handleAddItemToList}>
        <input
          type="text"
          placeholder="Enter your next task"
          value={task}
          onChange={handleChange}
        />
        <button>
          <FaPlus />
        </button>
      </form>
      <ul className="task-list">
        {itemsList.map((item, index) => {
          return (
            <li key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
