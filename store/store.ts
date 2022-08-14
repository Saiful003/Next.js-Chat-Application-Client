import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";

import messageSlice from "../features/messageSlice";
import roomSlice from "../features/roomSlice";
import socketSlice from "../features/socketSlice";
import themeSlice from "../features/themeSlice";

const store = configureStore({
  reducer: {
    userMessage: messageSlice,
    siteTheme: themeSlice,
    siteAuth: authSlice,
    siteSocket: socketSlice,
    siteRoom: roomSlice,
  },
});
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
