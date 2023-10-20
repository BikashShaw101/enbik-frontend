import { createSlice } from "@reduxjs/toolkit";

const counInitialState = { number: 0 };
const countSlice = createSlice({
  name: "count",
  initialState: counInitialState,
  reducers: {
    countChange(state, action) {
      state.number = action.payload;
    },
  },
});

const countActions = countSlice.actions;
const countReducer = countSlice.reducer;

export { countActions, countReducer };
