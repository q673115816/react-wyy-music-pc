import { configuration } from "./config";

interface iRTC {
  iceCandidateCallback: (candidate: RTCIceCandidate) => void;
  negotiationneededCallback: (description: RTCSessionDescription) => void;
}

export default class {
  pc: RTCPeerConnection;
  // remoteStreams: MediaStream[] = [];
  candidate: RTCIceCandidate | null = null;
  readonly iceCandidateCallback;
  negotiationneededCallback;
  constructor(config: iRTC) {
    const { iceCandidateCallback, negotiationneededCallback } = config;
    this.pc = new RTCPeerConnection(configuration);
    this.iceCandidateCallback = iceCandidateCallback;
    this.negotiationneededCallback = negotiationneededCallback;
    this.init();
  }

  get localDescription() {
    return this.pc.localDescription;
  }
  get remoteDescription() {
    return this.pc.remoteDescription;
  }

  get iceCandidate() {
    return this.candidate;
  }

  init() {
    this.pc.onicecandidate = (event) => {
      console.log("pc onicecandidate", event);
      const { candidate } = event;
      if (candidate) {
        this.candidate = candidate;
        console.log("candidate", candidate);
        this.iceCandidateCallback(candidate);
        // const otherPeer;
      }
    };
    this.pc.onconnectionstatechange = (event) => {
      console.log("pc onconnectionstatechange", event, this.pc.connectionState);
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
      console.log(
        "pc oniceconnectionstatechange",
        event,
        this.pc.iceConnectionState
      );
      if (
        this.pc.iceConnectionState === "failed" ||
        this.pc.iceConnectionState === "disconnected" ||
        this.pc.iceConnectionState === "closed"
      ) {
        // Handle the failure
      }
    };

    this.pc.onicegatheringstatechange = (event) => {
      console.log(
        "pc onicegatheringstatechange",
        event,
        this.pc.iceGatheringState
      );
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
      console.log("label", label);
    };

    this.pc.onnegotiationneeded = async (event) => {
      console.log("pc onnegotiationneeded", event);
      try {
        await this.pc.setLocalDescription(await this.pc.createOffer());
        this.negotiationneededCallback(
          this.pc.localDescription as RTCSessionDescription
        );
      } catch (error) {
        console.log("onnegotiationneeded error \n", error);
      }
    };

    this.pc.onsignalingstatechange = (event) => {
      console.log("pc onsignalingstatechange", event, this.pc.signalingState);
      if (this.pc.signalingState === "have-local-pranswer") {
        // setLocalDescription() has been called with an answer
      }
    };

    // this.pc.ontrack = (e) => {
    //   console.log("pc get track", e);
    //   this.remoteStreams = e.streams.slice();
    // };
  }

  addTrack(track: MediaStreamTrack) {
    this.pc.addTrack(track);
  }

  async start() {
    try {
      const localDescription = await this.pc.createOffer();
      await this.pc.setLocalDescription(localDescription);
    } catch (e) {
      console.log("createOffer error \n", e);
    }
  }

  async got(description: RTCSessionDescription) {
    try {
      await this.pc.setRemoteDescription(description);
      const localDescription = await this.pc.createAnswer();
      await this.pc.setLocalDescription(localDescription);
    } catch (e) {
      console.log("createAnswer error \n", e);
    }
  }

  async asd(iceCandidate: RTCIceCandidate) {
    try {
      await this.pc.addIceCandidate(iceCandidate);
      console.log("addIceCandidate success");
    } catch (e) {
      console.log("addIceCandidate error \n", e);
    }
  }
}
