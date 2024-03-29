import React, { memo, useEffect, useState } from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import Search from "@/components/HeaderBarSearch";

import MenuCreate from "@/components/MenuCreate/MenuCreate";
import Rank from "@/components/Table/Rank";
import Heart from "@/components/Table/Heart";
import Download from "@/components/Table/Download";
import GroupPlay from "@/components/GroupPlay";
import Name from "@/components/Table/Name";
import Artists from "@/components/Table/Artists";
import Album from "@/components/Table/Album";

import {
  IconCaretUp,
  IconCaretDown,
  IconSwitchVertical,
  IconCloudDownload,
  IconPlus,
  IconPlayerPlay,
} from "@tabler/icons";
import { useGetUserCloudQuery } from "@/modules/services/user";

const defaultSort = (a, b, sort) =>
  String(a[sort.code]).localeCompare(String(b[sort.code]), "zh-CN") * sort.type;

const th = [
  ["音乐标题", "songName", defaultSort],
  ["歌手", "artist", defaultSort],
  ["专辑", "album", defaultSort],
  ["格式", "", defaultSort],
  [
    "大小",
    "fileSize",
    (a, b, sort) =>
      (Number.parseFloat(a[sort.code]) - Number.parseFloat(b[sort.code])) *
      sort.type,
  ],
  [
    "上传时间",
    "addTime",
    (a, b, sort) => (a[sort.code] - b[sort.code]) * sort.type,
  ],
];

const BuildSort = (item, sort) => {
  if (sort.name !== item)
    return <IconSwitchVertical size={14} color="#f00" stroke={1} />;
  if (sort.type === -1)
    return <IconCaretDown size={20} stroke={0} fill="#000" />;
  if (sort.type === 1) return <IconCaretUp size={12} stroke={0} fill="#000" />;
  if (sort.type === 0)
    return <IconSwitchVertical size={14} color="#f00" stroke={1} />;
};

const Cloud = () => {
  const [visibility, setVisibility] = useState(false);
  const [search, setSearch] = useState("");

  const [sort, setSort] = useState({
    name: "上传时间",
    type: -1,
    code: "addTime",
    callback: (a, b, sort) => (a[sort.code] - b[sort.code]) * sort.type,
  });

  const handleToggleVisibility = () => {
    setVisibility(!visibility);
  };

  const { data: useCloud = {}, isLoading } = useGetUserCloudQuery({
    limit: 100,
  });
  const { data = [], count = 0, maxSize = "", size = "" } = useCloud;

  const handleSort = (obj) => {
    if (sort.name !== obj.name) {
      return setSort({
        ...obj,
        type: 1,
      });
    }
    switch (sort.type) {
      case -1:
        return setSort({
          name: "",
          code: "",
          callback: (a, b) => 0,
          type: 0,
        });
      case 1:
        return setSort({
          ...obj,
          type: -1,
        });
      default:
        return setSort({
          ...obj,
          type: 1,
        });
    }
  };

  // useEffect(() => {
  //   console.log('qwe');
  //   setData(
  //     data.sort((a, b) => sort.callback(a, b, sort)),
  //   );
  // }, [data, sort]);
  if (isLoading) return null;
  return (
    <div className="domManage overflow-auto h-full">
      <div className="domManage_header ui_header">
        <span className="domManage_header_title h1">我的音乐云盘</span>
      </div>
      <div className="domCloud_info py-2.5 px-8">
        <span>云盘容量</span>
        &nbsp;
        <div className="w-28 h-2.5 inline-block bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600"
            style={{ width: (size / maxSize) * 100 || 0 }}
          />
        </div>
        &nbsp;
        <span className="num">
          {(size / 1024 / 1024 / 1024).toFixed(2)}
          G/
          {maxSize / 1024 / 1024 / 1024}G
        </span>
        &nbsp;
        <span className="ml-8">歌曲永久保存，随时随地多端畅听</span>
        &nbsp;
        <a
          href="https://music.163.com/#/store/product/detail?id=34001"
          className="ui_link"
        >
          扩容
        </a>
      </div>
      <div className="ui_headerBar border-b">
        <div className="left space-x-2">
          <GroupPlay />
          <button
            type="button"
            className="flex-center ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"
          >
            <IconPlus size={20} />
            &nbsp; 上传音乐
          </button>
        </div>
        <div className="right">
          <Search {...{ search, setSearch, placeholder: "搜索我的音乐云盘" }} />
        </div>
      </div>
      <div className="overflow-auto max-h-full flex-auto pl-8 pr-5">
        <div
          className="domManage_table"
          style={{
            "--ui_grid_template": "36px / 30px 30px 8fr 3fr 3fr 2fr 2fr 4fr",
          }}
        >
          <div className="thead">
            <div className="tr grid ui_grid_template items-center">
              <div />
              <div />
              {th.map(([item, code, callback]) => (
                <div
                  key={item}
                  className={classNames("cell px-1", "th", {
                    on: item === sort.name,
                  })}
                  onClick={() => handleSort({ item, code, callback })}
                >
                  {item}
                  <span className="sort">{BuildSort(item, sort)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="tbody">
            {data.map((item, index) => (
              <MenuCreate
                type="song"
                item={item}
                schema={[
                  ["播放", "下一首播放"],
                  ["收藏到歌单", "分享", "下载"],
                  ["删除"],
                ]}
                key={item.songId}
              >
                <div
                  className={classNames(
                    "tr grid ui_grid_template items-center hover:bg-gray-100 focus:outline-none focus:bg-gray-200",
                    index % 2 === 0 && "bg-gray-50"
                  )}
                  tabIndex={2}
                >
                  <div className="cell px-1 index text-gray-400">
                    <Rank index={index} id={item.songId} />
                  </div>
                  <div className="cell px-1 download">
                    <Download />
                  </div>
                  <div
                    className="cell px-1 name truncate"
                    title={
                      item.songName + item.simpleSong?.tns?.length > 0
                        ? `（${item.simpleSong?.tns}）`
                        : ""
                    }
                  >
                    {item.songName}
                    {item.simpleSong?.tns?.length > 0 && (
                      <span className="text-gray-500">
                        {`（${item.simpleSong.tns}）`}
                      </span>
                    )}
                  </div>
                  <Artists className="px-1" artists={item.simpleSong.ar} />
                  <Album
                    className="px-1"
                    name={item.album}
                    id={item.simpleSong?.al?.id}
                  />
                  <div className="cell px-1 truncate uppercase">
                    {/(?<=\.)(\w*)$/.exec(item.fileName)[0]}
                  </div>
                  <div className="cell px-1 truncate">
                    {(item.fileSize / 1024 / 1024).toFixed(1)}
                    MB
                  </div>
                  <div className="cell px-1 truncate text-gray-400">
                    {dayjs(item.addTime).format("YYYY-MM-DD")}
                  </div>
                </div>
              </MenuCreate>
            ))}
          </div>
        </div>
      </div>
      <div
        className="domManage_dialog"
        style={{ display: visibility ? "" : "none" }}
      >
        <button
          type="button"
          className="close"
          onClick={handleToggleVisibility}
        >
          ×
        </button>
        <div className="title">选择本地音乐文件夹</div>
        <div className="tips">将自动扫描您勾选的目录，文件增删实时同步。</div>
        <ul>
          <li>
            <span className="checkbox">
              <input type="text" />
              <i className="material-icons">checkbox</i>
            </span>
            暂时没法做
          </li>
        </ul>
        <div className="actions">
          <button
            type="button"
            className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full red"
          >
            确认
          </button>
          <button
            type="button"
            className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"
          >
            添加文件
          </button>
        </div>
      </div>
    </div>
  );
};
export default memo(Cloud);
