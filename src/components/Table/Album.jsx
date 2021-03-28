import React from 'react';
import { Link } from 'react-router-dom';

export default ({ name = '', id }) => (name ? (
  <Link title={name} className="ui_text_gray_hover" to={`/playlist/album/${id}`}>
    {name}
  </Link>
) : <span className="text-gray-400">未知专辑</span>);
