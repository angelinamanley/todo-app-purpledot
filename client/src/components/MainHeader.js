import { Header, Icon } from "semantic-ui-react";

const MainHeader = () => {
  return (
    <div style={{align: 'center'}}>
      <Header textAlign="center" as="h2">
        <Icon name="circle" color="violet" />
        <Header.Content>The Eternal To Do List</Header.Content>
      </Header>
    </div>
  );
};

export default MainHeader;
