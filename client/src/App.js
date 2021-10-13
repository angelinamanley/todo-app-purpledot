import "./App.css";
import { Button } from "semantic-ui-react";
import { useEffect, useState } from "react";
import MainHeader from "./components/MainHeader";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import API from "./adapters/API";
import FilterBar from "./components/FilterBar";
import DeleteAll from "./components/DeleteAll";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterParam, setFilterParam] = useState("all");

  const selectedTasks = () => {
    let filteredTasks;
    if (filterParam === "completed") {
      filteredTasks = tasks.filter((task) => task.completed === 1);
    } else if (filterParam === "incomplete") {
      filteredTasks = tasks.filter((task) => task.completed === 0);
    } else {
      filteredTasks = tasks;
    }
    return filteredTasks;
  };

  useEffect(() => {
    API.getTasks().then((newTasks) => {
      setTasks(newTasks);
    });
  }, []);

  const addTask = (task) => {
    API.createTask(task).then((id) =>
      setTasks([...tasks, { ...task, task_id: id }])
    );
  };

  const deleteTask = (id) => {
    API.deleteTask(id).then(() => {
      setTasks(tasks.filter((task) => id !== task.task_id));
    });
  };

  const updateTask = (task) => {
    const newStatus = task.completed === 0 ? 1 : 0;
    const newTask = { ...task, completed: newStatus };
    API.updateTask(newTask).then(() => {
      const newTasks = tasks.map((oldTask) =>
        oldTask.task_id === task.task_id ? newTask : oldTask
      );
      setTasks(newTasks);
    });
  };

  const deleteAllTasks = () => {
    API.deleteTasks().then(() => {
      const newTasks = tasks.filter(task => task.completed !== 1)
      setTasks(newTasks);
    });
  };

  return (
    <div className="App">
      <MainHeader />
      <AddTask onAdd={addTask} />
      <FilterBar onSelect={setFilterParam} />
      <Tasks
        onUpdate={updateTask}
        onDelete={deleteTask}
        tasks={selectedTasks()}
      ></Tasks>
      <DeleteAll onDelete={deleteAllTasks} />
    </div>
  );
}

export default App;
