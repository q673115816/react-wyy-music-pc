import React, { useEffect, useState } from "react";

const useGetInput = () => {
  const [audioinput, setAudioinput] = useState<MediaDeviceInfo[]>([]);
  const [videoinput, setVideoinput] = useState<MediaDeviceInfo[]>([]);
  useEffect(() => {
    (async () => {
      const deviceInfos = await navigator.mediaDevices.enumerateDevices();
      const audioinput = [];
      const videoinput = [];
      for (const deviceInfo of deviceInfos) {
        if (deviceInfo.kind === "audioinput") {
          audioinput.push(deviceInfo);
        } else if (deviceInfo.kind === "videoinput") {
          videoinput.push(deviceInfo);
        } else {
          console.log("other kind: ", deviceInfo);
        }
      }
      setAudioinput(audioinput);
      setVideoinput(videoinput);
    })();
  }, []);
  return {
    audioinput,
    videoinput
  }
}

export default useGetInput
