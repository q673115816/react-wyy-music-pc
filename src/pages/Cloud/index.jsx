import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import Search from '@/components/HeaderBarSearch';
import { apiUserCloud } from '@/api';
import './style.scss';

import {
  IconCaretUp,
  IconCaretDown,
  IconSwitchVertical,
  IconCloudDownload,
  IconPlus,
  IconPlayerPlay,
} from '@tabler/icons';

const defaultSort = (a, b, sort) => String(a[sort.code]).localeCompare(String(b[sort.code]), 'zh-CN') * sort.type;

const th = [
  ['音乐标题', 'songName', defaultSort],
  ['歌手', 'artist', defaultSort],
  ['专辑', 'album', defaultSort],
  ['格式', '', defaultSort],
  ['大小', 'fileSize', (a, b, sort) => (Number.parseFloat(a[sort.code]) - Number.parseFloat(b[sort.code])) * sort.type],
  ['上传时间', 'addTime', (a, b, sort) => (a[sort.code] - b[sort.code]) * sort.type]];

const BuildSort = (item, sort) => {
  if (sort.name !== item) {
    return (
      <IconSwitchVertical size={14} color="#f00" stroke={1} />
    );
  }
  if (sort.type === -1) {
    return (
      <IconCaretDown size={20} stroke={0} fill="#000" />
    );
  }
  if (sort.type === 1) {
    return (
      <IconCaretUp size={12} stroke={0} fill="#000" />
    );
  }
  if (sort.type === 0) {
    return (
      <IconSwitchVertical size={14} color="#f00" stroke={1} />
    );
  }
};

export default () => {
  const [visibility, setVisibility] = useState(false);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [maxSize, seMaxSize] = useState('');
  const [size, setSize] = useState('');

  const [sort, setSort] = useState({
    name: '上传时间',
    type: -1,
    code: 'addTime',
    callback: (a, b, sort) => (a[sort.code] - b[sort.code]) * sort.type,
  });

  const handleToggleVisibility = () => {
    setVisibility(!visibility);
  };

  const handleInit = async () => {
    try {
      const {
        data = [], count = 0, maxSize = 0, size = 0,
      } = await apiUserCloud({
        limit: 100,
      });
      setData(data);
      setCount(count);
      seMaxSize(maxSize);
      setSize(size);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSort = (obj) => {
    if (sort.name !== obj.name) {
      return setSort({
        ...obj,
        type: 1,
      });
    }
    switch (sort.type) {
      case -1:
        return setSort({
          name: '',
          code: '',
          callback: (a, b) => 0,
          type: 0,
        });
      case 1:
        return setSort({
          ...obj,
          type: -1,
        });
      default:
        return setSort({
          ...obj,
          type: 1,
        });
    }
  };

  useEffect(() => {
    handleInit();
  }, []);

  // useEffect(() => {
  //   console.log('qwe');
  //   setData(
  //     data.sort((a, b) => sort.callback(a, b, sort)),
  //   );
  // }, [data, sort]);
  return (
    <div className="domManage">
      <div className="domManage_header ui_header">
        <span className="domManage_header_title h1">我的音乐云盘</span>
      </div>
      <div className="domCloud_info">
        <span>云盘容量</span>
        &nbsp;
        <div
          className="ui_process"
          style={{ '--ratio': (size / maxSize) || 0 }}
        />
        &nbsp;
        <span className="num">
          {(size / 1024 / 1024 / 1024).toFixed(2)}
          G/
          {maxSize / 1024 / 1024 / 1024}
          G
        </span>
        &nbsp;
        <span>歌曲永久保存，随时随地多端畅听</span>
        &nbsp;
        <a href="https://music.163.com/#/store/product/detail?id=34001" className="ui_link">扩容</a>
      </div>
      <div className="ui_headerBar">
        <div className="left">
          <div className="ui_playall" style={{ marginRight: 20 }}>
            <button type="button" className="flex-center play">
              <IconPlayerPlay size={18} className="fill-current" />
              &nbsp;
              播放全部
            </button>
            <button type="button" className="flex-center add">
              <IconPlus size={20} />
            </button>
          </div>
          <button type="button" className="flex-center ui_btn">
            <IconPlus size={20} />
            &nbsp;
            上传音乐

          </button>
        </div>
        <div className="right">
          <Search {...{ search, setSearch, placeholder: '搜索我的音乐云盘' }} />
        </div>
      </div>
      <div className="overflow-auto max-h-full flex-auto" style={{ paddingLeft: 30, paddingRight: 20 }}>
        <div className="domManage_table">
          {/* <colgroup>
            <col style={{ width: '30px' }} />
            <col style={{ width: '30px' }} />
            <col style={{ width: '30%' }} />  // 270
            <col style={{ width: '8%' }} />  // 90
            <col style={{ width: '8%' }} />  // 70
            <col style={{ width: '5%' }} />  // 60
            <col style={{ width: '6%' }} /> // 70
            <col style={{ width: '10%' }} /> // 116
          </colgroup> */}
          <div className="thead">
            <div className="tr">
              <div />
              <div />
              {
                th.map(([item, code, callback]) => (
                  <div
                    className={classnames('cell', 'th', { on: item === sort.name })}
                    onClick={() => handleSort({ item, code, callback })}
                  >
                    {item}
                    <span className="sort">
                      {BuildSort(item, sort)}
                    </span>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="tbody">
            {
              data.map((item, index) => (
                <div className="tr">
                  <div className="cell index ui_gray">{String(index + 1)}</div>
                  <div className="cell download">
                    <button type="button" className="ui_gray hover">
                      <IconCloudDownload size={20} stroke={1.5} />
                    </button>
                  </div>
                  <div className="cell">{item.songName}</div>
                  <div className="cell">
                    {
                      item.simpleSong.ar
                        ? (
                          <Link
                            to={`/artist/${item.simpleSong.ar && item.simpleSong.ar[0]?.id}`}
                            title={item.artist}
                          >
                            {item.artist}
                          </Link>
                        )
                        : <span className="ui_gray">未知歌手</span>
                    }
                  </div>
                  <div className="cell">
                    {
                      item.simpleSong.al
                        ? (
                          <Link to={`/playlist/album/${item.simpleSong.al.id}`} title={item.album}>
                            {item.album}
                          </Link>
                        )
                        : <span className="ui_gray">未知专辑</span>
                    }
                  </div>
                  <div className="cell" style={{ textTransform: 'uppercase' }}>
                    {/(?<=\.)(\w*)$/.exec(item.fileName)[0]}
                  </div>
                  <div className="cell">
                    {(item.fileSize / 1024 / 1024).toFixed(1)}
                    MB
                  </div>
                  <div className="cell ui_gray">
                    {dayjs(item.addTime).format('YYYY-MM-DD')}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="domManage_dialog" style={{ display: visibility ? '' : 'none' }}>
        <button type="button" className="close" onClick={handleToggleVisibility}>×</button>
        <div className="title">选择本地音乐文件夹</div>
        <div className="tips">将自动扫描您勾选的目录，文件增删实时同步。</div>
        <ul>
          <li>
            <span className="checkbox">
              <input type="text" />
              <i className="material-icons">checkbox</i>
            </span>
            暂时没法做
          </li>
        </ul>
        <div className="actions">
          <button type="button" className="ui_btn red">确认</button>
          <button type="button" className="ui_btn">添加文件</button>
        </div>
      </div>
    </div>
  );
};
