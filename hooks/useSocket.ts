import {
  IPayloadForConnectingUser,
  IPayloadForSendingMessage,
} from "./../types/index";
import { useAppDispatch, useAppSelector } from "./redux-hooks/tsVersionHooks";
import {
  connectingUser,
  sendingMessage,
  receivingMessage,
  typingEvent,
  soundEvent,
} from "../features/socketSlice";

export function useSocket() {
  const {
    siteSocket: { chatMessages },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  // function

  const connectUser = ({ user, room }: IPayloadForConnectingUser) => {
    dispatch(
      connectingUser({
        user,
        room,
      })
    );
  };

  const sendMessage = (data: IPayloadForSendingMessage) => {
    dispatch(sendingMessage(data));
  };

  const receiveMessage = (data: IPayloadForSendingMessage) => {
    dispatch(receivingMessage(data));
  };
  const callTypingEvent = ({
    user,
    isTyping,
    color,
  }: {
    user: string;
    isTyping: boolean;
    color: string;
  }) => {
    dispatch(typingEvent({ user, isTyping, color }));
  };

  const callSoundEvent = ({ user }: { user: string }) => {
    dispatch(soundEvent({ user }));
  };

  return {
    connectUser,
    sendMessage,
    receiveMessage,
    callTypingEvent,
    chatMessages,
    callSoundEvent,
  };
}
