import socket from "./socket";
import { Socket } from "socket.io-client";
export const SOCKET_CONNECT = "SOCKET_CONNECT";
export const SOCKET_DISCONNECT = "SOCKET_DISCONNECT";

export interface LookState {
  socket: Socket;
}

export const LookReducer = (draft: LookState, { type, payload }: any) => {
  switch (type) {
    case SOCKET_CONNECT:
      socket.connect();
      return;
    case SOCKET_DISCONNECT:
      socket.disconnect();
      return;
    default:
      return draft;
  }
};

export const LookInitialState: LookState = {
  socket,
};
