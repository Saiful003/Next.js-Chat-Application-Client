import { getFirstLetter } from "../utils/getFirstLetter";

interface IProps {
  username: string;
}

function Users({ username }: IProps) {
  return (
    <div className="flex items-center gap-2 hover:bg-slate-100 transition-colors cursor-pointer p-2">
      <div className="border w-10 h-10 bg-slate-200 flex items-center justify-center rounded-full">
        <p> {getFirstLetter(username)} </p>
      </div>
      <h2> {username} </h2>
    </div>
  );
}

export default Users;
