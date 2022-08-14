import React from "react";
interface IProps {
  role: string;
  children: React.ReactNode;
}

function LogSignTemp({ role, children }: IProps) {
  return (
    <div className="flex flex-col gap-3 items-center bg-white py-5">
      <div className="flex-1 text-center">
        <h2 className=" text-3xl font-semibold"> {role} </h2>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default LogSignTemp;
