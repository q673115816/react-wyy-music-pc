import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';
import { apiToplistDetail } from '@/api';
import { setTopListsDetail } from '@/redux/actions';
import { transPlayCount } from '@/common/utils';

export default () => {
  const { list = [] } = useSelector(({ home }) => home.toplist);

  const top4 = list.slice(0, 4);
  const other = list.slice(4);
  const dispatch = useDispatch();
  const handleGetToplistDetail = async () => {
    try {
      const { list } = await apiToplistDetail();
      dispatch(setTopListsDetail(list));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectItem = (e) => {
    Array.from(e.target.parentElement.children)
      .forEach((item) => {
        item.classList.remove('on');
      });
    e.target.classList.add('on');
  };

  useEffect(() => {
    handleGetToplistDetail();
  }, []);
  return (
    <div className="domHome_toplist">
      <div className="domHome_toplist_title">官方榜</div>
      <div className="domHome_toplist_official">
        {top4.map((item) => (
          <div key={item.id} className="official_rank">
            <Link to="" className="official_rank_cover">
              <img className="ui_containimg" src={`${item.coverImgUrl}?param=200y200`} alt="" />
            </Link>
            <div className="official_rank_content">
              <div className="official_rank_list">
                {
                item.tracks.map((track, index) => (
                  <div className="item" key={index} onClick={handleSelectItem}>
                    <span>{index + 1}</span>
                    <span>&nbsp;口&nbsp;</span>
                    <span>{track.first}</span>
                    <Link to="" className="artist">{track.second}</Link>
                  </div>
                ))
              }
              </div>
              <Link to="/">查看全部 &gt;</Link>
            </div>
          </div>
        ))}
        差 歌手榜
      </div>
      <div className="domHome_toplist_title">全球榜</div>
      <div className="domHome_toplist_cardlist">
        {other.map((item) => (
          <div className="item" key={item.id}>
            <Link to="/" className="card">
              <span className="playCount">
                {transPlayCount(item.playCount)}
              </span>
              <img className="ui_containimg" src={`${item.coverImgUrl}?param=200y200`} alt="" />
            </Link>
            <Link to="/" className="name">{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
