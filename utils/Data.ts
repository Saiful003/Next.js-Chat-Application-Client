import { IAllRooms, IOption } from "./../types/index";

export const colors: IOption[] = [
  { label: "Purple", value: "purple" },
  { label: "Orange", value: "orange" },
  { label: "Green", value: "green" },
];
export const rooms: IOption[] = [
  { label: "Friend", value: "friend" },
  { label: "Client", value: "client" },
  { label: "Other", value: "other" },
];

export const allRooms: IAllRooms[] = [
  { roomName: "Friends" },
  { roomName: "Clients" },
  { roomName: "Others" },
];
