import { useAppDispatch, useAppSelector } from "./redux-hooks/tsVersionHooks";
import { addRoom } from "../features/roomSlice";

export const useRoom = () => {
  const {
    siteRoom: { selectedRoom },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  //functios
  const callAddRoom = (roomName: string) => {
    dispatch(addRoom(roomName));
  };

  return {
    selectedRoom,
    callAddRoom,
  };
};
