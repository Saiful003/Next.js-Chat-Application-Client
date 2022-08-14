import classNames from "classnames";
import React from "react";

interface IProps {
  icon: React.ReactNode;
  isRightIcon?: boolean;
  text?: string;
  isNoTextInMobile?: boolean;
  noText?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

function IconButton({
  icon,
  isRightIcon,
  text,
  isNoTextInMobile,
  noText,
  onClick,
}: IProps) {
  return (
    <a
      onClick={onClick}
      className={`w-max flex select-none items-center gap-2 border px-2 py-1 rounded-md cursor-pointer bg-white hover:bg-neutral-100 ${
        isRightIcon && "flex-row-reverse"
      }`}
    >
      <div> {icon} </div>
      <div
        className={classNames(
          { "hidden lg:block": isNoTextInMobile },
          { hidden: noText }
        )}
      >
        {text}
      </div>
    </a>
  );
}

export default IconButton;
