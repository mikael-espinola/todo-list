import { createSlice } from "@reduxjs/toolkit";

const cloudTodos = localStorage.getItem("todos");
const todosStrings = cloudTodos !== null ? JSON.parse(cloudTodos) : [];
export interface Todo {
  id: number;
  title: string;
  description: string;
  finalDate: string;
  status: boolean;
}
interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: todosStrings,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      const { title, description, finalDate } = action.payload;
      const id = state.todos.length + 1;
      state.todos.push({ id, title, description, finalDate, status: false });

      localStorage.setItem(
        "todos",
        JSON.stringify(state.todos.map((todo) => todo))
      );
    },
    deleteTodo(state, action) {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);

      localStorage.setItem(
        "todos",
        JSON.stringify(state.todos.map((todo) => todo))
      );

      return state;
    },
    completeTodo(state, action) {
      const id = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              finalDate: new Date().toLocaleString(),
              status: !todo.status,
            }
          : todo
      );
      localStorage.setItem(
        "todos",
        JSON.stringify(state.todos.map((todo) => todo))
      );

      return state;
    },
    editTodo(state, action) {
      const { isId, title, description, finalDate } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === isId
          ? {
              ...todo,
              title: title,
              description: description,
              finalDate: finalDate,
            }
          : todo
      );
      localStorage.setItem(
        "todos",
        JSON.stringify(state.todos.map((todo) => todo))
      );

      return state;
    },
  },
});

export const { addTodo, deleteTodo, completeTodo, editTodo } =
  todoSlice.actions;
export const todosList = (state: { todosList: TodoState }) =>
  state.todosList.todos;
export const todoReducer = todoSlice.reducer;
