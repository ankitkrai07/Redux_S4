import axios from "axios";
import { NewTodo, Todo } from "./constant";

// export const addTodo = async { newTodo: Todo } = {
//     let res = await axios.post("http://localhost:8080/todos", newTodo);
// };

export const addTodo = async (newTodo: NewTodo) => {
  let res = await axios.post("http://localhost:8080/todos", newTodo);
  return res.data;
};

export const getTodos = async () => {
  let res = await axios.get("http://localhost:8080/todos");
  //   console.log(res.data);

  return res.data;
};

export const toggleTodos = async (id: number) => {
  let res = await axios.patch(`http://localhost:8080/todos/${id}`, {
    status: !status,
  });
};
