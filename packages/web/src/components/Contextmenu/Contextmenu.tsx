import React, { useMemo, useCallback, useEffect } from "react";
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
  maskSelector,
} from "@/modules/reducers/mask/slice";
import { useToast } from "@/components/Toast";
import {
  setAudioImmediate,
  setAudioImmediateNext,
} from "@/modules/reducers/audio/slice";
import { apiMVSub } from "@/api";
import Mask from "@/components/Mask";
import "./Contextmenu.scss";
import { useCopyToClipboard } from "react-use";
import { insetSelector } from "@/modules/reducers/inset/slice";
import { accountSelector } from "@/modules/reducers/account/slice";
import { commonSelector } from "@/modules/reducers/common/slice";
import List from "./List";
import Item from "./Item";

const initBuild = (functionClose) => ({
  评论: ({ contextMenuItem, contextMenuTotal, contextMenuType }) => (
    <Item>
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
    </Item>
  ),
  播放: ({ handlePlay }) => (
    <Item>
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
    </Item>
  ),
  下一首播放: ({ handlePlayNext }) => (
    <Item>
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
    </Item>
  ),
  播放歌单: ({ handlePlayPlaylist }) => (
    <Item>
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
    </Item>
  ),
  下一首播放歌单: ({ handlePlayNextPlaylist }) => (
    <Item>
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
    </Item>
  ),
  查看歌单: ({ contextMenuItem }) => (
    <Item>
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
    </Item>
  ),
  播放MV: ({ contextMenuItem, contextMenuType }) => (
    <Item>
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
    </Item>
  ),
  收藏MV: ({ handleSubscribeMV }) => (
    <Item>
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
    </Item>
  ),
  收藏到歌单: ({ handleCreatePlaylist, ownPlaylist = [] }) => (
    <Item>
      <span className="ui_contextmenu_btn ">
        <i className="ico">
          <IconFolderPlus size={22} stroke={1} />
        </i>
        收藏到歌单(Ctrl+S)
        <i className="arrow" />
      </span>
      <List className="sub">
        <Item>
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
        </Item>
        {ownPlaylist.map((item) => (
          <Item key={item.id}>
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
          </Item>
        ))}
      </List>
    </Item>
  ),
  分享: ({ handleDialogShare }) => (
    <Item>
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
    </Item>
  ),
  复制链接: ({ handleCopyLink }) => (
    <Item>
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
    </Item>
  ),
  不感兴趣: () => (
    <Item>
      <span className="ui_contextmenu_btn ">
        <i className="ico">
          <IconCircleX size={22} stroke={1} />
        </i>
        不感兴趣
        <i className="arrow" />
      </span>
      <List className="sub">
        <Item>
          <button type="button" className="ui_contextmenu_btn ">
            <i className="ico" />
            创建新歌单
          </button>
        </Item>
        <Item>
          <button type="button" className="ui_contextmenu_btn ">
            <i className="ico" />
            创建新歌单
          </button>
        </Item>
        <Item>
          <button type="button" className="ui_contextmenu_btn ">
            <i className="ico" />
            创建新歌单
          </button>
        </Item>
      </List>
    </Item>
  ),
  下载: () => (
    <Item>
      <span className="ui_contextmenu_btn ">
        <i className="ico">
          <IconDownload size={22} stroke={1} />
        </i>
        下载(L)
        <i className="arrow" />
      </span>
      <List className="sub">
        <Item>
          <button type="button" className="ui_contextmenu_btn ">
            <i className="ico">
              <IconCirclePlus size={22} stroke={1} />
            </i>
            创建新歌单
          </button>
        </Item>
        <Item>
          <button type="button" className="ui_contextmenu_btn ">
            <i className="ico">
              <IconMusic size={22} stroke={1} />
            </i>
            创建新歌单
          </button>
        </Item>
        <Item>
          <button type="button" className="ui_contextmenu_btn ">
            <i className="ico">
              <IconMusic size={22} stroke={1} />
            </i>
            创建新歌单
          </button>
        </Item>
      </List>
    </Item>
  ),
});

const Contextmenu = () => {
  const dispatch = useDispatch();
  const [, copyToClipboard] = useCopyToClipboard();
  const toast = useToast();
  const { baseUrl } = useSelector(commonSelector);
  const { profile, playlist } = useSelector(accountSelector);
  const {
    contextMenuVisibility,
    contextMenuX,
    contextMenuY,
    contextMenuItem,
    contextMenuTotal,
    contextMenuSchema,
    contextMenuType,
    contextMenuItemId,
  } = useSelector(maskSelector);
  const { globalX, globalY } = useSelector(insetSelector);
  const ownPlaylist = playlist.filter((item) => !item.subscribed);
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
      toast(message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCopyLink = () => {
    copyToClipboard(ShareUrl);
    toast("复制链接成功");
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
    return contextMenuSchema.map((block) => [
      block.join(","),
      block.map((item) => [item, Dom[item]]),
    ]);
  }, [contextMenuSchema]);
  if (!contextMenuVisibility) return null;
  return (
    <Mask>
      <List
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
      </List>
    </Mask>
  );
};

export default Contextmenu;
