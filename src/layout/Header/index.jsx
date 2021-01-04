import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  dialogLoginVisibilty,
  setContriesCodeList,
  setLoginInfo,
  setIsLogin,
  setMsgPrivate,
  setPopup,
  setSearchHistory,
  setSearchValue,
} from '@/redux/actions';
import {
  apiCountriesCodeList,
  apiUserAccount,
  apiMsgPrivate,
  apiUserPlaylist,
  apiSearchHot,
  apiSearchHotDetail,
  apiSearchSuggest,
} from '@/api';
// import { setCookie } from '@/common/request';
import {
  IconChevronLeft,
  IconChevronRight,
  IconMicrophone,
  IconCaretDown,
  IconUser,
  IconSettings,
  IconTool,
  IconMail,
  IconMinus,
  IconX,
  IconSquare,
  IconArrowsMinimize,
  IconSearch,
  IconTrash,
} from '@tabler/icons';

export default ({ mousedown }) => {
  const {
    goBack, goForward, listen,
    push,
  } = useHistory();

  const dispatch = useDispatch();
  const {
    isLogin,
    profile,
    popupStatus,
    newMsgCount,
    searchHistory,
    searchValue,
  } = useSelector(({ common, account }) => ({ ...common, ...account }));

  const [searchVisibility, setSearchVisibility] = useState(false);
  const [searchHot, setSearchHot] = useState([]);
  const [searchSuggest, setSearchSuggest] = useState([]);
  const handleShowLogin = () => {
    dispatch(dialogLoginVisibilty());
  };

  const handleGetCountriesCodeList = async () => {
    try {
      const { data } = await apiCountriesCodeList();
      dispatch(setContriesCodeList({ countriesCodeList: data }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCookieInit = async () => {
    const cookie = window.localStorage.getItem('cookie');
    if (!cookie) return;
    try {
      const { profile } = await apiUserAccount();
      if (profile) {
        const { playlist } = await apiUserPlaylist({ uid: profile.userId });
        dispatch(setLoginInfo({ profile, playlist }));
        dispatch(setIsLogin());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetPrivateLetter = async () => {
    if (!isLogin) return;
    try {
      const { msgs, newMsgCount } = await apiMsgPrivate();
      dispatch(setMsgPrivate({ msgs, newMsgCount }));
    } catch (error) {
      console.log(error);
    }
  };

  const handlesetPopup = () => {
    if (popupStatus === 'privateLetter') {
      dispatch(setPopup({ popupStatus: '' }));
    } else {
      dispatch(setPopup({ popupStatus: 'privateLetter' }));
    }
  };

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
    push(`/search?keywords=${keywords}`);
  };

  const handleDeleteSearchHistory = (keywords) => {
    dispatch(setSearchHistory(
      searchHistory.filter((search) => search !== keywords),
    ));
  };

  const handleDeleteAllSearchHistory = () => {
    dispatch(setSearchHistory([]));
  };

  useEffect(() => {
    handleGetCountriesCodeList();
    handleCookieInit();
    handleGetPrivateLetter();
  }, []);

  useEffect(() => {
    if (searchValue) {
      handleSearchSuggestInit();
    }
  }, [searchValue]);

  return (
    <div role="" className="domheader" onMouseDown={() => ''}>
      <Link to="/" className="domheader_logo">
        首页
      </Link>
      <div>
        <button type="button" onClick={() => goBack()} className="domheader_page_prev flex-center">
          <IconChevronLeft size={16} />
        </button>
        <button type="button" onClick={() => goForward()} className="domheader_page_next flex-center">
          <IconChevronRight size={16} />
        </button>
      </div>
      <form style={{ position: 'relative' }}>
        <IconSearch size={16} className="domheader_search_ico" />
        <input
          type="text"
          placeholder="搜索"
          className="domheader_search"
          value={searchValue}
          onChange={({ target }) => dispatch(setSearchValue({ searchValue: target.value }))}
          onFocus={handleSearchInit}
        />
        <div
          className="domheader_search_box"
          style={{ display: searchVisibility ? null : 'none' }}
        >
          {searchValue ? (
            <div className="overflow-auto">
              <button type="button" onClick={() => handleSearch(searchValue)}>
                搜索&quot;
                <span className="ui_link">
                  {searchValue}
                </span>
                &quot;相关的结果&gt;
              </button>
              {searchSuggest?.order?.map((order) => (
                <div>
                  {searchSuggest[order].map((item) => (
                    <div>{}</div>
                  ))}
                </div>
              ))}
            </div>
          )
            : (
              <div className="overflow-auto">
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
                          <div
                            role="button"
                            onClick={() => handleSearch(item)}
                            className="item"
                          >
                            {item}
                            <button
                              type="button"
                              className="ico"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteSearchHistory(item);
                              }}
                            >
                              <IconX size={16} stroke={2} />
                            </button>
                          </div>
                        ))
                      }
                    </div>
                  </>
                )
              }
                <div className="subtitle">热搜榜</div>
                <div className="list">
                  {searchHot.map((item, index) => (
                    <button
                      onClick={() => handleSearch(item.searchWord)}
                      type="button"
                      className="item"
                      key={item.content}
                    >
                      <span className="index">{index + 1}</span>
                      <div className="aside">
                        <div className="name">
                          <span className="searchWord ui_bold">
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
                          <span className="gray">
                            {item.score}
                          </span>
                        </div>
                        <div className="content gray">{item.content}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

        </div>
      </form>
      <Link to="/" className="domheader_voice flex-center">
        <IconMicrophone size={20} stroke={1} />
      </Link>
      <div className="domheader_user">
        {isLogin && profile
          ? (
            <div className="domheader_user_profile">
              <Link to={`/user/${profile.userId}`} className="avator">
                <img className="ui_containimg" src={profile.avatarUrl} alt="" />
              </Link>
              <button type="button" className=" ">
                <span>{profile.nickname}</span>
                <i className="ti ti-caret-down-fill" />
              </button>
            </div>
          )
          : (
            <button
              type="button"
              className="domheader_user_login"
              onClick={handleShowLogin}
            >
              <span className="person flex-center">
                <IconUser size={24} stroke={1} />
              </span>
              <span>未登录</span>
              <IconCaretDown size={12} stroke={1} />
            </button>
          )}

        <button type="button" className="">开通VIP</button>
      </div>
      <div className="domheader_function">
        <Link to="/settings" className=" domheader_ico" title="设置">
          <IconSettings size={24} stroke={1} />
        </Link>
        <button type="button" className=" domheader_ico" title="换肤">
          <IconTool size={24} stroke={1} />
        </button>
        <button
          type="button"
          className=" domheader_ico"
          onClick={handlesetPopup}
          title="私信"
        >
          <IconMail size={24} stroke={1} />
          <span className="rt_ico">{newMsgCount}</span>
        </button>
      </div>
      <span className="domheader_spilt" />
      <div className="domheader_control">
        <button type="button" className=" domheader_ico" title="mini模式">
          <IconArrowsMinimize size={24} stroke={1} />
        </button>
        <button type="button" className=" domheader_ico" title="最小化">
          <IconMinus size={24} stroke={1} />
        </button>
        <button type="button" className=" domheader_ico" title="最大化">
          <IconSquare size={24} stroke={1} />
        </button>
        <button type="button" className=" domheader_ico" title="关闭">
          <IconX size={24} stroke={1} />
        </button>
      </div>
    </div>
  );
};
