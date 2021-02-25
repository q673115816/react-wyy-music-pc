import React, { useState, useEffect } from 'react';
import {
  IconLayoutGrid,
  IconList,
  IconLayout,
  IconPlayerPlay,
  IconFolderPlus,
  IconHeart,
  IconDownload,
} from '@tabler/icons';
import { apiArtistAlbum, apiArtistTopSong } from '@/api';
import dayjs from 'dayjs';
import classnames from 'classnames';
import DomTags from '@/components/Tags';
import DomHeart from '@/components/Heart';
import { useSelector } from 'react-redux';
import DomGrid from './Grid';
import DomList from './List';

export default ({ id }) => {
  const [album, setAlbum] = useState({ hotAlbums: [], more: null });
  const [view, setView] = useState('column');
  const [top50, setTop50] = useState([]);
  const [limit, setLimit] = useState(10);
  const handleInit = async () => {
    try {
      const { hotAlbums, more } = await apiArtistAlbum({
        id,
      });
      const { songs } = await apiArtistTopSong({
        id,
      });
      setAlbum({ hotAlbums, more });
      setTop50(songs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="domArtist_section">
      <div className="grid_qwe">
        <div className="actions">
          <button
            type="button"
            className={classnames('flex-center', 'handle', { on: view === 'grid' })}
            onClick={() => setView('grid')}
          >
            <IconLayoutGrid size={12} />
          </button>
          <button
            type="button"
            className={classnames('flex-center', 'handle', { on: view === 'list' })}
            onClick={() => setView('list')}
          >
            <IconList size={12} />
          </button>
          <button
            type="button"
            className={classnames('flex-center', 'handle', { on: view === 'column' })}
            onClick={() => setView('column')}
          >
            <IconLayout size={12} />
          </button>
        </div>
        {
          view === 'grid'
          && (
            <DomGrid hotAlbums={album.hotAlbums} />
          )
        }
        {view === 'list'
          && (
            <DomList hotAlbums={album.hotAlbums} />
          )}
        {view === 'column'
          && (
            <div className="column">
              <div className="column_item">
                <div className="cover">
                  <div className="Top50 flex-center flex-col font-bold rounded w-full h-full text-white">
                    <div className="text-4xl">
                      TOP
                    </div>
                    <div className="text-6xl">50</div>
                  </div>
                </div>
                <div className="aside">
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
                          className={classnames('item hover:bg-gray-100 focus:outline-none focus:bg-gray-200', { 'bg-gray-50': index % 2 === 0 })}
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
          )}
      </div>
    </div>
  );
};
