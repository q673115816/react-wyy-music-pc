import React, { memo, createElement, ReactNode } from "react";
import {
  IconLayoutGrid,
  IconList,
  IconLayout,
  TablerIcon,
} from "@tabler/icons";
import classNames from "classnames";
import Grid from "./layouts/Grid";
import List from "./layouts/List";
import Column from "./layouts/Column";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "react-use";
import { useGetArtistAlbumQuery } from "@/modules/services/artist";
import Loading from "@/components/Loading";

export type Layout = "Grid" | "List" | "Column";

const navs: [Layout, TablerIcon][] = [
  ["Grid", IconLayoutGrid],
  ["List", IconList],
  ["Column", IconLayout],
];

const Contents: { [key in Layout]: ReactNode } = {
  Grid,
  List,
  Column,
};

export default memo(function Album() {
  const { id = "" } = useParams();
  const [layout = "Grid", setLayout, remove] = useLocalStorage<Layout>(
    "layout",
    navs[0][0]
  );
  const { data, isLoading } = useGetArtistAlbumQuery({ id });
  const hotAlbums = data?.hotAlbums || [];
  const more = data?.more || false;
  if (isLoading) {
    return (
      <div className="flex-center">
        <Loading />
      </div>
    );
  }
  return (
    <div className="domArtist_section relative">
      <div className="absolute right-8 bottom-full actions ml-auto space-x-0.5 flex rounded-sm overflow-hidden">
        {navs.map(([view, Ico]) => (
          <button
            key={view}
            type="button"
            className={classNames(
              "px-1.5 py-0.5 bg-gray-200",
              "handle",
              view === layout && "bg-gray-400 text-white"
            )}
            onClick={() => setLayout(view)}
          >
            <Ico size={14} stroke={1} />
          </button>
        ))}
      </div>
      <div className="domArtist_section_layout">
        {createElement(Contents[layout], { hotAlbums, id })}
      </div>
    </div>
  );
});
