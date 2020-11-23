import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'

import { limit } from '@/common'
import { artist_list } from '@/api'
import { addhometopartists, inithometopartists } from '@/redux/actions'

import options from './filter'

const Domitem = ({ item }) => (
  <div className="item">
    <div className="img">
      <Link to={`/artist/detail/${item.id}`}>
        <LazyLoad overflow>
          <img className="containimg" src={item.img1v1Url + '?param=200y200'} alt={item.name} />
        </LazyLoad>
      </Link>
    </div>
    <div className="info">
      <Link to={`/artist/detail/${item.id}`}>
        {item.name}
      </Link>
    </div>
  </div>
)

const Domlist = ({ option, artists }) => (
  <>
    {option.area === -1 && option.initial === -1 && <div className="item">
      <div className="img">
        <Link to={`/artist/rank`}>
          <img
            className="containimg"
            src="http://p3.music.126.net/1tSJODTpcbZvNTCdsn4RYA==/109951165034950656.jpg?param=200y200"
            alt=""
            style={{ filter: "blur(2)" }} />
          <div className="rankmask">
            歌手榜
              </div>
        </Link>
      </div>
      <div className="info">
        <Link to={`/artist/rank`}>
          歌手排行榜 &gt;
            </Link>
      </div>
    </div>}
    {artists.map((item, index) => <Domitem item={item} key={index} />)}
  </>
)



export default () => {
  const dispatch = useDispatch()
  const [option, setOption] = useState({
    type: -1,
    area: -1,
    initial: -1,
    offset: 0
  })
  const [isPending, setIsPending] = useState(false)
  const [hasMore, setHasMore] = useState(false)
  const { artists } = useSelector(({ home }) => home.artist)

  const handleChangeOption = (newoption) => {
    dispatch(inithometopartists())
    setOption({
      ...option,
      ...newoption,
      offset: 0
    })
  }

  const handleScroll = ({ target }) => {
    const { scrollHeight, scrollTop, clientHeight } = target
    if (scrollTop + clientHeight + 300 > scrollHeight) {
      if (hasMore && !isPending) {
        setOption({
          ...option,
          offset: option.offset + limit
        })
      }
    }
  }

  const handleGetList = async () => {
    if (isPending) return
    try {
      setIsPending(true)
      const { artists, more } = await artist_list(option)
      setHasMore(more)
      dispatch(addhometopartists(artists))
      setIsPending(false)
    } catch (error) {
      console.log(error);
      setIsPending(false)
    }
  }

  useEffect(() => {
    handleGetList()
  }, [option])


  return (
    <div className="domhome_artist overflow-auto" onScroll={handleScroll}>
      <div className="domhome_artist_control">
        {options.map((filter, index) => (
          <div className="domhome_artist_filter" key={index}>
            <div className="title">{filter[1]}</div>
            <ul className="list">
              {filter[2].map((item) => (
                <li
                  className={['item', filter[0], option[filter[0]] === item[0] ? 'on' : ''].join(' ')}
                  key={item[0]}
                  onClick={() => handleChangeOption({ [filter[0]]: item[0] })}>{item[1]}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="domhome_artist_list">
        {/* <Domlist {...{ artists, option }} /> */}
        {artists.map((item, index) => <Domitem item={item} key={index} />)}
      </div>
      {hasMore ? <div>加载中</div> : <div>已经到底了</div>}
    </div>
  );
};
