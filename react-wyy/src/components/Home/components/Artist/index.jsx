import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { artist_list } from '@/api'
import { gethometopartists } from '@/redux/actions'
const options = {
  area: [
    ["-1", "全部"],
    ["7", "华语"],
    ["96", "欧美"],
    ["8", "日本"],
    ["16", "韩国"],
    ["0", "其他"]
  ],
  type: [
    ["-1", "全部"],
    ["1", "男歌手"],
    ["2", "女歌手"],
    ["3", "乐队"]
  ],
  initial: [
    ["-1", "热门"],
    ["a", "a"],
    ["b", "b"],
    ["c", "c"],
    ["d", "d"],
    ["e", "e"],
    ["f", "f"],
    ["g", "g"],
    ["h", "h"],
    ["i", "i"],
    ["j", "j"],
    ["k", "k"],
    ["l", "l"],
    ["m", "m"],
    ["n", "n"],
    ["o", "o"],
    ["p", "p"],
    ["q", "q"],
    ["r", "r"],
    ["s", "s"],
    ["t", "t"],
    ["u", "u"],
    ["v", "v"],
    ["w", "w"],
    ["x", "x"],
    ["y", "y"],
    ["z", "z"],
    ["#", "#"]
  ]
};

export default () => {
  const [type, setType] = useState('-1');
  const [area, setArea] = useState('-1');
  const [initial, setInitial] = useState('-1');
  const [isFulfilled, setIsFulfilled] = useState(false)
  const { artists } = useSelector(({ home }) => home.artist)
  const dispatch = useDispatch()

  useEffect(() => {
    void async function () {
      try {
        setIsFulfilled(false)
        const { artists } = await artist_list(JSON.stringify({
          type,
          area,
          initial
        }))
        dispatch(gethometopartists(artists))
      } catch (error) {
        console.log(error);
      } finally {
        setIsFulfilled(true)
      }

    }()
  }, [type, area, initial])


  const Domlist = () => (
    <>
      {area === '-1' && initial === '-1' && <div className="item">
        <div className="img">
          <Link to={`/artist/rank`}>
            <img className="containimg" src="http://p3.music.126.net/1tSJODTpcbZvNTCdsn4RYA==/109951165034950656.jpg" alt="" style={{ filter: "blur(2)" }} />
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
      {artists.map((item) => (
        <div className="item" key={item.id}>
          <div className="img">
            <Link to={`/artist/detail/${item.id}`}>
              <img className="containimg" src={item.img1v1Url} alt={item.name} />
            </Link>
          </div>
          <div className="info">
            <Link to={`/artist/detail/${item.id}`}>
              {item.name}
            </Link>
          </div>
        </div>
      ))}
    </>
  )

  return (
    <div className="domhome_artist">
      <div className="domhome_artist_control">
        <div className="domhome_artist_filter">
          <div className="title">语种</div>
          <ul className="list">
            {options.area.map((item, index) => (
              <li
                className={['item', 'type', type === item[0] ? 'on' : ''].join(' ')}
                key={item[0]}
                onClick={() => setType(item[0])}>{item[1]}</li>
            ))}
          </ul>
        </div>
        <div className="domhome_artist_filter">
          <div className="title">分类</div>
          <ul className="list">
            {options.type.map((item, index) => (
              <li
                className={['item', 'area', area === item[0] ? 'on' : ''].join(' ')}
                key={item[0]}
                onClick={() => setArea(item[0])}>{item[1]}</li>
            ))}
          </ul>
        </div>
        <div className="domhome_artist_filter">
          <div className="title">筛选</div>
          <ul className="list">
            {options.initial.map((item, index) => (
              <li
                className={['item', 'initial', initial === item[0] ? 'on' : ''].join(' ')}
                key={item[0]}
                onClick={() => setInitial(item[0])}>{item[1].toUpperCase()}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="domhome_artist_list">
        {isFulfilled ? <Domlist /> : ''}
      </div>
    </div>
  );
};
