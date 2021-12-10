import io from "socket.io-client";

const socket = io(LIVE_URL, {
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

export default socket;