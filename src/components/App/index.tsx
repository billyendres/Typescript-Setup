import React, { useState, FormEvent } from "react";
import GlobalStyle from "../GlobalStyle";

interface ITodo {
  text: string;
  complete: boolean;
}

const App = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodo] = useState<ITodo[]>([]);

  //event handler generic
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodo: ITodo[] = [...todos, { text, complete: false }];
    setTodo(newTodo);
  };

  const completeTodo = (index: number): void => {
    const newTodo: ITodo[] = [...todos];
    newTodo[index].complete = !newTodo[index].complete;
    setTodo(newTodo);
  };

  const removeTodo = (index: number): void => {
    const newTodo: ITodo[] = [...todos];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  return (
    <>
      <GlobalStyle />
      <h1>List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">Add To List</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => {
          return (
            <span key={index}>
              <div
                style={{
                  textDecoration: todo.complete ? "line-through" : "none"
                }}
              >
                {todo.text}
              </div>
              <button type="button" onClick={() => completeTodo(index)}>
                {todo.complete ? "Incomplete" : "Complete"}
              </button>
              <button type="button" onClick={() => removeTodo(index)}>
                &times;
              </button>
            </span>
          );
        })}
      </section>
    </>
  );
};

export default App;
