import React, { useState } from "react";
import { Todo } from "../constant";
import { addTodo } from "../api";

interface TodoInputProp {
  setState: (a: Todo) => void;
}

export const TodoInput = ({ setState }: TodoInputProp) => {
  const [title, setTitle] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newTodo: Todo = {
      title,
      status: false,
    };
    addTodo(newTodo).then((res) => {
      console.log(res);
      setState(res);
    });
    // console.log(newTodo);

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={handleChange} />
        <button>Add Todo</button>
      </form>
    </div>
  );
};
