import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import './style.scss';
import { apiRelatedAllvideo } from '@/api';
import { setVideoDetailRelated } from '@/redux/actions';

export default () => {
  const { vid } = useParams();
  const dispatch = useDispatch();
  const { s } = useSelector(({ video }) => video);
  const { goBack } = useHistory();

  const handleInit = async () => {
    try {
      const { data: related } = await apiRelatedAllvideo({
        id: vid,
      });
      dispatch(setVideoDetailRelated({
        related,
      }));
    } catch (error) {

    }
  };

  useEffect(() => {

  }, []);
  return (
    <div className="domVideoDetail">
      <div className="domVideoDetail_header domVideoDetail_container">
        <div className="left">
          <button type="button" onClick={() => goBack()}>
            <i className="material-icons">navigate_before</i>
            <b>视频详情</b>
          </button>
        </div>
        <div className="right">
          <b>相关推荐</b>
        </div>
      </div>
      <div className="domVideoDetail_main domVideoDetail_container">
        <div className="left">
          <video src="" />
        </div>
        <div className="right" />
      </div>
    </div>
  );
};
