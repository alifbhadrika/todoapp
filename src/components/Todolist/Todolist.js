import React from "react";

function Todolist(props) {
  return (
    <ul>
      {props.todos.map((todo, i) => (
        <li
          key={todo.todo}
          onClick={() => props.completeToggle(i)}
          style={{
            textDecoration: todo.isCompleted ? "line-through" : "",
          }}
        >
          {todo.todo}
        </li>
      ))}
    </ul>
  );
}

export default Todolist;
