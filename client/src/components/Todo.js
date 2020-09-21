import React from "react";
import { Checkbox, Header, Icon, Button } from "semantic-ui-react";

const Todo = ({ id, complete, name, updateTodo, deleteTodo }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <Checkbox checked={complete} onClick={() => updateTodo(id)} />
      <div style={complete ? styles.complete : {}} className="center">
        <Header as="h2" style={{ marginLeft: "15px" }}>
          {name}
        </Header>
      </div>
    </div>
    <Button
      icon
      color="red"
      size="tiny"
      style={{ marginLeft: "15px" }}
      onClick={() => deleteTodo(id)}
    >
      <Icon name="trash" />
    </Button>
  </div>
);

const styles = {
  complete: {
    textDecoration: "line-through",
    color: "grey",
  },
  pointer: {
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
};

export default Todo;
