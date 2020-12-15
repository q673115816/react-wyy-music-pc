import React from 'react';

export default () => (
  <>
    <div className="domSetting_block_title">常规</div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">
        字体选择：
        <span className="gray">如果字体显示不清晰，请在控制面板——字体设置中启用系统Clear Type设置</span>
      </div>
      <div className="domSetting_subBlock_content">
        <select className="domSetting_select">
          <option value="default" title="默认" style={{ fontFamily: 'sans-serif' }}>默认</option>
          <option value="fs" title="仿宋" style={{ fontFamily: '仿宋' }}>仿宋</option>
          <option value="st" title="宋体" style={{ fontFamily: '宋体' }}>宋体</option>
          <option value="wryh" title="微软雅黑" style={{ fontFamily: '微软雅黑' }}>微软雅黑</option>
          <option value="wryhl" title="微软雅黑 Light" style={{ fontFamily: '微软雅黑 Light' }}>微软雅黑 Light</option>
          <option value="xst" title="新宋体" style={{ fontFamily: '新宋体' }}>新宋体</option>
          <option value="fzltcxhjt" title="方正兰亭超细黑简体" style={{ fontFamily: '方正兰亭超细黑简体' }}>方正兰亭超细黑简体</option>
          <option value="fzchsjt" title="方正粗黑宋简体" style={{ fontFamily: '方正粗黑宋简体' }}>方正粗黑宋简体</option>
          <option value="kt" title="楷体" style={{ fontFamily: '楷体' }}>楷体</option>
          <option value="dx" title="等线" style={{ fontFamily: '等线' }}>等线</option>
          <option value="dxl" title="等线 Light" style={{ fontFamily: '等线 Light' }}>等线 Light</option>
          <option value="ht" title="黑体" style={{ fontFamily: '黑体' }}>黑体</option>
        </select>
      </div>
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">启动：</div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <label className="domSetting_check">
            <input name="autoOpen" type="checkbox" />
            <i className="material-icons">check</i>
            <span>开机自动启动</span>
          </label>
        </div>
      </div>
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">关联：</div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <label className="domSetting_check">
            <input name="autoOpen" type="checkbox" />
            <i className="material-icons">check</i>
            <span>将网易云音乐设为默认播放器</span>
          </label>
        </div>
      </div>
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">动画：</div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <label className="domSetting_check">
            <input name="autoOpen" type="checkbox" />
            <i className="material-icons">check</i>
            <span>
              禁用动画效果
              <span className="gray">（减少部分资源占用）</span>
            </span>
          </label>
        </div>
      </div>
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">GPU加速：</div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <label className="domSetting_check">
            <input name="autoOpen" type="checkbox" />
            <i className="material-icons">check</i>
            <span>
              禁用GPU加速
              <span className="gray">（关闭图形加速，如果单曲播放页或MV播放黑屏请勾选）</span>
            </span>
          </label>
        </div>
      </div>
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">关闭主面板：</div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <label className="domSetting_radio">
            <input name="closeAction" type="radio" checked />
            <i className="material-icons">radio_button_checked</i>
            <span>最小化到系统托盘</span>
          </label>
        </div>
        <div className="item">
          <label className="domSetting_radio">
            <input name="closeAction" type="radio" />
            <i className="material-icons">radio_button_checked</i>
            <span>退出云音乐</span>
          </label>
        </div>
      </div>
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">定时关机：</div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <label className="domSetting_check">
            <input name="autoOpen" type="checkbox" />
            <i className="material-icons">check</i>
            <span>
              开启定时关机
            </span>
          </label>
        </div>
        <div className="item">
          剩余关机时间
          <select className="domSetting_select">
            {
                            Object.keys(Array(24).fill(0)).map((item) => (
                              <option value={item}>{item}</option>
                            ))
                        }
          </select>
          时
          <select className="domSetting_select">
            {
                            Object.keys(Array(60).fill(0)).map((item) => (
                              <option value={item}>{item}</option>
                            ))
                        }
          </select>
          分
        </div>
      </div>
    </div>

    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">
        高清屏适配：
        <span className="gray">禁用后建议重启软件</span>
      </div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <label className="domSetting_check">
            <input name="autoOpen" type="checkbox" />
            <i className="material-icons">check</i>
            <span>
              禁用系统缩放比例
              <span className="gray">（减少部分资源占用）</span>
            </span>
          </label>
        </div>
      </div>
    </div>
  </>

);
