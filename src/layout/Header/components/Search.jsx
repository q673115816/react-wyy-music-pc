import React, { useEffect, useState } from 'react';
import { IconSearch, IconTrash, IconX } from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  apiSearchHotDetail,
  apiSearchSuggest,
} from '@/api';

import {
  setSearchValue,
  setSearchHistory,
} from '@/redux/actions';
import { Link, useHistory } from 'react-router-dom';

export default () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [searchHot, setSearchHot] = useState([]);
  const [searchSuggest, setSearchSuggest] = useState([]);
  const [searchVisibility, setSearchVisibility] = useState(false);
  const {
    searchHistory,
    searchValue,
  } = useSelector(({ common }) => common);
  const handleSearchInit = async () => {
    try {
      const { data } = await apiSearchHotDetail();
      setSearchHot(data);
      setSearchVisibility(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchSuggestInit = async () => {
    try {
      const { result } = await apiSearchSuggest({
        keywords: searchValue,
      });
      setSearchSuggest(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (keywords) => {
    setSearchVisibility(false);
    dispatch(setSearchValue({ searchValue: keywords }));
    dispatch(setSearchHistory([
      keywords,
      ...searchHistory.filter((search) => search !== keywords),
    ]));
    // push(`/search?keywords=${keywords}`);
  };

  const handleDeleteSearchHistory = (keywords) => {
    dispatch(setSearchHistory(
      searchHistory.filter((search) => search !== keywords),
    ));
  };

  const handleDeleteAllSearchHistory = () => {
    dispatch(setSearchHistory([]));
  };

  const handleSearchChange = (e) => {
    dispatch(setSearchValue({ searchValue: e.target.value }));
  };

  const handleSubmit = () => {
    if (searchValue) {
      push(`/search?keywords=${searchValue}`);
    }
    return false;
  };

  useEffect(() => {
    if (searchValue) {
      handleSearchSuggestInit();
    }
  }, [searchValue]);
  return (
    <form className="relative" onSubmit={handleSubmit}>
      <IconSearch size={16} className="absolute inset-y-0 m-auto left-3 text-white" />
      <input
        type="text"
        placeholder="搜索"
        className="domHeader_search placeholder-white placeholder-opacity-40 text-white"
        value={searchValue}
        onChange={handleSearchChange}
        onFocus={handleSearchInit}
      />
      <div
        className="domHeader_search_box"
        style={{ display: searchVisibility ? null : 'none' }}
      >
        {searchValue ? (
          <div className="overflow-auto max-h-full flex-auto">
            <Link
              to={`/search?keywords=${searchValue}`}
              onClick={() => handleSearch(searchValue)}
            >
              搜索&quot;
              <span className="ui_link">
                {searchValue}
              </span>
              &quot;相关的结果&gt;
            </Link>
            {searchSuggest?.order?.map((order, index) => (
              <div key={order}>
                {searchSuggest[order].map((item) => (
                  <div key={item.id}>{item.name}</div>
                ))}
              </div>
            ))}
          </div>
        )
          : (
            <div className="overflow-auto max-h-full flex-auto">
              {
                searchHistory.length > 0
                && (
                  <>
                    <div className="subtitle">
                      搜索历史
                      &nbsp;
                      <button type="button" onClick={handleDeleteAllSearchHistory}>
                        <IconTrash size={16} stroke={1} />
                      </button>
                    </div>
                    <div className="searchHistory">
                      {
                        searchHistory.map((item) => (
                          <Link
                            key={item}
                            to={`/search?keywords=${item}`}
                            onClick={() => handleSearch(item)}
                            className="item"
                          >
                            {item}
                            <button
                              type="button"
                              className="ico"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleDeleteSearchHistory(item);
                              }}
                            >
                              <IconX size={16} stroke={2} />
                            </button>
                          </Link>
                        ))
                      }
                    </div>
                  </>
                )
              }
              <div className="subtitle">热搜榜</div>
              <div className="list">
                {searchHot.map((item, index) => (
                  <Link
                    to={`/search?keywords=${item.searchWord}`}
                    onClick={() => handleSearch(item.searchWord)}
                    className="item"
                    key={item.content}
                  >
                    <span className="index">{index + 1}</span>
                    <div className="aside">
                      <div className="name">
                        <span className="searchWord font-bold">
                          {item.searchWord}
                        </span>
                      &nbsp;
                        {
                          item.iconUrl
                          && (
                            <>
                              <span className="ico">
                                <img className="ui_containimg" src={item.iconUrl} alt="" />
                              </span>
                        &nbsp;
                            </>
                          )
                        }
                        <span className="text-gray-400">
                          {item.score}
                        </span>
                      </div>
                      <div className="content text-gray-400">{item.content}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

      </div>
    </form>
  );
};
