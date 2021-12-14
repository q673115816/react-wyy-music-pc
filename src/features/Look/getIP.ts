interface iIPs {
  [key: string]: boolean;
}
export default async (callback?: () => void) => {
  const localIP: iIPs = {};
  const reg = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;
  // free stun server
  const servers = {
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
  };

  const pc = new RTCPeerConnection(servers);

  const handleCandidate = (candidate: string) => {
    console.log(candidate);
    const result = candidate.match(reg);
    if (!result) return;
    result.forEach((ip) => {
      console.log(ip);
      localIP[ip] = true;
    });
  };
  pc.createDataChannel("");

  pc.onicecandidate = (ice) => {
    console.log("ice:", ice);
    if (ice.candidate) handleCandidate(ice.candidate.candidate);
  };

  const result = await pc.createOffer();
  await pc.setLocalDescription(result);
  const lines = pc.localDescription.sdp.split("\n");
  lines.forEach((line) => {
    if (line.indexOf("a=candidate:") === 0) handleCandidate(line);
  });
  console.log();
};
