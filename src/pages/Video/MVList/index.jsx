import React, {
  useEffect, memo, useMemo,
} from 'react';
// import { unstable_batchedUpdates } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import {
  IconChevronRight,
} from '@tabler/icons';
import {
  apiMVFirst,
  apiMVAll,
  apiMVExclusiveRcmd,
  apiTopMV,
} from '@/api';
import DomGridVideo from '@/components/GridVideo';
import DomGridMVToplist from '@/components/GridMVToplist';
import DomLoading from '@/components/Loading';
import {
  setMVlistInit, setMVlistTopareaInit,
  setMVlistFirstareaInit,
} from '@/reducers/mvlist/actions';
import './style.scss';

const category = [
  '内地',
  '港台',
  '欧美',
  '日本',
  '韩国',
];

export default memo(() => {
  // console.log('mv');
  const dispatch = useDispatch();
  const {
    firstArea,
    topArea,
    first,
    hot,
    wy,
    top,
    timestamp,
  } = useSelector(({ mvlist }) => mvlist);
  const memoLoading = useMemo(() => Date.now() - timestamp > 3600000, [timestamp]);
  const listFilter = (arr) => arr.map((({
    id, playCount, cover, name, artists, briefDesc,
  }) => ({
    type: 0,
    id,
    cover,
    briefDesc,
    playCount,
    title: name,
    creator: artists.map(({ id: userId, name: userName }) => ({ userId, userName })),
  })));
  const handleInit = async () => {
    try {
      const [
        { data: hot },
        { data: wy },
        { data: first },
        { data: top },
      ] = await Promise.all([
        apiMVAll({
          order: '最热',
          limit: 6,
        }),
        apiMVExclusiveRcmd({
          limit: 6,
        }),
        apiMVFirst({
          area: firstArea,
          limit: 6,
        }),
        apiTopMV({
          area: topArea,
          limit: 10,
        }),
      ]);
      dispatch(setMVlistInit({
        first: listFilter(first),
        hot: listFilter(hot),
        wy: listFilter(wy),
        top,
        timestamp: Date.now(),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeFirstArea = async (firstArea) => {
    try {
      const { data: first } = await apiMVFirst({
        area: firstArea,
        limit: 6,
      });
      dispatch(setMVlistFirstareaInit({
        firstArea,
        first: listFilter(first),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeTopArea = async (topArea) => {
    try {
      const { data: top } = await apiTopMV({
        area: topArea,
        limit: 10,
      });
      dispatch(setMVlistTopareaInit({
        topArea,
        top,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (memoLoading) {
      handleInit();
    }
  }, [memoLoading]);

  if (memoLoading) return <div className="w-full h-full flex-center"><DomLoading /></div>;
  return (
    <div className="domVideoList_content px-8 overflow-auto max-h-full flex-auto">
      <div className="domMVList_sublist">
        <div className="domMVList_header mb-5 flex justify-between items-center">
          <Link
            to={`/allmv?order=最新&area=${firstArea}`}
            className="domMVList_subLink font-bold text-base flex items-center"
          >
            最新MV
            <IconChevronRight size={20} />
          </Link>
          <div className="recommend_nav flex divide-x space-x-1">
            {
              category.map((item) => (
                <div className="item" key={item}>
                  <button
                    onClick={() => handleChangeFirstArea(item)}
                    type="button"
                    className={classNames('link rounded-full px-2.5', firstArea === item ? 'text-red-500 bg-red-50' : 'ui_text_black_hover')}
                  >
                    {item}
                  </button>
                </div>
              ))
            }
          </div>
        </div>
        <DomGridVideo list={first} />
      </div>
      <div className="domMVList_sublist">
        <div className="domMVList_header mt-8 mb-5 flex justify-between items-center">
          <Link
            to="/allmv?order=最热"
            className="domMVList_subLink font-bold text-base flex items-center"
          >
            热播MV
            <IconChevronRight size={20} />
          </Link>
        </div>
        <DomGridVideo list={hot} />
      </div>
      <div className="domMVList_sublist">
        <div className="domMVList_header mt-8 mb-5 flex justify-between items-center">
          <Link
            to="/allmv?type=网易出品&order=最新"
            className="domMVList_subLink font-bold text-base flex items-center"
          >
            网易出品
            <IconChevronRight size={20} />
          </Link>
        </div>
        <DomGridVideo list={wy} />
      </div>
      <div className="domMVList_header mt-8 mb-5 flex justify-between items-center">
        <Link to="/toplist-mv/" className="domMVList_subLink font-bold text-base flex items-center">
          MV排行榜
          <IconChevronRight size={20} />
        </Link>
        <div className="recommend_nav flex divide-x space-x-1">
          {
            category.map((item) => (
              <div className="item" key={item}>
                <button
                  onClick={() => handleChangeTopArea(item)}
                  type="button"
                  className={classNames('link rounded-full px-2.5', topArea === item ? 'text-red-500 bg-red-50' : 'ui_text_black_hover')}
                >
                  {item}
                </button>
              </div>
            ))
          }
        </div>
      </div>
      <DomGridMVToplist
        list={top}
        schema={[
          ['评论', '播放'],
          ['收藏', '分享', '下载MV', '复制链接'],
        ]}
      />
    </div>
  );
});
