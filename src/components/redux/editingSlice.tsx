import { createSlice } from "@reduxjs/toolkit";

export interface Id {
  identification: number;
}

const initialState: Id = {
  identification: 0,
};

const editTodoSlice = createSlice({
  name: "edit",
  initialState: initialState,
  reducers: {
    setTodoId(state, action) {
      state.identification = action.payload;
    },
    clearTodoId(state) {
      state.identification = 0;
    },
  },
});

export const { clearTodoId, setTodoId } = editTodoSlice.actions;
export const selectedId = (state: { editTodo: Id }) =>
  state.editTodo.identification;
export const editReducer = editTodoSlice.reducer;
