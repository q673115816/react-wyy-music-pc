import io from "socket.io-client";
import { useAppDispatch } from "@/reducers/hooks";
import { createLiveSocket } from "@/reducers/live/slice";

const url: string = process.env.LIVE_URL;

const socket = io(url, {
  autoConnect: false,
});

socket.on("create-success", (data) => {
  console.log(data);
});

socket.on("join-success", (data) => {
  console.log(data);
});

socket.on("disconnect-success", (data) => {
  console.log(data);
});

export const useCreateSocket = () => {
  const dispatch = useAppDispatch();
  dispatch(createLiveSocket({ socket }));
  socket.connect();
};

export default socket;
