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
  status: {
    connect: boolean;
    deskTop: boolean;
    user: boolean;
    push: boolean;
    faceDetector: boolean;
  };
  socket: Socket;
}

export const LookReducer = (draft: LookState, { type, payload }: any) => {
  switch (type) {
    case SOCKET_CONNECT:
      socket.connect();
      draft.status.connect = true;
      return;
    case SOCKET_DISCONNECT:
      socket.disconnect();
      draft.status.connect = false;
      return;
    case SOCKET_DESKTOP_START:
      draft.status.deskTop = true;
      return;
    case SOCKET_DESKTOP_END:
      draft.status.deskTop = false;
      return;
    case SOCKET_USER_START:
      draft.status.user = true;
      return;
    case SOCKET_USER_END:
      draft.status.user = false;
      return;
    case SOCKET_PUSH_START:
      draft.socket.emit("create", payload);
      draft.status.push = true;
      return;
    case SOCKET_PUSH_END:
      draft.socket.emit("close", payload);
      draft.status.push = false;
      return;
    case SOCKET_JOIN_START:
      draft.socket.emit("join", payload);
      return;
    default:
      return draft;
  }
};

export const LookInitialState: LookState = {
  status: {
    connect: false,
    deskTop: false,
    user: false,
    push: false,
    faceDetector: false,
  },
  socket,
};
