import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log(props);
  return (
    <div>
      {props.todo.map(thing => (
        <Todo item={thing} /*toggleItem={props.toggleItem}*/ />
      ))}
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoList;
