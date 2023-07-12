import React, { useEffect, useState } from "react";
import { TodoInput } from "./TodoInput";
import { Todo } from "../constant";
import { getTodos } from "../api";
import { TodoItem } from "./TodoItem";

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const [state, setState] = useState<number>(0);

  const handleReRender = (newTodo: Todo) => {
    // setState((prev) => prev + 1);
    setTodos((prev) => [...prev, newTodo]);
  };

  useEffect(() => {
    getTodos().then((res) => {
      // console.log(res);
      setTodos(res);
    });
  });
  return (
    <div>
      <TodoInput setState={handleReRender} />
      {todos.map((el) => {
        return <TodoItem key={el.id} {...el} />;
      })}
    </div>
  );
};
