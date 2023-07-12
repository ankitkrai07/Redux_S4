import React, { useEffect, useState } from "react";
import { TodoInput } from "./TodoInput";
import { Todo } from "../constant";
import { getTodos } from "../api";
import { TodoItem } from "./TodoItem";

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos().then((res) => {
      // console.log(res);
      setTodos(res);
    });
  });
  return (
    <div>
      <TodoInput />
      {todos.map((el) => {
        return <TodoItem key={el.id} {...el} />;
      })}
    </div>
  );
};
