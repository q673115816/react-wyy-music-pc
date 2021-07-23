import React, {memo} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '@/reducers/hooks'
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import {
  setSearchValue,
  setSearchHistory,
  setSearchHot,
  setSearchSuggest,
} from '@/reducers/search/slice';
import { setDialogReset, setSearchShow } from '@/reducers/mask/actions';
import Mask from '../Mask';
import History from './History';

export default memo(() => {
  const dispatch = useAppDispatch();
  const {
    searchValue,
    searchHot,
    searchSuggest,
    searchHistory,
  } = useSelector(({ search }) => search);
  const { searchVisibility } = useAppSelector(({ mask }) => mask);
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
  if (!searchVisibility) return null;

  return (
    <Mask>
      <div className="absolute domHeader_search_box shadow rounded bg-white py-2 z-10">
        {searchValue ? (
          <div className="domHeader_search_box_value overflow-auto h-full flex-auto">
            <Link
              to={`/search/${searchValue}`}
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
                && <History handleSearch={handleSearch} />
              }
              <div className="subtitle px-5 py-3 text-sm text-gray-400">热搜榜</div>
              <div className="list">
                {searchHot.map((item, index) => (
                  <Link
                    to={`/search/${item.searchWord}`}
                    onClick={() => handleSearch(item.searchWord)}
                    className="item flex items-center w-full hover:bg-gray-100"
                    key={item.content}
                  >
                    <span className={classNames('index flex-center text-base', index < 3 ? 'text-red-500' : 'text-gray-300')}>
                      {index + 1}
                    </span>
                    <div className="aside flex-auto">
                      <div className="name flex items-baseline">
                        <span className="searchWord font-bold text-sm">
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
    </Mask>
  );
});
