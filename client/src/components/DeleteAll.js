import { Button } from "semantic-ui-react";

const DeleteAll = (props) => {
  return (
    <div style={{padding: '10px'}}>
      <Button
        color="red"
        onClick={() => props.onDelete()}
        content="Clear all Completed"
      />
    </div>
  );
};

export default DeleteAll;
