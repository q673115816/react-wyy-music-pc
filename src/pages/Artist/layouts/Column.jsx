import React, { useEffect, useState } from 'react';
import {

  IconPlayerPlay,
  IconFolderPlus,
  IconDownload,
} from '@tabler/icons';

import dayjs from 'dayjs';
import classNames from 'classnames';
import DomTags from '@/components/Tags';
import DomHeart from '@/components/Heart';
import { apiArtistTopSong } from '@/api';
import { useParams } from 'react-router-dom';

export default ({ hotAlbums = [] }) => {
  const { id } = useParams();
  const [top50, setTop50] = useState([]);
  const [limit, setLimit] = useState(10);
  const handleInit = async () => {
    try {
      const { songs } = await apiArtistTopSong({
        id,
      });
      setTop50(songs);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="column p-8">
      <div className="column_item">
        <div className="cover">
          <div className="Top50 flex-none bg-black bg-opacity-50 flex-center flex-col font-bold rounded w-full h-full text-white">
            <div className="text-4xl">
              TOP
            </div>
            <div className="text-6xl">50</div>
          </div>
        </div>
        <div className="aside flex-auto ml-20 w-0">
          <div className="flex">
            <span className="font-bold text-base">
              热门50首
            </span>
            <div className="flex items-center">
              <button type="button" className="flex-none border rounded-full flex-center mx-3 p-1">
                <IconPlayerPlay size={10} className="fill-current" />
              </button>
              <span className="text-gray-300">
                |
              </span>
              <button type="button" className="mx-3">
                <IconFolderPlus size={20} stroke={1} />
              </button>
            </div>
          </div>
          <div className="list mt-2">
            {
            top50.slice(0, limit).map((item, index) => (
              <div
                className={classNames('item hover:bg-gray-100 focus:outline-none focus:bg-gray-200', { 'bg-gray-50': index % 2 === 0 })}
                tabIndex="2"
                key={item.id}
              >
                <div className="index flex-none text-right text-gray-400">
                  {
                    String(index + 1).padStart(2, 0)
                  }
                </div>
                <div className="heart flex-none text-center">
                  <DomHeart item={item} />
                </div>
                <div className="download flex-none text-center">
                  <button type="button" className="text-gray-500 hover:text-black">
                    <IconDownload size={16} stroke={1} />
                  </button>
                </div>
                <div className="name flex-auto flex flex-auto min-w-0 px-2.5">
                  <span
                    className="truncate"
                    title={`${item.name}(${item.alia.map((alia) => alia)})`}
                  >
                    {item.name}
                              &nbsp;
                    <span className="text-gray-400">
                      {item.alia.map((alia) => alia)}
                    </span>
                  </span>
                  <DomTags item={item} className="flex-none" />
                </div>
                <div className="duration text-gray-400 flex-none">
                  {dayjs(item.dt).format('mm:ss')}
                </div>
              </div>
            ))
          }
            {
            limit === 10 && top50.length > 10
            && (
              <button
                type="button"
                className="seeMore"
                onClick={() => setLimit(50)}
              >
                查看全部
                {top50.length}
                首 &gt;
              </button>
            )
          }
          </div>
        </div>
      </div>
    </div>
  );
};
