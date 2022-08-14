import { getFirstLetter } from "../utils/getFirstLetter";
import classes from "../styles/Mycss.module.css";
import classNames from "classnames";
import { useAuth } from "../hooks/useAuth";
import React from "react";
interface IProps {
  isOwn?: boolean;
  messages: string | React.ReactNode;
  username: string;
  color: string;
}

function UserMessage({ isOwn, messages, username, color }: IProps) {
  const { profileTheme } = useAuth();

  return (
    <div
      className={classNames(
        { [classes.myGridWhenOutgoingUser]: isOwn },
        { [classes.myGridWhenIncomingUser]: !isOwn }
      )}
    >
      <div
        style={{ backgroundColor: isOwn ? profileTheme : color }}
        className={classNames(
          "text-white flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full",
          classes.profile
        )}
      >
        <p> {getFirstLetter(username)} </p>
      </div>
      <div className={classNames(classes.username, "text-md text-gray-500")}>
        <h2>{username}</h2>
      </div>

      <div className={classNames(classes.chat)}>
        <p
          style={{ background: isOwn ? color : "" }}
          className={classNames(
            "rounded-full py-2 px-4",
            { "self-end rounded-full text-white": isOwn },
            { border: !isOwn }
          )}
        >
          {messages}
        </p>
      </div>
    </div>
  );
}

export default UserMessage;
