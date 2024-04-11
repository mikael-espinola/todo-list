import { createSlice } from "@reduxjs/toolkit";

interface Toggle {
  status: boolean;
}

const initialState: Toggle = {
  status: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState: initialState,
  reducers: {
    openStatus(state) {
      state.status = true;
    },
    closeStatus(state) {
      state.status = false;
    },
  },
});

export const { closeStatus, openStatus } = toggleSlice.actions;
export const currentAction = (state: { toggle: Toggle }) => state.toggle.status;
export const toggleReducer = toggleSlice.reducer;
