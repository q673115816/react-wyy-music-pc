import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconTrash, IconX } from '@tabler/icons';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import {
  setSearchValue,
  setSearchHistory,
  setSearchShow,
  setSearchHot,
  setSearchSuggest,
  setDialogReset,
} from '@/redux/actions';
import DomMask from '../Mask';

export default () => {
  const dispatch = useDispatch();
  const {
    searchValue,
    searchHot,
    searchSuggest,
    searchHistory,
  } = useSelector(({ search }) => search);

  const handleSearch = (keywords) => {
    // setSearchVisibility(false);
    dispatch(setDialogReset());
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

  return (
    <DomMask>
      <div className="absolute domHeader_search_box shadow rounded bg-white py-2 z-10">
        {searchValue ? (
          <div className="domHeader_search_box_value overflow-auto h-full flex-auto">
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
            <div className="domHeader_search_box_noValue overflow-auto h-full flex-auto">
              {
                searchHistory.length > 0
                && (
                  <>
                    <div className="subtitle flex items-center px-5 py-2 text-sm text-gray-400">
                      搜索历史
                      &nbsp;
                      <button type="button" onClick={handleDeleteAllSearchHistory}>
                        <IconTrash size={16} stroke={1} />
                      </button>
                    </div>
                    <div className="px-5">
                      <div className="searchHistory flex flex-wrap -m-1">
                        {
                          searchHistory.map((item) => (
                            <Link
                              key={item}
                              to={`/search?keywords=${item}`}
                              onClick={() => handleSearch(item)}
                              className="item group hover:bg-gray-100 border rounded-full relative m-1 py-2 px-4"
                            >
                              {item}
                              <button
                                type="button"
                                className="ico absolute opacity-0 group-hover:opacity-100 inset-y-0 m-auto text-gray-400"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  handleDeleteSearchHistory(item);
                                }}
                              >
                                <IconX size={14} stroke={2} />
                              </button>
                            </Link>
                          ))
                        }
                      </div>
                    </div>
                  </>
                )
              }
              <div className="subtitle px-5 py-3 text-sm text-gray-400">热搜榜</div>
              <div className="list">
                {searchHot.map((item, index) => (
                  <Link
                    to={`/search?keywords=${item.searchWord}`}
                    onClick={() => handleSearch(item.searchWord)}
                    className="item flex items-center w-full hover:bg-gray-100"
                    key={item.content}
                  >
                    <span className={classnames('index flex-center text-base', index < 3 ? 'text-red-500' : 'text-gray-200')}>
                      {index + 1}
                    </span>
                    <div className="aside flex-auto">
                      <div className="name flex items-baseline">
                        <span className="searchWord font-bold">
                          {item.searchWord}
                        </span>
                        &nbsp;
                        {
                          item.iconUrl
                          && (
                            <>
                              <img className="ico max-w-8 max-h-3" src={item.iconUrl} alt="" />
                          &nbsp;
                            </>
                          )
                        }
                        <span className="text-gray-400">
                          {item.score}
                        </span>
                      </div>
                      <div className="content mt-2 text-gray-400">
                        {item.content}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

      </div>
    </DomMask>
  );
};
