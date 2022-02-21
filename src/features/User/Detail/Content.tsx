import React, { memo } from "react";
import { useGetUserPlaylistQuery } from "@/modules/services/user";
import Layout from "@/features/User/Detail/components/layout";
import { useParams } from "react-router-dom";
import Loading from "@/components/Loading";

const Content = () => {
  const { uid } = useParams();
  const { data, isLoading } = useGetUserPlaylistQuery({
    uid,
  });
  const playlist = data?.playlist || [];

  const ownPlaylist = playlist.filter((item) => String(item.userId) === uid);

  const savePlaylist = playlist.filter((item) => String(item.userId) !== uid);
  if (isLoading) {
    return (
      <div className="flex-center">
        <Loading />
      </div>
    );
  }
  return (
    <div className="domUserDetail_main">
      <Layout list={ownPlaylist} />
      <Layout list={savePlaylist} />
    </div>
  );
};

export default memo(Content);
