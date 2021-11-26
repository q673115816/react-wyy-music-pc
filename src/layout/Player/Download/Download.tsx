import React, { useEffect, useRef, useState } from "react";
import { setToast, setDialogDownloadVideoShow } from "@/reducers/mask/slice";
import DownloadWorker from "./download.worker?worker";
import { useAppDispatch } from "@/reducers/hooks";

export default (url = "", title = "") => {
  const dispatch = useAppDispatch();
  const RefWorker = useRef<Worker | null | void>();
  const downloadResponse = useRef();
  const [downloadProcess, setDownloadProcess] = useState(0);
  const [downloadState, setDownloadState] = useState("下载");

  const handleInitDownload = () => {
    setDownloadProcess(0);
    setDownloadState("下载");
  };

  const handleUnLoadDownload = () => {
    if (!RefWorker.current) return;
    RefWorker.current.postMessage({ method: "abort" });
    RefWorker.current.terminate();
    RefWorker.current = null;
  };

  const handleCreateFile = () => {
    const { pathname } = new URL(url);
    const ext = pathname.substr(pathname.lastIndexOf("."));
    const href = window.URL.createObjectURL(downloadResponse.current);
    // console.log(href);
    const a = document.createElement("a");
    a.download = `${title}.${ext}`;
    a.href = href;
    a.click();
    window.URL.revokeObjectURL(href);
  };

  const callback = () => {
    setDownloadState("缓存中");
    const worker: Worker = new DownloadWorker();
    worker.postMessage({ method: "init", url });
    worker.addEventListener("message", (res) => {
      const { data } = res;
      const { callback } = res.data;
      switch (callback) {
        case "progress":
          setDownloadProcess(data[callback]);
          break;
        case "state":
          setDownloadState(data[callback]);
          downloadResponse.current = data.response;
          handleCreateFile();
          break;
        default:
      }
    });
    RefWorker.current = worker;
  };

  const handleDownload = () => {
    if (downloadState === "已缓存") {
      handleCreateFile();
      return;
    }
    if (downloadState !== "下载") return;
    dispatch(
      setDialogDownloadVideoShow({
        callback,
      })
    );
  };

  return {
    downloadProcess,
    downloadState,
    handleInitDownload,
    handleUnLoadDownload,
    handleDownload,
  };
};
