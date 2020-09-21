import React from "react";
import Todo from "./Todo";

// Should be a functional component because it
// has no state or lifcycle methods
class TodoList extends React.Component {
  getTodos() {
    return this.props.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          {...todo}
          deleteTodo={this.props.deleteItem}
          updateTodo={this.props.updateItem}
        />
      );
    });
  }
  render() {
    return (
      <div>
        {/* ? why don't we need return here */}
        {/* {this.props.todos.map((todo) => {
          return <Todo key={todo.id} {...todo} />;
        })} */}
        {this.getTodos()}
      </div>
    );
  }
}

export default TodoList;
