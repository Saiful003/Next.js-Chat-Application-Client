import { useRoom } from "../hooks/useRoom";

interface IProps {
  roomName: string;
}

function Room({ roomName }: IProps) {
  const { callAddRoom } = useRoom();
  return (
    <div
      onClick={() => callAddRoom(roomName)}
      className="flex items-center gap-2 p-2 cursor-pointer px-2 hover:bg-slate-100 transition-colors"
    >
      <h2>{roomName}</h2>
    </div>
  );
}

export default Room;
