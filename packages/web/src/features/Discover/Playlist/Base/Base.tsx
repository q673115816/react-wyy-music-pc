import React, {memo} from 'react'
import Resize from "@/components/ResizeObserver";
import Item from "@/components/GridPlaylist/Item";
import Page from "@/components/Page/Page";
import {useGetTopPlaylistQuery} from "@/modules/services/discover";
import {useNavigate, useParams} from "react-router-dom";
import Loading from "@/components/Loading";

const Base = () => {
  const {cat = '', page = '1'} = useParams()
  const navigate = useNavigate()
  const limit = 100

  const { data, isLoading } = useGetTopPlaylistQuery({
    order: 'hot',
    cat,
    limit,
    offset: (page - 1) * limit,
  })
  if(isLoading) {
    return (
      <div className={`flex-center`}><Loading/></div>
    )
  }
  return (
    <>
      <Resize
        className="domHome_playlist_list grid gap-5"
        small="grid-cols-4"
        big="grid-cols-5"
      >
        {data?.playlists.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </Resize>
      <Page
        total={Math.ceil(data.total / 100)}
        page={page}
        func={(nextPage) => navigate(`../${nextPage}`)}
      />
    </>
  )
}

export default memo(Base)
