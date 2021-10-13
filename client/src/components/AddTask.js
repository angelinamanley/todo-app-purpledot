import { Form, Button, Message } from "semantic-ui-react";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState("");

  return (
    <div style={{padding : "5%"}}>
      <Form>
        <Form.Input
          onChange={(e) => setTask(e.target.value)}
          value={task}
          placeholder="What do you need to do?"
        />
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default AddTask;
