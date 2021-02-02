import React from 'react';
import { IconX, IconSearch } from '@tabler/icons';

export default ({ search, setSearch, placeholder = '' }) => (
  <div className="search">
    <input
      type="text"
      value={search}
      placeholder={placeholder}
      onChange={({ target }) => setSearch(target.value)}
    />
    <div className="ico">
      {search
        ? (
          <button type="button" onClick={() => setSearch('')}>
            <IconX size={16} />
          </button>
        ) : (
          <IconSearch size={16} />
        )}
    </div>
  </div>
);
