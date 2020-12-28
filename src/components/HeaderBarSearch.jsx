import React from 'react';

export default ({ search, setSearch, placeholder = '' }) => (
  <div className="search">
    <input type="text" value={search} placeholder={placeholder} onChange={({ target }) => setSearch(target.value)} />
    <div className="ico">
      {search
        ? (
          <button type="button" onClick={() => setSearch('')}>
            <svg className="icon icon-tabler icon-tabler-x" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        ) : (
          <svg className="icon icon-tabler icon-tabler-search" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        )}
    </div>
  </div>
);
