import React, { useEffect } from 'react';
import { NavLink, Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss';
import { apiToplistArtist } from '@/api';
import { setTopListArtist } from '@/redux/actions';

export default () => {
  const dispatch = useDispatch();
  const { type = 1 } = useParams();
  const { artist } = useSelector(({ toplistartist }) => toplistartist);

  const handleGetArtist = async () => {
    try {
      const { list } = await apiToplistArtist(type);
      dispatch(setTopListArtist(list.artists));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetArtist();
  }, [type]);
  const top3 = artist.slice(0, 3);
  const other = artist.slice(3);
  return (
    <div className="domtoplistartist">
      <div className="domtoplistartist_header">
        <div className="domtoplistartist_title">云音乐歌手榜</div>
        <div className="domtoplistartist_nav">
          <NavLink className="domtoplistartist_nav_link" activeClassName="on" to="/toplistartist/1">华语</NavLink>
          <NavLink className="domtoplistartist_nav_link" activeClassName="on" to="/toplistartist/2">欧美</NavLink>
          <NavLink className="domtoplistartist_nav_link" activeClassName="on" to="/toplistartist/3">韩国</NavLink>
          <NavLink className="domtoplistartist_nav_link" activeClassName="on" to="/toplistartist/4">日本</NavLink>
        </div>
      </div>
      <div className="domtoplistartist_top3_wrap">
        {top3.map((item) => (
          <Link className="domtoplistartist_top3_link" to="/detail" key={item.id}>{item.name}</Link>
        ))}
      </div>
      <div className="domtoplistartist_other_wrap">
        {other.map((item, index) => (
          <Link className="domtoplistartist_other_link" to="/detail" key={item.id}>{item.name}</Link>
        ))}
      </div>
    </div>
  );
};
