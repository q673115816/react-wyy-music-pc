import React from 'react';
import { Link } from 'react-router-dom';

export default ({ artists = [] }) => (
  <>
    {artists.map((artist, index) => (
      <span key={artist.id + artist.name}>
        {index > 0 && ' / '}
        <Link to={`/artist/${artist.id}`} className="ui_text_black_hover">
          {artist.name}
        </Link>
      </span>
    ))}
  </>
);
