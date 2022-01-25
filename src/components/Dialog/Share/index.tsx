import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SymbolWYY,
  SymbolSX,
  SymbolWX,
  SymbolQQ,
  SymbolQZ,
  SymbolWB,
  SymbolLJ,
} from "@/components/Symbol";
import {
  setDialogReset,
  setDialogShareWXShow,
  setToast,
} from "@/modules/reducers/mask/slice";
import HOCDialog from "../Dialog";
import "./style.scss";
import useCopyLink from "@/hooks/useCopyLink";

const types = {
  songs: "单曲",
};

export default () => {
  const dispatch = useDispatch();
  // const [visibilty, setVisibilty] = useState(false);
  const {
    dialogShareVisibility,
    contextMenuType,
    contextMenuItemId,
    contextMenuItem,
  } = useSelector(({ mask }) => mask);
  const { profile } = useSelector(({ account }) => account);
  const { baseUrl } = useSelector(({ common }) => common);
  const ShareUrl = `${baseUrl}/${contextMenuType}?id=${contextMenuItemId}&userId=${profile.userId}`;

  const handleCopyLink = async () => {
    // const data = new DataTransfer();
    // data.items.add('text/plain', ShareUrl);
    // await navigator.clipboard.writeText(ShareUrl);
    // alert('链接复制成功');
    useCopyLink(ShareUrl, () => {
      dispatch(setToast("复制链接成功"));
    });
    dispatch(setDialogReset());
  };

  const handleShareWX = () => {
    // dispatch(setDialogReset());
    dispatch(setDialogShareWXShow());
  };
  if (!dialogShareVisibility) return null;
  return (
    <HOCDialog id="dialogShare" title="分享">
      <div className="list divide-y divide-fuchsia-300">
        <div>
          <button type="button" className="item flex items-center">
            <i className="ico">
              <SymbolWYY active />
            </i>
            分享到云音乐动态
          </button>
        </div>
        <div>
          <button type="button" className="item flex items-center">
            <i className="ico">
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
            <i className="ico">
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
            <i className="ico">
              <SymbolQQ active />
            </i>
            QQ好友
          </a>
        </div>
        <div>
          <a href="#" className="item flex items-center">
            <i className="ico">
              <SymbolQZ active />
            </i>
            QQ空间
          </a>
        </div>
        <div>
          <a href="#" className="item flex items-center">
            <i className="ico">
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
            <i className="ico">
              <SymbolLJ active />
            </i>
            复制链接
          </button>
        </div>
      </div>
    </HOCDialog>
  );
};

// export default HOCDialog(Share, 'dialogShare', '分享');
