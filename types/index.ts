export interface IPayloadForConnectingUser {
  user: string;
  room: string;
}
export interface IPayloadForSendingMessage {
  message: string;
  user: string;
  color: string;
  id: string;
}
export interface IOption {
  label: string;
  value: string | number;
}
export interface IAllRooms {
  roomName: string;
}
