import { createSlice } from "@reduxjs/toolkit";

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
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      const { title, description, finalDate } = action.payload;
      const id = state.todos.length + 1;
      state.todos.push({ id, title, description, finalDate, status: false });
    },
    deleteTodo(state, action) {
      const id = action.payload;
      const newArray = state.todos.filter((todo) => todo.id !== id);
      return {
        ...state,
        todos: newArray,
      };
    },
    completeTodo(state, action) {
      const id = action.payload;
      let updated = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status };
        } else {
          return todo;
        }
      });
      return {
        ...state,
        todos: updated,
      };
    },
  },
});

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;
export const todosList = (state: { todosList: TodoState }) =>
  state.todosList.todos;
export const todoReducer = todoSlice.reducer;
