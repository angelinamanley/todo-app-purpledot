import { Segment, Container } from "semantic-ui-react";
import Task from './Task'

const Tasks = (props) => {
  const { tasks } = props;
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.task_id} task={task} {...props} />
      ))}
      <Container>
        <Segment.Group></Segment.Group>
      </Container>
    </div>
  );
};

export default Tasks;
