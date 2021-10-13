import { Segment, Button } from "semantic-ui-react";

const Task = (props) => {
  const { task } = props;
  return (
    <div>
      <Segment
        clearing
        textAlign="left"
        color={task.completed === 0 ? "red" : "green"}
      >
        {task.task}
        <Button.Group floated="right">
          <Button
          size='mini'
            color="grey"
            onClick={() => props.onUpdate(task)}
            content={props.task.completed === 0 ? "Mark as done" : "Undo done"}
          />
          <Button
          size='mini'
            color="red"
            content="Remove"
            onClick={() => props.onDelete(task.task_id)}
          />
        </Button.Group>
      </Segment>
    </div>
  );
};

export default Task;
