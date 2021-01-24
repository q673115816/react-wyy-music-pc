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
import DomGrid from './Grid';
import DomList from './List';

export default ({ id }) => {
  const [album, setAlbum] = useState({ hotAlbums: [], more: null });
  const [view, setView] = useState('column');
  const [top50, setTop50] = useState([]);
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
          <button type="button" className={classnames('flex-center', 'handle', { on: view === 'grid' })} onClick={() => setView('grid')}>
            <IconLayoutGrid size={12} stroke={1.5} />
          </button>
          <button type="button" className={classnames('flex-center', 'handle', { on: view === 'list' })} onClick={() => setView('list')}>
            <IconList size={12} stroke={1.5} />
          </button>
          <button type="button" className={classnames('flex-center', 'handle', { on: view === 'column' })} onClick={() => setView('column')}>
            <IconLayout size={12} stroke={1.5} />
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
                          <div className="Top50">
                            TOP50
                          </div>
                        </div>
                        <div className="aside">
                          <div>
                            <span className="font-bold">
                              热门50首
                            </span>
                            <button type="button">
                              <IconPlayerPlay size={12} />
                            </button>
                            |
                            <button type="button">
                              <IconFolderPlus size={12} />
                            </button>
                          </div>
                          <div className="list">
                            {
                                            top50.map((item, index) => (
                                              <div className="item" key={item.id}>
                                                <div className="cell index text-gray-400">
                                                  {
                                                            String(index + 1).padStart(2, 0)
                                                        }
                                                </div>
                                                <div className="cell heart text-gray-400">
                                                  <button type="button">
                                                    <IconHeart size={14} />
                                                  </button>
                                                </div>
                                                <div className="cell download text-gray-400">
                                                  <button type="button">
                                                    <IconDownload size={16} stroke={1.5} />
                                                  </button>
                                                </div>
                                                <div className="cell name">
                                                  <span className="truncate">
                                                    {item.name}
                              &nbsp;
                                                    <span className="text-gray-400">
                                                      {item.alia.map((alia) => alia)}
                                                    </span>
                                                  </span>
                                                </div>
                                                <div className="cell duration text-gray-400">
                                                  {dayjs(item.dt).format('mm:ss')}
                                                </div>
                                              </div>
                                            ))
                                        }
                            {
                                            top50.length > 10
                                            && <button type="button" className="seeMore">查看全部50首 &gt;</button>
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
