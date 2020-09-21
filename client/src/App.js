import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import TodoList from "./components/TodoList";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "dummy", complete: true },
    { id: 2, name: "dummy1", complete: false },
  ]);

  //componentDidMount() in a class

  // using [] as second arg makes useEffect act like CDM
  useEffect(() => {
    //API CALL TO GET TODOS
    // http://localhost:3001 is setup in proxy
    axios
      .get("/api/items")
      // .then(res => res.json()) skip this with axios, not with fetch
      .then((res) => {
        setTodos(res.data);
        //if error occurs inside of here code flow will go to catch clause
      })
      .catch((err) => {
        // good way for development to catch error but bad for production
        alert("error occured fetching todos");
      });
    //UPDATE todos state
  }, []);

  const addItem = (name) => {
    // API CALL TO ADD ITEM
    //UPDATE todos state
  };

  const updateItem = (id) => {
    // API CALL TO UPDATE ITEM
    //UPDATE todos state
  };

  const deleteItem = (id) => {
    // API CALL TO DELETe ITEM
    //UPDATE todos state
  };

  return (
    <Container>
      <h1>Todo</h1>
      <TodoList todos={todos} />
    </Container>
  );
}

export default App;
