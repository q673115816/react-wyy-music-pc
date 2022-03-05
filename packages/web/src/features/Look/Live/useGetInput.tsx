import React, { useEffect, useState } from "react";

export interface iUseGetInput {
  audioinput: MediaDeviceInfo[];
  videoinput: MediaDeviceInfo[];
}

const useGetInput = () => {
  const [audioinput, setAudioinput] = useState<MediaDeviceInfo[]>([]);
  const [videoinput, setVideoinput] = useState<MediaDeviceInfo[]>([]);
  useEffect(() => {
    (async () => {
      const deviceInfos = await navigator.mediaDevices.enumerateDevices();
      const audioinput = [];
      const videoinput = [];
      for (const deviceInfo of deviceInfos) {
        switch (deviceInfo.kind) {
          case "audioinput":
            audioinput.push(deviceInfo);
            break;
          case "videoinput":
            videoinput.push(deviceInfo);
            break;
          case "audiooutput":
            console.log("audiooutput: ", deviceInfo);
            break;
          default:
            console.log("default device");
            break;
        }
      }
      setAudioinput(audioinput);
      setVideoinput(videoinput);
    })();
  }, []);
  return {
    audioinput,
    videoinput,
  };
};

export default useGetInput;
