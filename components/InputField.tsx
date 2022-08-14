import React, { useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useMessage } from "../hooks/useMessage";
import { useAuth } from "../hooks/useAuth";
import { v4 as uuidv4 } from "uuid";
import { useSocket } from "../hooks/useSocket";
import { socket } from "../features/socketSlice";

function InputField() {
  const { message, handleSetMessage, handleClearInput } = useMessage();
  const { user, profileTheme } = useAuth();
  const { sendMessage, receiveMessage, callTypingEvent } = useSocket();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (message) {
      sendMessage({ user, id: uuidv4(), color: profileTheme, message });
      callTypingEvent({ user, isTyping: false, color: profileTheme });
    }
    handleClearInput();
  };

  // grab the incoming message
  useEffect(() => {
    socket.on("receivingMessage", (data) => {
      receiveMessage(data);
    });
  }, [socket]);

  const handleInputChange = () => {
    callTypingEvent({ user, isTyping: true, color: profileTheme });
  };
  const handlewhenFocus = () => {
    callTypingEvent({ user, isTyping: true, color: profileTheme });
  };
  const handlewhenLeave = () => {
    callTypingEvent({ user, isTyping: false, color: profileTheme });
  };

  return (
    <div className="bg-white sticky bottom-0 flex items-center justify-between gap-2 border-t px-2 py-4">
      <form onSubmit={handleSubmit} className="w-full">
        <input
          value={message}
          className="w-full focus:outline-none bg-transparent"
          placeholder="Type your message here..."
          onChange={(e) => {
            handleInputChange();
            handleSetMessage(e.target.value);
          }}
          onFocus={handlewhenFocus}
          onBlur={handlewhenLeave}
        />
      </form>
      <div>
        <AiOutlineSend
          onClick={handleSubmit}
          className={`cursor-pointer text-xl ${message === "" && "hidden"}`}
        />
      </div>
    </div>
  );
}

export default InputField;
