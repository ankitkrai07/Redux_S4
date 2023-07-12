export interface Todo {
  id: number;
  title: string;
  status: boolean;
}

export interface NewTodo {
  id?: number;
  title: string;
  status: boolean;
}
