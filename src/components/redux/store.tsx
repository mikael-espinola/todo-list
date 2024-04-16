import { configureStore } from "@reduxjs/toolkit";
import { Todo, todoReducer } from "./todoSlice";
import { toggleReducer } from "./toggleSlice";
import { editReducer } from "./editingSlice";
import { darkModeReducer } from "./darkModeSlice";

const store = configureStore({
  reducer: {
    todosList: todoReducer,
    toggle: toggleReducer,
    editTodo: editReducer,
    darkMode: darkModeReducer,
  },
});

export default store;
