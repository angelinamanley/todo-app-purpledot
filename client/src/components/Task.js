import { Segment, Button } from "semantic-ui-react";

const Task = (props) => {
  const { task } = props;
  return (
    <div>
      <Segment clearing textAlign='left' color={task.completed === 0 ? "green" : "red"}>{task.task}
      <Button.Group floated='right'>
      <Button color='grey'/>

      <Button color='red' content='Remove' onClick={() => props.onDelete(task.task_id)}/>
      </Button.Group>
      </Segment>
    </div>
  );
};

export default Task;
