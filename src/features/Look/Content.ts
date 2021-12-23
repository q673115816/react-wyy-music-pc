import socket from "./socket";
import { Socket } from "socket.io-client";
export const SOCKET_CONNECT = "SOCKET_CONNECT";
export const SOCKET_DISCONNECT = "SOCKET_DISCONNECT";
export const SOCKET_DESKTOP_START = "SOCKET_DESKTOP_START";
export const SOCKET_DESKTOP_END = "SOCKET_DESKTOP_END";
export const SOCKET_USER_START = "SOCKET_USER_START";
export const SOCKET_USER_END = "SOCKET_USER_END";
export const SOCKET_PUSH_START = "SOCKET_PUSH_START";
export const SOCKET_PUSH_END = "SOCKET_PUSH_END";
export const SOCKET_JOIN_START = "SOCKET_JOIN_START";
export const SOCKET_JOIN_END = "SOCKET_JOIN_END";

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
    case SOCKET_DESKTOP_START:
      return;
    case SOCKET_DESKTOP_END:
      return;
    case SOCKET_USER_START:
      return;
    case SOCKET_USER_END:
      return;
    case SOCKET_PUSH_START:
      return;
    case SOCKET_PUSH_END:
      return;
    case SOCKET_JOIN_START:
      return;
    default:
      return draft;
  }
};

export const LookInitialState: LookState = {
  socket,
};
