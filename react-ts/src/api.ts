import axios from "axios";
import { Todo } from "./constant";

// export const addTodo = async { newTodo: Todo } = {
//     let res = await axios.post("http://localhost:8080/todos", newTodo);
// };

export const addTodo = async (newTodo: Todo) => {
  let res = await axios.post("http://localhost:8080/todos", newTodo);
};

export const getTodos = async () => {
  let res = await axios.get("http://localhost:8080/todos");
  //   console.log(res.data);

  return res.data;
};
