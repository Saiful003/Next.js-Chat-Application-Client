import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  message: "",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    clearInput: (state) => {
      state.message = "";
    },
  },
});

export const { setMessage, clearInput } = messageSlice.actions;
export default messageSlice.reducer;
