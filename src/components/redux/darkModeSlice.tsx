import { createSlice } from "@reduxjs/toolkit";

const cloudMode = localStorage.getItem("mode");
const realValue = cloudMode !== null ? JSON.parse(cloudMode) : "light";

interface State {
  status: boolean;
  theme: string;
}

const initialState: State = {
  status: false,
  theme: realValue,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleStatus(state, action) {
      state.status = !state.status;
      state.theme = action.payload;

      localStorage.setItem("mode", JSON.stringify(state.theme));
    },
  },
});

export const { toggleStatus } = darkModeSlice.actions;
export const currentStatus = (state: { darkMode: State }) =>
  state.darkMode.status;
export const currentTheme = (state: { darkMode: State }) =>
  state.darkMode.theme;
export const darkModeReducer = darkModeSlice.reducer;
