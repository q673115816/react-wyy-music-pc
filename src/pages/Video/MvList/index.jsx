import React, {
  useEffect, useState, memo,
} from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
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
  const [mvFirst, setMVFirst] = useState([]);
  const [mvHot, setMVHot] = useState([]);
  const [mvWy, setMVWy] = useState([]);
  const [mvTop, setMVTop] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleInit = async () => {
    try {
      const [
        { data: hot },
        { data: wy },
      ] = await Promise.all([
        apiMVAll({
          order: '最热',
          limit: 6,
        }),
        apiMVExclusiveRcmd({
          limit: 6,
        }),
      ]);
      setMVHot(hot);
      setMVWy(wy);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetFirstArea = async () => {
    try {
      const { data: first } = await apiMVFirst({
        area: firstArea,
        limit: 6,
      });
      setMVFirst(first);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetTopArea = async () => {
    try {
      const { data: top } = await apiTopMV({
        area: topArea,
        limit: 10,
      });
      setMVTop(top);
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
        <DomGridVideo list={mvHot} type="mv" />
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
        <DomGridVideo list={mvWy} type="mv" />
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
      <DomGridMVToplist list={mvTop} />
    </div>
  );
});
