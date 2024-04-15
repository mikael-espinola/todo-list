import { configureStore } from "@reduxjs/toolkit";
import { Todo, todoReducer } from "./todoSlice";
import { toggleReducer } from "./toggleSlice";
import { editReducer } from "./editingSlice";

const store = configureStore({
  reducer: {
    todosList: todoReducer,
    toggle: toggleReducer,
    editTodo: editReducer,
  },
});

export default store;
