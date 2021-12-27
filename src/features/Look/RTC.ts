import { configuration } from "./config";

export default class {
  pc: RTCPeerConnection;
  remoteStreams: MediaStream[] = [];
  constructor() {
    this.pc = new RTCPeerConnection(configuration);
    this.init();
  }

  get localDescription() {
    return this.pc.localDescription;
  }
  get remoteDescription() {
    return this.pc.remoteDescription;
  }

  init() {
    this.pc.onicecandidate = (event) => {
      console.log("pc onicecandidate", event);
      const iceCandidate = event.candidate;
      if (iceCandidate) {
        const IceCandidate = new RTCIceCandidate(iceCandidate);
        console.log(IceCandidate);
        // const otherPeer;
      }
    };
    this.pc.onconnectionstatechange = (event) => {
      console.log("pc onconnectionstatechange", event);
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
    this.pc.ondatachannel = function (event) {
      console.log("Data channel is created!", event);
      event.channel.onopen = function () {
        console.log("Data channel is open and ready to be used.");
      };
    };
    this.pc.onicecandidateerror = function (event) {
      console.log("pc onicecandidateerror", event);
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
      console.log("pc oniceconnectionstatechange", event);
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
      console.log("pc onsignalingstatechange", event);
      if (this.pc.signalingState === "have-local-pranswer") {
        // setLocalDescription() has been called with an answer
      }
    };

    this.pc.ontrack = (e) => {
      this.remoteStreams = e.streams.slice();
    };
  }

  addTrack({
    track,
    mediaStream,
  }: {
    track: MediaStreamTrack;
    mediaStream: MediaStream;
  }) {
    this.pc.addTrack(track, mediaStream);
  }

  async start() {
    try {
      const localDescription = await this.pc.createOffer();
      await this.pc.setLocalDescription(localDescription);
    } catch (e) {
      console.log("createOffer error \n", e);
    }
  }

  async got(description: RTCSessionDescriptionInit) {
    try {
      await this.pc.setRemoteDescription(description);
      const localDescription = await this.pc.createAnswer();
      await this.pc.setLocalDescription(localDescription);
    } catch (e) {
      console.log("createAnswer error \n", e);
    }
  }
}
