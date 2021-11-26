import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  IconMessage,
  IconArrowForward,
  IconPlayerPlay,
  IconFolderPlus,
  IconShare,
  IconLink,
  IconCircleX,
  IconDownload,
  IconCirclePlus,
  IconMusic,
  IconLock,
} from "@tabler/icons";
import {
  setDialogReset,
  setDialogShareShow,
  setDialogCreatePlaylistShow,
  setContextMenuShareLink,
  setToast,
} from "@/reducers/mask/slice";
import { setLoginVisibilty } from "@/reducers/common/slice";
import {
  setAudioImmediate,
  setAudioImmediateNext,
} from "@/reducers/audio/slice";
import { apiMVSub } from "@/api";
import useCopyLink from "@/hooks/useCopyLink";
import DomMask from "@/components/Mask";
import "./Contextmenu.scss";

const initBuild = (functionClose) => ({
  评论: ({ contextMenuItem, contextMenuTotal, contextMenuType }) => (
    <li className="ui_contextmenu_item">
      <Link
        to={`/comment/${contextMenuType}/${contextMenuItem.id}`}
        onClick={functionClose}
        className="ui_contextmenu_btn "
      >
        <i className="ico">
          <IconMessage size={22} stroke={1} />
        </i>
        查看评论 ({contextMenuTotal})
      </Link>
    </li>
  ),
  播放: ({ handlePlay }) => (
    <li className="ui_contextmenu_item">
      <button
        type="button"
        onClick={handlePlay}
        className="ui_contextmenu_btn "
      >
        <i className="ico">
          <IconPlayerPlay size={22} stroke={1} />
        </i>
        播放(Enter)
      </button>
    </li>
  ),
  下一首播放: ({ handlePlayNext }) => (
    <li className="ui_contextmenu_item">
      <button
        onClick={handlePlayNext}
        type="button"
        className="ui_contextmenu_btn "
      >
        <i className="ico">
          <IconArrowForward size={22} stroke={1} />
        </i>
        下一首播放
      </button>
    </li>
  ),
  播放歌单: ({ handlePlayPlaylist }) => (
    <li className="ui_contextmenu_item">
      <button
        type="button"
        onClick={handlePlayPlaylist}
        className="ui_contextmenu_btn "
      >
        <i className="ico">
          <IconPlayerPlay size={22} stroke={1} />
        </i>
        播放(Enter)
      </button>
    </li>
  ),
  下一首播放歌单: ({ handlePlayNextPlaylist }) => (
    <li className="ui_contextmenu_item">
      <button
        onClick={handlePlayNextPlaylist}
        type="button"
        className="ui_contextmenu_btn "
      >
        <i className="ico">
          <IconArrowForward size={22} stroke={1} />
        </i>
        下一首播放
      </button>
    </li>
  ),
  查看歌单: ({ contextMenuItem }) => (
    <li className="ui_contextmenu_item">
      <Link
        to={`/playlist/music/${contextMenuItem.id}`}
        onClick={functionClose}
        className="ui_contextmenu_btn "
      >
        <i className="ico">
          <IconPlayerPlay size={22} stroke={1} />
        </i>
        查看歌单
      </Link>
    </li>
  ),
  播放MV: ({ contextMenuItem, contextMenuType }) => (
    <li className="ui_contextmenu_item">
      <Link
        to={`/player/${contextMenuType}/${contextMenuItem.id}`}
        onClick={functionClose}
        className="ui_contextmenu_btn "
      >
        <i className="ico">
          <IconPlayerPlay size={22} stroke={1} />
        </i>
        播放MV
      </Link>
    </li>
  ),
  收藏MV: ({ handleSubscribeMV }) => (
    <li className="ui_contextmenu_item">
      <button
        onClick={handleSubscribeMV}
        type="button"
        className="ui_contextmenu_btn "
      >
        <i className="ico">
          <IconFolderPlus size={22} stroke={1} />
        </i>
        收藏MV
      </button>
    </li>
  ),
  收藏到歌单: ({ handleCreatePlaylist, ownPlaylist = [] }) => (
    <li className="ui_contextmenu_item">
      <span className="ui_contextmenu_btn ">
        <i className="ico">
          <IconFolderPlus size={22} stroke={1} />
        </i>
        收藏到歌单(Ctrl+S)
        <i className="arrow" />
      </span>
      <ul className="ui_contextmenu sub">
        <li className="ui_contextmenu_item">
          <button
            type="button"
            onClick={handleCreatePlaylist}
            className="ui_contextmenu_btn "
          >
            <i className="ico">
              <IconCirclePlus size={22} stroke={1} />
            </i>
            创建新歌单
          </button>
        </li>
        <li className="hr" />
        {ownPlaylist.map((item) => (
          <li className="ui_contextmenu_item" key={item.id}>
            <button type="button" className="ui_contextmenu_btn ">
              <i className="ico">
                {item.privacy === 10 ? (
                  <IconLock size={22} stroke={1} />
                ) : (
                  <IconMusic size={22} stroke={1} />
                )}
              </i>
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </li>
  ),
  分享: ({ handleDialogShare }) => (
    <li className="ui_contextmenu_item">
      <button
        onClick={handleDialogShare}
        type="button"
        className="ui_contextmenu_btn "
      >
        <i className="ico">
          <IconShare size={22} stroke={1} />
        </i>
        分享.....
      </button>
    </li>
  ),
  复制链接: ({ handleCopyLink }) => (
    <li className="ui_contextmenu_item">
      <button
        type="button"
        onClick={handleCopyLink}
        className="ui_contextmenu_btn "
      >
        <i className="ico">
          <IconLink size={22} stroke={1} />
        </i>
        复制链接
      </button>
    </li>
  ),
  不感兴趣: ({}) => (
    <li className="ui_contextmenu_item">
      <span className="ui_contextmenu_btn ">
        <i className="ico">
          <IconCircleX size={22} stroke={1} />
        </i>
        不感兴趣
        <i className="arrow" />
      </span>
      <ul className="ui_contextmenu sub">
        <li className="ui_contextmenu_item">
          <button type="button" className="ui_contextmenu_btn ">
            <i className="ico" />
            创建新歌单
          </button>
        </li>
        <li className="hr" />
        <li className="ui_contextmenu_item">
          <button type="button" className="ui_contextmenu_btn ">
            <i className="ico" />
            创建新歌单
          </button>
        </li>
        <li className="ui_contextmenu_item">
          <button type="button" className="ui_contextmenu_btn ">
            <i className="ico" />
            创建新歌单
          </button>
        </li>
      </ul>
    </li>
  ),
  下载: () => (
    <li className="ui_contextmenu_item ">
      <span className="ui_contextmenu_btn ">
        <i className="ico">
          <IconDownload size={22} stroke={1} />
        </i>
        下载(L)
        <i className="arrow" />
      </span>
      <ul className="ui_contextmenu sub">
        <li className="ui_contextmenu_item">
          <button type="button" className="ui_contextmenu_btn ">
            <i className="ico">
              <IconCirclePlus size={22} stroke={1} />
            </i>
            创建新歌单
          </button>
        </li>
        <li className="hr" />
        <li className="ui_contextmenu_item">
          <button type="button" className="ui_contextmenu_btn ">
            <i className="ico">
              <IconMusic size={22} stroke={1} />
            </i>
            创建新歌单
          </button>
        </li>
        <li className="ui_contextmenu_item">
          <button type="button" className="ui_contextmenu_btn ">
            <i className="ico">
              <IconMusic size={22} stroke={1} />
            </i>
            创建新歌单
          </button>
        </li>
      </ul>
    </li>
  ),
});

export default () => {
  const dispatch = useDispatch();
  const { baseUrl } = useSelector(({ common }) => common);
  const { profile, playlist } = useSelector(({ account }) => account);
  const {
    contextMenuVisibility,
    contextMenuX,
    contextMenuY,
    contextMenuItem,
    contextMenuTotal,
    contextMenuSechma,
    contextMenuType,
    contextMenuItemId,
  } = useSelector(({ mask }) => mask);
  const { globalX, globalY } = useSelector(({ inset }) => inset);
  // console.log(globalLastY, contextMenuY);
  const ownPlaylist = playlist.filter((item) => item.subscribed === false);
  const ShareUrl = `${baseUrl}/${contextMenuType}?id=${contextMenuItemId}&userId=${profile.userId}`;
  useEffect(() => {
    dispatch(
      setContextMenuShareLink({
        contextMenuShareLink: ShareUrl,
      })
    );
  }, []);

  const handlePlay = () => {
    dispatch(
      setAudioImmediate({
        currentSong: contextMenuItem,
      })
    );
    dispatch(setDialogReset());
  };

  const handlePlayNext = () => {
    dispatch(
      setAudioImmediateNext({
        currentSong: contextMenuItem,
      })
    );
    dispatch(setDialogReset());
  };

  const handlePlayPlaylist = () => {
    console.log("播放歌单");
  };
  const handlePlayNextPlaylist = () => {
    console.log("下一首播放歌单");
  };

  const handleSubscribeMV = async () => {
    try {
      const { message } = await apiMVSub({
        mvid: contextMenuItemId,
        t: 1,
      });
      dispatch(setDialogReset());
      dispatch(setToast(message));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCopyLink = () => {
    // const data = new DataTransfer();
    // data.items.add('text/plain', ShareUrl);
    // await navigator.clipboard.writeText(ShareUrl);
    // alert('链接复制成功');
    useCopyLink(ShareUrl, () => {
      dispatch(setToast("复制链接成功"));
    });
    dispatch(setDialogReset());
  };

  const handleCreatePlaylist = () => {
    dispatch(setDialogCreatePlaylistShow());
  };

  const handleDialogShare = useCallback(
    () =>
      // if (!isLogin) {
      //   dispatch(setLoginVisibilty());
      //   return dispatch(setDialogReset());
      // }
      dispatch(setDialogShareShow()),
    []
  );

  const Build = useMemo(() => {
    const Dom = initBuild(() => dispatch(setDialogReset()));
    return contextMenuSechma.map((block) => [
      block.join(","),
      block.map((item) => [item, Dom[item]]),
    ]);
  }, [contextMenuSechma]);
  if (!contextMenuVisibility) return null;
  return (
    <DomMask>
      <ul
        id="contextmenu"
        className="ui_contextmenu divide-y"
        style={{ left: contextMenuX - globalX, top: contextMenuY - globalY }}
      >
        {Build.map(([wrapname, block]) => (
          <div key={wrapname}>
            {block.map(([item, Dom]) => (
              <Dom
                {...{
                  contextMenuTotal,
                  contextMenuItem,
                  handlePlay,
                  handlePlayNext,
                  handlePlayPlaylist,
                  handlePlayNextPlaylist,
                  handleDialogShare,
                  handleCopyLink,
                  handleCreatePlaylist,
                  handleSubscribeMV,
                  ownPlaylist,
                  contextMenuType,
                }}
                key={item}
              />
            ))}
          </div>
        ))}
      </ul>
    </DomMask>
  );
};
