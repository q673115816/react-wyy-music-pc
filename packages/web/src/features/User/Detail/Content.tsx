import React, { memo, useState } from "react";
import { useGetUserPlaylistQuery } from "@/modules/services/user";
import Layout from "@/features/User/Detail/layout";
import { useParams } from "react-router-dom";
import Loading from "@/components/Loading";
import classNames from "classnames";
import { navs, layouts, layoutsBtn } from "./config";
import Rank from "./components/Rank";

const Content = () => {
  const { uid } = useParams();
  const { data, isLoading } = useGetUserPlaylistQuery({
    uid,
  });

  const [current, setCurrent] = useState(navs[0]);
  const [layout, setLayout] = useState(layouts[0]);

  const playlist = data?.playlist || [];

  const ownPlaylist = playlist.filter((item) => String(item.userId) === uid);

  const savePlaylist = playlist.filter((item) => String(item.userId) !== uid);
  if (isLoading) return <Loading />;

  return (
    <div className="domUserDetail_main">
      <div className={`flex px-8 pb-4`}>
        <div className={`text-base flex gap-4`}>
          {navs.map((nav) => (
            <button
              className={classNames(
                current === nav && "font-bold ui_underline"
              )}
              onClick={() => setCurrent(nav)}
              type={"button"}
              key={nav}
            >
              {nav}
            </button>
          ))}
        </div>
        <div className="ml-auto flex overflow-hidden rounded space-x-0.5">
          {layoutsBtn.map(([type, title, Ico]) => (
            <button
              key={type}
              type="button"
              className={classNames(
                "layout bg-gray-100 h-5 w-6 flex-center",
                layout === type ? "bg-gray-500 text-white" : "hover:bg-gray-200"
              )}
              onClick={() => setLayout(type)}
              title={title}
            >
              <Ico size={16} />
            </button>
          ))}
        </div>
      </div>
      {current === navs[0] && (
        <Layout list={ownPlaylist}>
          <Rank />
        </Layout>
      )}
      {current === navs[1] && <Layout list={savePlaylist} />}
    </div>
  );
};

export default memo(Content);
