import io from "socket.io-client";

const socket = io(LIVE_URL, {
  autoConnect: false,
});

socket.on("create-success", (data) => {
  console.log("create-success", data);
});

socket.on("create-error", (data) => {
  console.log("create-error", data);
});

socket.on("join-success", (data) => {
  console.log("join-success", data);
});

socket.on("join-info", (data) => {
  console.log("join-info", data);
});

socket.on("disconnect-success", (data) => {
  console.log("disconnect-success", data);
});

socket.on("private", (data) => {
  console.log("private", data);
});

socket.on("publish", (data) => {
  console.log("publish", data);
});

export default socket;
