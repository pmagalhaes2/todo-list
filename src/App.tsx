import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from "react";
import "./App.css";
import { FaPlus, FaTrashAlt, FaEdit } from "react-icons/fa";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { EmptyList } from "./components/EmptyList/EmptyList";

function App() {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState(
    !localStorage.getItem("tasks")
      ? []
      : JSON.parse(localStorage.getItem("tasks")!)
  );
  const [index, setIndex] = useState(-1);
  const [taskError, setTaskError] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(itemsList));
  }, [itemsList]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAddItemToList = (
    e: FormEvent<HTMLFormElement> | MouseEvent<SVGElement>
  ) => {
    e.preventDefault();

    if (!task || itemsList.includes(task.trim()) || task.trim().length === 0) {
      setTaskError(true);
      setTask("");
      return;
    }

    const editedListItems = [...itemsList];

    setTaskError(false);

    if (index === -1) {
      setItemsList([...itemsList, task]);
      setTask("");
    } else {
      editedListItems[index] = task;
      setItemsList([...editedListItems]);
      setIndex(-1);
      setTask("");
    }
  };

  const handleDelete = (e: MouseEvent<SVGElement>, index: number) => {
    itemsList.splice(index, 1);
    setItemsList([...itemsList]);
  };

  const handleEdit = (e: MouseEvent<SVGElement>, id: number) => {
    setIndex(id);

    itemsList.filter((item: any, index: number) => {
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
          placeholder={
            taskError
              ? "Empty or already existing task!"
              : "Enter your next task"
          }
          value={task}
          onChange={handleChange}
        />
        <FaPlus onClick={handleAddItemToList} />
      </form>

      {itemsList.length > 0 ? (
        itemsList.map((item: any, index: number) => {
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
