import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  profileTheme: "",
};

const themeSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (
      state,
      action: PayloadAction<{
        username: string;
        color: string;
      }>
    ) => {
      state.user = action.payload.username;
      state.profileTheme = action.payload.color;
    },
  },
});

export const { addUser } = themeSlice.actions;
export default themeSlice.reducer;
