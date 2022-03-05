import { configuration } from "./config";

interface iRTC {
  iceCandidateCallback: (candidate: RTCIceCandidate) => void;
  negotiationneededCallback: (description: RTCSessionDescription) => void;
  trackCallback: (event: RTCTrackEvent) => void;
}

export default class {
  pc: RTCPeerConnection;
  // remoteStreams: MediaStream[] = [];
  candidate: RTCIceCandidate | null = null;
  readonly iceCandidateCallback;
  negotiationneededCallback;
  trackCallback;
  id: string | null = null;
  constructor(config: iRTC) {
    const { iceCandidateCallback, negotiationneededCallback, trackCallback } =
      config;
    this.pc = new RTCPeerConnection(configuration);
    this.iceCandidateCallback = iceCandidateCallback;
    this.negotiationneededCallback = negotiationneededCallback;
    this.trackCallback = trackCallback;
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
      console.log("pc onicecandidate", "id: ", this.id);
      const { candidate } = event;
      if (candidate) {
        this.candidate = candidate;
        this.iceCandidateCallback(candidate);
        // const otherPeer;
      }
    };
    this.pc.onconnectionstatechange = (event) => {
      console.log("pc onconnectionstatechange", this.pc.connectionState);
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
      console.log("Data channel is created!");
      event.channel.onopen = function () {
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
      console.log("pc oniceconnectionstatechange", this.pc.iceConnectionState);
      if (
        this.pc.iceConnectionState === "failed" ||
        this.pc.iceConnectionState === "disconnected" ||
        this.pc.iceConnectionState === "closed"
      ) {
        // Handle the failure
      }
    };

    this.pc.onicegatheringstatechange = (event) => {
      console.log("pc onicegatheringstatechange", this.pc.iceGatheringState);
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
      console.log("pc onnegotiationneeded");
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
      console.log("pc onsignalingstatechange", this.pc.signalingState);
      if (this.pc.signalingState === "have-local-pranswer") {
        // setLocalDescription() has been called with an answer
      }
    };

    this.pc.ontrack = (event) => {
      this.trackCallback(event);
    };
  }

  addTrack(track: MediaStreamTrack, mediaStream: MediaStream) {
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

  async gotDescription(description: RTCSessionDescription) {
    try {
      await this.pc.setRemoteDescription(description);
      await this.pc.setLocalDescription(await this.pc.createAnswer());
    } catch (e) {
      console.log("createAnswer error \n", e);
    }
  }

  async gotIceCandidate(iceCandidate: RTCIceCandidate) {
    try {
      await this.pc.addIceCandidate(iceCandidate);
    } catch (e) {
      console.log("addIceCandidate error \n", e);
    }
  }
}
