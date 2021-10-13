import { Form, Button, Message } from "semantic-ui-react";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!task) return alert("Please provide a task to add.");
    onAdd({ task, completed: 0 });
    setTask("");
  };

  return (
    <div style={{ padding: "5%" }}>
      <Form onSubmit={onSubmit}>
        <Form.Input
          onChange={(e) => setTask(e.target.value)}
          value={task}
          placeholder="What do you need to do?"
        />
        <Button>Add Task</Button>
      </Form>
    </div>
  );
};

export default AddTask;
