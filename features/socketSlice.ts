import {
  IPayloadForConnectingUser,
  IPayloadForSendingMessage,
} from "./../types/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

export const socket = io("https://next-js-chat-application-server.vercel.app/");

interface IPayloadAction {
  message: string;
  user: string;
  id: string;
  color: string;
}

const initialState: {
  chatMessages: IPayloadAction[];
} = {
  chatMessages: [],
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    connectingUser: (_, action: PayloadAction<IPayloadForConnectingUser>) => {
      socket.emit("connectingUser", action.payload);
    },
    sendingMessage: (
      state,
      action: PayloadAction<IPayloadForSendingMessage>
    ) => {
      socket.emit("sendingMessage", action.payload);
      state.chatMessages = [...state.chatMessages, action.payload];
    },
    receivingMessage: (
      state,
      action: PayloadAction<IPayloadForSendingMessage>
    ) => {
      state.chatMessages = [...state.chatMessages, action.payload];
    },
    typingEvent: (
      _,
      action: PayloadAction<{ user: string; isTyping: boolean; color: string }>
    ) => {
      socket.emit("typingEvent", {
        user: action.payload.user,
        room: "Shanto's Romm",
        isTyping: action.payload.isTyping,
        color: action.payload.color,
      });
    },
    soundEvent: (_, action: PayloadAction<{ user: string }>) => {
      socket.emit("messageSound", {
        user: action.payload.user,
      });
    },
  },
});

export const {
  connectingUser,
  sendingMessage,
  receivingMessage,
  typingEvent,
  soundEvent,
} = socketSlice.actions;
export default socketSlice.reducer;
