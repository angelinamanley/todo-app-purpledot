import "./App.css";
import { Button } from "semantic-ui-react";
import { useEffect, useState } from "react";
import MainHeader from "./components/MainHeader";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import API from "./adapters/API";

function App() {
  const [tasks, setTasks] = useState([]);

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

  return (
    <div className="App">
      <MainHeader />
      <AddTask onAdd={addTask} />
      <Tasks onDelete={deleteTask} tasks={tasks}></Tasks>
    </div>
  );
}

export default App;
