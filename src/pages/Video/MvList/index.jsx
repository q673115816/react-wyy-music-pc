import React, {
  useEffect, useState, memo,
} from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import {
  IconArrowDown, IconArrowUp, IconMinus, IconFlame,
  IconChevronRight,
} from '@tabler/icons';
import {
  apiMvFirst,
  apiMvAll,
  apiMvExclusiveRcmd,
  apiTopMv,
} from '@/api';
import DomGridVideo from '@/components/GridVideo';

const BuildLastRank = (lastRank, currentRank) => {
  if (lastRank < currentRank) {
    return <IconArrowDown size={8} />;
  }
  if (lastRank > currentRank) {
    return (
      <span className="ui_red">
        <IconArrowUp size={8} />
      </span>
    );
  }
  return <IconMinus size={8} />;
};

const category = [
  '内地',
  '港台',
  '欧美',
  '日本',
  '韩国',
];

export default memo(() => {
  console.log('mv');
  const [firstArea, setFirstArea] = useState('内地');
  const [topArea, setTopArea] = useState('内地');
  const [mvFirst, setMvFirst] = useState([]);
  const [mvHot, setMvHot] = useState([]);
  const [mvWy, setMvWy] = useState([]);
  const [mvTop, setMvTop] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleInit = async () => {
    try {
      const [
        { data: hot },
        { data: wy },
      ] = await Promise.all([
        apiMvAll({
          order: '最热',
          limit: 6,
        }),
        apiMvExclusiveRcmd({
          limit: 6,
        }),
      ]);
      setMvHot(hot);
      setMvWy(wy);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetFirstArea = async () => {
    try {
      const { data: first } = await apiMvFirst({
        area: firstArea,
        limit: 6,
      });
      setMvFirst(first);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetTopArea = async () => {
    try {
      const { data: top } = await apiTopMv({
        area: topArea,
        limit: 10,
      });
      setMvTop(top);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, []);

  useEffect(() => {
    handleGetFirstArea();
  }, [firstArea]);

  useEffect(() => {
    handleGetTopArea();
  }, [topArea]);
  // if (loading) return <div>loading</div>;
  return (
    <div className="domVideoList_content overflow-auto max-h-full flex-auto">
      <div className="domMvList_sublist">
        <div className="domMvList_header mb-5 flex justify-between items-center">
          <Link
            to={`/allmv?order=最新&area=${firstArea}`}
            className="domMvList_subLink font-bold text-base flex items-center"
          >
            最新MV
            <IconChevronRight size={20} />
          </Link>
          <div className="recommend_nav flex divide-x space-x-1">
            {
              category.map((item) => (
                <div className="item" key={item}>
                  <button
                    onClick={() => setFirstArea(item)}
                    type="button"
                    className={classnames('link rounded-full px-2.5', firstArea === item ? 'text-red-500 bg-red-50' : 'ui_text_black_hover')}
                  >
                    {item}
                  </button>
                </div>
              ))
            }
          </div>
        </div>
        <DomGridVideo list={mvFirst} type="mv" />
      </div>
      <div className="domMvList_sublist">
        <div className="domMvList_header mb-5 flex justify-between items-center">
          <Link
            to="/allmv?order=最热"
            className="domMvList_subLink font-bold text-base flex items-center"
          >
            热播MV
            <IconChevronRight size={20} />
          </Link>
        </div>
        <DomGridVideo list={mvHot} type="mv" />
      </div>
      <div className="domMvList_sublist">
        <div className="domMvList_header mb-5 flex justify-between items-center">
          <Link
            to="/allmv?type=网易出品&order=最新"
            className="domMvList_subLink font-bold text-base flex items-center"
          >
            网易出品
            <IconChevronRight size={20} />
          </Link>
        </div>
        <DomGridVideo list={mvWy} type="mv" />
      </div>
      <div className="domMvList_header mb-5 flex justify-between items-center">
        <Link to="/allmv/" className="domMvList_subLink font-bold text-base flex items-center">
          MV排行榜
          <IconChevronRight size={20} />
        </Link>
        <div className="recommend_nav flex divide-x space-x-1">
          {
            category.map((item) => (
              <div className="item" key={item}>
                <button
                  onClick={() => setFirstArea(item)}
                  type="button"
                  className={classnames('link rounded-full px-2.5', firstArea === item ? 'text-red-500 bg-red-50' : 'ui_text_black_hover')}
                >
                  {item}
                </button>
              </div>
            ))
          }
        </div>
      </div>
      <div className="domVideoTop grid grid-cols-2">
        {mvTop.map((item, index) => (
          <div className="item" key={item.id}>
            <div className="rank flex-center flex-none flex-col">
              <div className="num text-gray-400">
                {String(index + 1).padStart(2, 0)}
              </div>
              <div className="arrow">
                {BuildLastRank(item.lastRank, index + 1)}
              </div>
            </div>
            <div className="cover">
              <Link to={`/player/mv/${item.id}`}>
                <img className="ui_coverimg" src={item.cover} alt="" />
                <div className="score absolute right-0 top-0 p-1 text-white flex-center">
                  <IconFlame size={16} />
                  {item.score}
                </div>
              </Link>
            </div>
            <div className="aside flex-auto w-px px-2">
              <div className="name truncate">
                <Link to={`/player/mv/${item.id}`} className="text-sm ui_text_black_hover">
                  {item.name}
                </Link>
              </div>
              <div className="artists mt-4 truncate text-gray-300">
                {
                  item.artists.map((artist, index) => (
                    <span key={artist.id}>
                      {index > 0 && ' / '}
                      <Link
                        to={`/artist/${artist.id}`}
                        className="ui_text_gray_hover"
                      >
                        {artist.name}
                      </Link>
                    </span>
                  ))
                }
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
});
