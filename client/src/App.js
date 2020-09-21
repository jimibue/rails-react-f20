import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import TodoList from "./components/TodoList";
import axios from "axios";
import TodoForm from "./components/TodoForm";

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
        alert("error occurred fetching todos");
      });
    //UPDATE todos state
  }, []);

  const addItem = (name) => {
    //  API CALL TO ADD ITEM
    axios
      .post("/api/items", { name: name, complete: false })
      .then((res) => {
        // res.data is the single todo from database
        //UPDATE todos state (IE UPDATE UI)
        setTodos([...todos, res.data]);
      })
      .catch((err) => {
        alert("error occurred creating todo");
      });
  };

  const updateItem = (id) => {
    // API CALL TO UPDATE ITEM
    axios
      .put(`/api/items/${id}`)
      .then((res) => {
        const updatedTodos = todos.map((todo) => {
          // if (todo.id === id) {
          if (todo.id === res.data.id) {
            return res.data;
          }
          return todo;
        });
        setTodos(updatedTodos);
      })
      .catch((err) => {
        alert("update didn't work");
      });
  };

  const deleteItem = (id) => {
    // API CALL TO DELETe ITEM
    //axios call removes from database
    axios
      .delete(`/api/items/${id}`)
      .then((res) => {
        //has been removed from database but here need to update UI
        setTodos(todos.filter((todo) => todo.id !== res.data.item.id));
      })
      .catch((err) => {
        //let user know something didn't work
        alert("delete didn't work");
      });
    console.log(id);
    //UPDATE todos state
  };

  return (
    <Container>
      <h1>Todo</h1>
      <TodoForm addItem={addItem} />
      <TodoList updateItem={updateItem} deleteItem={deleteItem} todos={todos} />
    </Container>
  );
}

export default App;
