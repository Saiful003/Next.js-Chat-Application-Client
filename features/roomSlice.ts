import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  selectedRoom: "",
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    addRoom: (state, action: PayloadAction<string>) => {
      state.selectedRoom = action.payload;
    },
  },
});

export const { addRoom } = roomSlice.actions;
export default roomSlice.reducer;
