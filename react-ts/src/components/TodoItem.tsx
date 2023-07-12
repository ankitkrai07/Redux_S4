import React from "react";
import { Todo } from "../constant";
import { toggleTodos } from "../api";

interface TodoItemProp extends Todo {
  handleReRender: (a: Todo) => void;
}

export const TodoItem = ({
  id,
  title,
  status,
  handleReRender,
}: TodoItemProp) => {
  const handleToogle = () => {
    toggleTodos(id, status);
  };

  return (
    <div>
      <h3>
        Title:{title} - Status {status ? "True" : "False"}
      </h3>
      <button onClick={handleToogle}>Toogle</button>
    </div>
  );
};
