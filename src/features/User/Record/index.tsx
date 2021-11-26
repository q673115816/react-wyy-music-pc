import React, { useEffect, useState, memo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { apiUserRecord } from "@/api";
import DomMenuCreate from "@/components/MenuCreate";
import classNames from "classnames";
import Rank from "@/components/Table/Rank";
import Heart from "@/components/Table/Heart";
import Download from "@/components/Table/Download";
import Name from "@/components/Table/Name";
import { useAppSelector } from "@/reducers/hooks";

const Record = () => {
  const { uid } = useParams();
  const { profile } = useAppSelector(({ account }) => account);
  // console.log(profile, uid);
  if (profile?.userId !== Number(uid)) return <Navigate to="/" />;
  const [type, setType] = useState(1);
  const [data, setData] = useState([]);
  const handleInit = async () => {
    try {
      const { allData, weekData } = await apiUserRecord({
        uid,
        type,
      });
      setData(type === 1 ? weekData : allData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, [type, uid]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex-none">
        <div className="h1 ui_header">我的听歌排行</div>
        <div className="px-8 pb-2 border-b space-x-8 text-sm">
          <button
            onClick={() => setType(1)}
            type="button"
            className={classNames("domUser_record_nav_link", {
              "font-bold": type === 1,
            })}
          >
            最近一周
          </button>
          <button
            onClick={() => setType(0)}
            type="button"
            className={classNames({
              "font-bold": type === 0,
            })}
          >
            所有时间
          </button>
        </div>
      </div>
      <div
        className="overflow-auto h-0 flex-auto domUser_record_main"
        style={{ "--ui_grid_template": "36px / 24px 24px 24px 10fr 1fr" }}
      >
        <div className="domUser_record_list">
          {data.map(({ song, playCount }, index) => (
            <DomMenuCreate
              item={song}
              key={song.id}
              schema={[
                ["评论", "播放", "下一首播放"],
                ["收藏到歌单", "分享", "复制链接", "下载"],
              ]}
            >
              <div
                tabIndex="2"
                className={classNames(
                  "domUser_record_item focus:outline-none focus:bg-gray-200 items-center hover:bg-gray-100 ui_grid_template px-8 grid",
                  index % 2 === 1 && "bg-gray-50"
                )}
              >
                <div className="index text-gray-400">
                  <Rank id={song.id} index={index} />
                </div>
                <div className="heart">
                  <Heart id={song.id} />
                </div>
                <div className="download">
                  <Download />
                </div>
                <div className="name">
                  <Name item={song} />
                </div>
                <div className="playCount text-gray-400">{playCount}次</div>
              </div>
            </DomMenuCreate>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Record);
