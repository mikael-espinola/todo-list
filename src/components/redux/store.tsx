import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoSlice";
import { toggleReducer } from "./toggleSlice";

const store = configureStore({
  reducer: {
    todosList: todoReducer,
    toggle: toggleReducer,
  },
});

export default store;
