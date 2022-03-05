import React, { memo } from "react";
import {
  SymbolWYY,
  SymbolSX,
  SymbolWX,
  SymbolQQ,
  SymbolQZ,
  SymbolWB,
  SymbolLJ,
} from "@/components/Symbol";
import { IconBrandGithub } from "@tabler/icons";
import {
  setDialogReset,
  setDialogShareWXShow,
} from "@/modules/reducers/mask/slice";
import HOCDialog from "../Dialog/Dialog";
import "./style.scss";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import { useCopyToClipboard } from "react-use";
import useToast from "@/hooks/useToast";

const types = {
  songs: "单曲",
};

const Share = () => {
  const [state, copyToClipboard] = useCopyToClipboard();
  const toast = useToast();
  const dispatch = useAppDispatch();
  const {
    dialogShareVisibility,
    contextMenuType,
    contextMenuItemId,
    contextMenuItem,
  } = useAppSelector(({ mask }) => mask);
  const { profile } = useAppSelector(({ account }) => account);
  const { baseUrl, gitUrl } = useAppSelector(({ common }) => common);
  const ShareUrl = `${baseUrl}/${contextMenuType}?id=${contextMenuItemId}&userId=${profile.userId}`;
  const type = "music";
  const shareGit = `${gitUrl}/share/${type}/${contextMenuItemId}`;

  const handleCopyLink = async () => {
    copyToClipboard(ShareUrl);
    if (state.error) return;
    toast("复制链接成功");
    dispatch(setDialogReset());
  };

  const handleCustomShare = () => {
    copyToClipboard(shareGit);
    if (state.error) return;
    toast("复制链接成功");
    dispatch(setDialogReset());
  };

  const handleShareWX = () => {
    // dispatch(setDialogReset());
    dispatch(setDialogShareWXShow());
  };
  if (!dialogShareVisibility) return null;
  return (
    <HOCDialog id="dialogShare" title="分享">
      <div className="list divide-y">
        <div>
          <button type="button" className="item flex items-center">
            <i className="mr-2.5">
              <SymbolWYY active />
            </i>
            分享到云音乐动态
          </button>
        </div>
        <div>
          <button type="button" className="item flex items-center">
            <i className="mr-2.5">
              <SymbolSX active />
            </i>
            私信分享
          </button>
        </div>
        <div>
          <button
            type="button"
            className="item flex items-center"
            onClick={handleShareWX}
          >
            <i className="mr-2.5">
              <SymbolWX active />
            </i>
            微信好友
          </button>
        </div>
        <div>
          <a
            target="_block"
            href={`https://connect.qq.com/widget/shareqq/index.html?site=网易云音乐&url=${ShareUrl}&from=qq&title=分享${
              types[contextMenuType]
            }：${contextMenuItem.name}&summary=${contextMenuItem.ar
              .reduce((prev, curr) => `${prev}/${curr.name}`, "")
              .slice(1)}&pics=${
              contextMenuItem.al.picUrl
            }?imageView&thumbnail=120y120`}
            className="item flex items-center"
          >
            <i className="mr-2.5">
              <SymbolQQ active />
            </i>
            QQ好友
          </a>
        </div>
        <div>
          <a href="#" className="item flex items-center">
            <i className="mr-2.5">
              <SymbolQZ active />
            </i>
            QQ空间
          </a>
        </div>
        <div>
          <a href="#" className="item flex items-center">
            <i className="mr-2.5">
              <SymbolWB active />
            </i>
            微博
          </a>
        </div>
        <div>
          <button
            onClick={handleCopyLink}
            type="button"
            className="item flex items-center"
          >
            <i className="mr-2.5">
              <SymbolLJ active />
            </i>
            复制链接
          </button>
        </div>
        <div>
          <button
            className="item flex items-center"
            onClick={handleCustomShare}
          >
            <i className="mr-2.5 flex-center w-10 h-10 border rounded-full">
              <IconBrandGithub />
            </i>
            分享
          </button>
        </div>
      </div>
    </HOCDialog>
  );
};
export default memo(Share);
// export default HOCDialog(Share, 'dialogShare', '分享');
