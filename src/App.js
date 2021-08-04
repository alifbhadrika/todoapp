import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Todolist from "./components/Todolist/Todolist";
import Form from "./components/Form/Form";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(1);

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: count,
        todo: text,
        isCompleted: false,
      },
    ]);
    setCount(count + 1);
    setText("");
  };
  const completeToggle = (idx) => {
    setTodos(
      todos.map((todo, i) =>
        i === idx
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
            }
          : todo
      )
    );
  };
  return (
    <div className="App">
      <Header text="TODOs" />
      <Todolist todos={todos} completeToggle={completeToggle} />
      <Form
        text={text}
        textHandler={textHandler}
        submitHandler={submitHandler}
        count={count}
      />
    </div>
  );
}

export default App;
