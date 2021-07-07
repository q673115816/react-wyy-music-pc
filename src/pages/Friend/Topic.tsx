import React, {
  memo, useEffect, useRef, useState,
} from 'react';
import { apiTopicDetail, apiTopicDetailEventHot, apiHotTopic } from '@/api';
import useInfinite from '@/hooks/useInfinite';
import DomDynamic from '@/components/Dynamic';
import { IconShare, IconPencil } from '@tabler/icons';
import DomTopicList from './components/TopicList';

export default memo(({ id }) => {
  const [detail, setDetail] = useState({});
  const [hot, setHot] = useState([]);
  const [data, setData] = useState([]);
  const actid = useRef(id);
  const DomScroll = useRef();
  const DomObserver = useRef();

  const handleInitHot = async () => {
    try {
      const { act } = await apiTopicDetail({
        actid: actid.current,
      });
      const { hot } = await apiHotTopic({
        limit: 10,
      });
      setDetail(act);
      setHot(hot);
    } catch (error) {
      console.log(error);
    }
  };
  const handleInitEvent = async () => {
    try {
      const { events } = await apiTopicDetailEventHot({
        actid: actid.current,
      });
      setData(events);
    } catch (error) {
      console.log(error);
    }
  };
  useInfinite(handleInitEvent, DomScroll, DomObserver);
  useEffect(() => {
    actid.current = id;
    setData([]);
    handleInitHot(id);
  }, [id]);
  return (
    <div className="domFriend h-full overflow-auto" ref={DomScroll}>
      <div className="flex divide-x">
        <div className="domFriend_left flex-auto">
          <div className="px-8 pt-4">
            <div className="border-b">
              <div
                className="rounded overflow-hidden border bg-white flex-center flex-col relative bg-cover bg-center"
                style={{ height: 220, backgroundImage: `url(${detail.coverPCUrl})` }}
              >
                <button
                  type="button"
                  className="absolute m-4 w-8 h-8 flex-center top-0 right-0 border text-white border-current rounded-full bg-black bg-opacity-50"
                >
                  <IconShare size={24} stroke={1} />
                </button>
                <div className="relative border-t border-b py-6 text-white text-xl">
                  <span className="w-52 text-center whitespace-nowrap w-min">
                    {`#${detail.title}#`}
                  </span>
                  <span className="absolute inset-x-0 text-center text-xs whitespace-nowrap top-full transform -translate-y-1/2">
                    {`${detail.participateCount}人参与`}
                  </span>
                </div>
                <button type="button" className="bg-white flex-center h-9 mt-4 w-52 rounded text-red-500 bg-opacity-90 hover:bg-opacity-100">
                  <IconPencil size={16} />
                  立即参与
                </button>
              </div>
              <div className="pb-8">{detail.text}</div>
            </div>
            <DomDynamic list={data} />
            <div ref={DomObserver} />
          </div>
        </div>
        <div className="domFriend_right flex-none" style={{ width: 250 }}>
          <div className="p-4 text-sm text-gray-700">推荐话题</div>
          <DomTopicList list={hot} />
        </div>
      </div>
    </div>
  );
});
