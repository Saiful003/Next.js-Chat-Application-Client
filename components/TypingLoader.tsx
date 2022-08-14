import React from "react";
import Dot from "./Dot";
function TypingLoader() {
  return (
    <>
      <div className="flex items-center gap-1 rounded-md py-2 px-4 ">
        <Dot />
        <Dot />
        <Dot />
      </div>
    </>
  );
}

export default TypingLoader;
