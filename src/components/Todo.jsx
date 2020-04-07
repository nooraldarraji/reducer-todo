import React from "react";

const Todo = props => {
  console.log(props, "Todo props");
  return (
    <div>
      {/*  className={`task${props.item.completed ? " completed" : ""}`}
     /*onClick={() => props.toggleItem(props.item.id)}*/}
      {props.item.item}
    </div>
  );
};

export default Todo;

/*
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
*/
