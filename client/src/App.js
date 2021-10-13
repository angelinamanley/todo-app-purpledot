import "./App.css";
import { Button } from "semantic-ui-react";
import { useEffect, useState } from "react";
import MainHeader from './components/MainHeader'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const sample_tasks = [{ task: "do this", completed: 0, task_id: 1 }, 
{ task: "do that", completed: 1, task_id: 2}, 
{ task: "do nothing", completed: 1, task_id: 3 }];

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(sample_tasks)
  }, [])


  return (
    <div className="App">
      <MainHeader />
      <AddTask />
      <Tasks tasks={tasks}></Tasks>
      
    </div>
  );
}

export default App;
