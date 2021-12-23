import { configuration } from "./config";

export default class {
  pc: RTCPeerConnection;
  remoteStreams: MediaStream[] = [];
  description: RTCLocalSessionDescriptionInit | null = null;
  constructor() {
    this.pc = new RTCPeerConnection(configuration);
    this.init();
  }

  init() {
    this.pc.onicecandidate = (e) => {
      console.log("pc onicecandidate");
      const peerConnection = e.target;
      const iceCandidate = e.candidate;
      if (iceCandidate) {
        const newIceCandidate = new RTCIceCandidate(iceCandidate);
        // const otherPeer;
      }
    };
    this.pc.onconnectionstatechange = (e) => {
      console.log("pc onconnectionstatechange");
      switch (this.pc.connectionState) {
        case "connected":
          // The connection has become fully connected
          break;
        case "disconnected":
        case "failed":
          // One or more transports has terminated unexpectedly or in an error
          break;
        case "closed":
          // The connection has been closed
          break;
      }
    };
    this.pc.ondatachannel = function (ev) {
      console.log("Data channel is created!");
      ev.channel.onopen = function () {
        console.log("Data channel is open and ready to be used.");
      };
    };
    this.pc.onicecandidateerror = function (event) {
      console.log("pc onicecandidateerror");
      if (event.errorCode >= 300 && event.errorCode <= 699) {
        // STUN errors are in the range 300-699. See RFC 5389, section 15.6
        // for a list of codes. TURN adds a few more error codes; see
        // RFC 5766, section 15 for details.
      } else if (event.errorCode >= 700 && event.errorCode <= 799) {
        // Server could not be reached; a specific error number is
        // provided but these are not yet specified.
      }
    };

    this.pc.oniceconnectionstatechange = (event) => {
      console.log("pc oniceconnectionstatechange");
      if (
        this.pc.iceConnectionState === "failed" ||
        this.pc.iceConnectionState === "disconnected" ||
        this.pc.iceConnectionState === "closed"
      ) {
        // Handle the failure
      }
    };

    this.pc.onicegatheringstatechange = () => {
      console.log("pc onicegatheringstatechange");
      let label = "Unknown";

      switch (this.pc.iceGatheringState) {
        case "new":
        case "complete":
          label = "Idle";
          break;
        case "gathering":
          label = "Determining route";
          break;
      }
      console.log(label);
    };

    this.pc.onnegotiationneeded = () => {
      console.log("pc onnegotiationneeded");
      this.pc
        .createOffer()
        .then((offer) => {
          console.log("setLocalDescription");
          return this.pc.setLocalDescription(offer);
        })
        .then(function () {
          // Send the offer to the remote peer through the signaling server
        })
        .catch((error) => console.log(error));
    };

    this.pc.onsignalingstatechange = (event) => {
      console.log("pc onsignalingstatechange");
      if (this.pc.signalingState === "have-local-pranswer") {
        // setLocalDescription() has been called with an answer
      }
    };

    this.pc.ontrack = (e) => {
      this.remoteStreams = e.streams.slice();
    };
  }

  addtrack({
    track,
    stream,
  }: {
    track: MediaStreamTrack;
    stream: MediaStream;
  }) {
    this.pc.addTrack(track, stream);
  }

  start() {
    this.pc
      .createOffer()
      .then((description) => {
        this.description = description;
        console.log(description);
        return this.pc.setLocalDescription(description);
      })
      .then(() => {
        console.log(this.pc);
      })
      .catch((error) => {
        console.log("createAnswer error \n", error);
      });
  }

  got(description: RTCSessionDescriptionInit) {
    this.pc.setRemoteDescription(description).then(() => {});
  }
}
