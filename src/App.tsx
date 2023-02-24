import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import "./App.css";
import { FaPlus, FaTrashAlt, FaEdit } from "react-icons/fa";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { EmptyList } from "./components/EmptyList/EmptyList";

function App() {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState<any[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAddItemToList = (
    e: FormEvent<HTMLFormElement> | MouseEvent<SVGElement>
  ) => {
    e.preventDefault();
    if (!task || itemsList.includes(task)) return;
    setItemsList([...itemsList, task]);
    setTask("");
  };

  const handleDelete = (e: MouseEvent<SVGElement>, index: number) => {
    itemsList.splice(index, 1);
    setItemsList([...itemsList]);
  };

  const handleEdit = (e: MouseEvent<SVGElement>, id: number) => {
    itemsList.filter((item, index) => {
      if (index === id) {
        setTask(item);
      }
    });
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
        <FaPlus onClick={handleAddItemToList} />
      </form>

      {itemsList.length > 0 ? (
        itemsList.map((item, index) => {
          return (
            <ul className="task-list" key={index}>
              <li>
                <Checkbox text={item} />
                <div className="icons-container">
                  <FaTrashAlt onClick={(e) => handleDelete(e, index)} />
                  <FaEdit onClick={(e) => handleEdit(e, index)} />
                </div>
              </li>
            </ul>
          );
        })
      ) : (
        <EmptyList />
      )}
    </div>
  );
}

export default App;
