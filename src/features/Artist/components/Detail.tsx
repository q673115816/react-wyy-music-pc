import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useGetArtistDescQuery } from "@/modules/services/artist";
import Loading from "@/components/Loading";

export default memo(function Detail() {
  const { id = "" } = useParams();
  const { data, isLoading } = useGetArtistDescQuery({ id });
  if (isLoading) {
    return (
      <div className="flex-center">
        <Loading />
      </div>
    );
  }
  return (
    <div className="domArtist_section p-8 leading-8 text-sm select-text">
      <div className="domArtist_subtitle font-bold">简介</div>
      <div className="domArtist_article text-gray-500 indent-8">
        {data?.briefDesc}
      </div>
      <br />
      <br />
      {data?.introduction?.map((introduction) => (
        <div key={introduction.ti} className="select-text">
          <div className="domArtist_subtitle font-bold">{introduction.ti}</div>
          <div className="domArtist_article text-gray-500 whitespace-pre-line">
            {introduction.txt}
          </div>
        </div>
      ))}
    </div>
  );
});