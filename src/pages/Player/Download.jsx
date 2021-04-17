import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToast, setDialogDownloadVideoShow } from '@/reducers/mask/actions';

export default (url = '', title = '') => {
  const dispatch = useDispatch();
  const RefAjax = useRef();
  const [downloadProcess, setDownloadProcess] = useState(0);
  const [downloadState, setDownloadState] = useState('下载');
  const handleInitDownload = () => {
    setDownloadProcess(0);
    setDownloadState('下载');
  };
  const handleUnLoadDownload = () => {
    if (!RefAjax.current) return null;
    console.log('终止下载！');
    RefAjax.current.abort();
    RefAjax.current = null;
  };
  const handleCreateFile = () => {
    const { pathname } = new URL(url);
    const ext = pathname.substr(pathname.lastIndexOf('.'));
    const href = window.URL.createObjectURL(RefAjax.current.response);
    // console.log(href);
    const a = document.createElement('a');
    a.download = `${title}.${ext}`;
    a.href = href;
    a.click();
    window.URL.revokeObjectURL(href);
  };

  const callback = () => {
    setDownloadState('缓存中');
    RefAjax.current = new XMLHttpRequest();
    const { current: send } = RefAjax;
    send.open('GET', url);

    // send.setRequestHeader('Content-Type', 'blob');
    send.responseType = 'blob';
    send.addEventListener('progress', ({ loaded, total }) => {
      console.log('progress', `${loaded / total * 100}%`);
      setDownloadProcess(loaded / total);
    });
    send.addEventListener('readystatechange', () => {
      console.log(send);
      if (!(send.readyState === 4 && send.status === 200)) return;
      // console.log('finish', send.response);
      setDownloadState('已缓存');
      // RefAjax.current = null;
      handleCreateFile();
    });
    send.send();
    // fetch(urls?.url)
    //   .then((res) => res.blob())
    //   .then((blob) => {
    //     const { pathname } = new URL(urls?.url);
    //     const ext = pathname.substr(pathname.lastIndexOf('.'));
    //     const url = window.URL.createObjectURL(blob);
    //     // console.log(url);
    //     const a = document.createElement('a');
    //     a.download = `${detail?.title}.${ext}`;
    //     a.href = url;
    //     a.click();
    //     window.URL.revokeObjectURL(url);
    //   });
  };

  const handleDownload = () => {
    if (downloadState === '已缓存') {
      handleCreateFile();
      return;
    }
    if (downloadState !== '下载') return;
    dispatch(setDialogDownloadVideoShow({
      callback,
    }));
  };

  return {
    downloadProcess,
    downloadState,
    handleInitDownload,
    handleUnLoadDownload,
    handleDownload,
  };
};
