export const configuration: RTCConfiguration = {
  iceServers: [
    {
      urls: [
        "stun:stun.xten.com",
        "stun:stun.services.mozilla.com",
        "stun:stun1.l.google.com:19302",
        "stun:stun2.l.google.com:19302",
      ],
    },
  ],
}
