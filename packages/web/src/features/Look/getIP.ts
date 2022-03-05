interface iIPs {
  [key: string]: boolean;
}
import { configuration as servers } from "./config";

export default async (callback?: () => void) => {
  const localIP: iIPs = {};
  const reg = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;

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
