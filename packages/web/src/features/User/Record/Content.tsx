import MenuCreate from "@/components/MenuCreate/MenuCreate";
import classNames from "classnames";
import Rank from "@/components/Table/Rank";
import Heart from "@/components/Table/Heart";
import Download from "@/components/Table/Download";
import Name from "@/components/Table/Name";
import React, { FC, memo } from "react";
import { useGetUserRecordQuery } from "@/modules/services/user";
import Loading from "@/components/Loading";

interface iProps {
  type: number;
  uid: number;
}

const Content: FC<iProps> = ({ type, uid }) => {
  const { data, isFetching } = useGetUserRecordQuery({
    uid,
    type,
  });
  const list = (type === 1 ? data?.weekData : data?.allData) || [];
  if (isFetching) return <Loading />;
  return (
    <div
      className="overflow-auto h-0 flex-auto domUser_record_main"
      style={{ "--ui_grid_template": "36px / 24px 24px 24px 10fr 1fr" }}
    >
      <div className="domUser_record_list">
        {list.map(({ song, playCount }, index) => (
          <MenuCreate
            item={song}
            key={song.id}
            schema={[
              ["评论", "播放", "下一首播放"],
              ["收藏到歌单", "分享", "复制链接", "下载"],
            ]}
          >
            <div
              tabIndex={2}
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
          </MenuCreate>
        ))}
      </div>
    </div>
  );
};

export default memo(Content);
