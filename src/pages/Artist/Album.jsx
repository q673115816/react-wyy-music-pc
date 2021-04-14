import React, { useState, useEffect, memo } from 'react';
import {
  IconLayoutGrid,
  IconList,
  IconLayout,
} from '@tabler/icons';
import classNames from 'classnames';
import { apiArtistAlbum } from '@/api';
import { useSelector, useDispatch } from 'react-redux';
import { setArtistLayout } from '@/reducers/artist/actions';
import { useParams } from 'react-router-dom';
import { createPortal } from 'react-dom';
import DomGrid from './layouts/Grid';
import DomList from './layouts/List';
import DomColumn from './layouts/Column';

const layouts = {
  grid: { Ico: IconLayoutGrid, View: DomGrid },
  list: { Ico: IconList, View: DomList },
  column: { Ico: IconLayout, View: DomColumn },
};

const layoutsEntries = Object.entries(layouts);

export default memo(({ id }) => {
  const dispatch = useDispatch();
  const { layout } = useSelector(({ artist }) => artist);
  const [album, setAlbum] = useState({ hotAlbums: [], more: null });

  const handleInit = async () => {
    try {
      const { hotAlbums, more } = await apiArtistAlbum({
        id,
      });

      setAlbum({ hotAlbums, more });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="domArtist_section relative">
      <div className="absolute right-8 -translate-y-full bottom-full actions ml-auto space-x-0.5 flex rounded-sm overflow-hidden">
        {
          layoutsEntries.map(([view, { Ico }]) => (
            <button
              key={view}
              type="button"
              className={classNames('px-1.5 py-0.5 bg-gray-200', 'handle', view === layout && 'bg-gray-300 text-white')}
              onClick={() => dispatch(setArtistLayout({ layout: view }))}
            >
              <Ico size={14} stroke={1} />
            </button>
          ))
        }
      </div>
      <div className="domArtist_section_layout">
        {
          ((View, hotAlbums) => <View hotAlbums={hotAlbums} />)(layouts[layout].View, album.hotAlbums)
        }
      </div>
    </div>
  );
});
