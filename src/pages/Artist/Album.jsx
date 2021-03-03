import React, { useState, useEffect } from 'react';

import { apiArtistAlbum } from '@/api';

import { useParams } from 'react-router-dom';
import DomGrid from './layouts/Grid';
import DomList from './layouts/List';
import DomColumn from './layouts/Column';

export default ({ view }) => {
  const { id } = useParams();
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
    <div className="domArtist_section">
      <div className="domArtist_section_layout">

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
          <DomColumn hotAlbums={album.hotAlbums} />
          )}
      </div>
    </div>
  );
};
