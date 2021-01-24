import React, { useState, useEffect } from 'react';
import { apiSimiArtist } from '@/api';
import { Link } from 'react-router-dom';

export default ({ id }) => {
  const [simiArtists, setSimiArtists] = useState([]);
  const handleInit = async () => {
    try {
      const { artists } = await apiSimiArtist({
        id,
      });
      setSimiArtists(artists);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="domArtist_section">
      <div className="ui_grid col_5">
        {simiArtists.map((item) => (
          <div className="item" key={item.id}>
            <div className="cover">
              <div className="inner">
                <Link to={`/artist/${item.id}`}>
                  <img className="ui_containimg" src={`${item.picUrl}?param=200y200`} alt="" />
                </Link>
              </div>
            </div>
            <div className="footer">
              <Link to={`/artist/${item.id}`}>{item.name}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
