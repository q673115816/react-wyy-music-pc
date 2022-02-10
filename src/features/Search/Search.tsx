import React, { memo, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { apiCloudSearch, apiSearchMultimatch } from "@/api";
import { setSearchValue } from "@/modules/reducers/search/slice";
import "./style.scss";
import Loading from "@/components/Loading";
import Page from "@/components/Page";
import Songs from "./Songs";
import Artists from "./Artists";
import Albums from "./Albums";
import Videos from "./Videos";
import Playlists from "./Playlists";
import Lyrics from "./Lyrics";
import DJRadios from "./DJRadios";
import Userprofiles from "./Userprofiles";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";

const switchs = {
  单曲: {
    code: 1,
    unit: "首",
    limit: 100,
    Dom: Songs,
    countName: "songCount",
  },
  歌手: {
    code: 100,
    unit: "位",
    limit: 20,
    Dom: Artists,
    countName: "artistCount",
  },
  专辑: {
    code: 10,
    unit: "张",
    limit: 20,
    Dom: Albums,
    countName: "albumCount",
  },
  视频: {
    code: 1014,
    unit: "个",
    limit: 24,
    Dom: Videos,
    countName: "videoCount",
  },
  歌单: {
    code: 1000,
    unit: "个",
    limit: 20,
    Dom: Playlists,
    countName: "playlistCount",
  },
  歌词: {
    code: 1006,
    unit: "首",
    limit: 20,
    Dom: Lyrics,
    countName: "songCount",
  },
  主播电台: {
    code: 1009,
    unit: "个",
    limit: 100,
    Dom: DJRadios,
    countName: "djRadiosCount",
  },
  用户: {
    code: 1002,
    unit: "位",
    limit: 20,
    Dom: Userprofiles,
    countName: "userprofileCount",
  },
};

const Search = () => {
  console.log("entry search");
  const { keywords, type } = useParams();
  const dispatch = useAppDispatch();
  const [result, setResult] = useState({});
  const [count, setCount] = useState(0);
  const [multimatch, setMultimatch] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const { code, unit, limit, Dom, countName } = switchs[type];

  const { searchValue } = useAppSelector(({ common }) => common);

  const handleInit = async () => {
    setLoading(true);
    try {
      const { result } = await apiCloudSearch({
        keywords,
        limit,
        type: code,
        offset: (page - 1) * limit,
      });
      const count = result[countName];
      if (type === "单曲") {
        const { result: multimatch = {} } = await apiSearchMultimatch({
          keywords,
        });
        setMultimatch(multimatch);
      }
      setCount(count);
      setResult(result);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (!searchValue) {
      dispatch(
        setSearchValue({
          searchValue: keywords,
        })
      );
    }
  }, []);

  useEffect(() => {
    setPage(1);
  }, [keywords, type]);

  useEffect(() => {
    handleInit();
  }, [keywords, type, page]);

  return (
    <div className="domSearch overflow-auto max-h-full flex-auto">
      <div className="domSearch_header p-8 pb-2.5 border-b">
        <div className="font-bold text-base">
          找到
          {count || 0}
          {unit}
        </div>
        <div className="domSearch_nav mt-5 space-x-4">
          {Object.keys(switchs).map((name) => (
            <NavLink
              key={name}
              to={`/search/${keywords}/${name}`}
              className={({ isActive }) =>
                classNames("text-lighter text-sm", isActive && "font-bold")
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
        {}
      </div>
      <div className="domSearch_main">
        {loading ? (
          <div className="pt-48 flex-center">
            <Loading />
          </div>
        ) : (
          <>
            <Dom {...{ multimatch, ...result }} />
            <Page total={Math.ceil(count / limit)} page={page} func={setPage} />
          </>
        )}
      </div>
    </div>
  );
};

export default memo(Search);
