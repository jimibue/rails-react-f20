import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const TodoForm = ({ addItem }) => {
  // state = { name: "" };
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(name); //need this from props
    setName("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label="Todo"
        placeholder="Add A Todo"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </Form>
  );
};

export default TodoForm;
