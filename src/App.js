import React, { useState, useReducer } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Reducer, initialState } from "./reducers/Reducer";

function App() {
  const [task, setTask] = useState("");
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    setTask([...task, newTask]);
    console.log(newTask, "new task : ");
  };

  const toggleItem = id => {
    setTask(
      task.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    );
  };

  const clearCompleted = () => {
    setTask(task.filter(task => !task.completed));
  };
  console.log(state);
  return (
    <div>
      <h2>Welcome to your Todo App!</h2>
      <TodoForm dispatch={dispatch} />
      <TodoList
        todo={state}
        toggleItem={toggleItem}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;

/*
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
*/
