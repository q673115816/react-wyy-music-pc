import React from 'react';
import { IconBrandApple } from '@tabler/icons';
import DomRadio from './Radio';

export default () => (
  <>
    <div className="domSetting_block_title">关于网易云音乐</div>
    <br />
    <div>
      当前版本……
      {' '}
      <button type="button" className="ui_btn">检测更新</button>
    </div>
    <div className="domSetting_subBlock">
      <DomRadio name="更新" list={['自动更新', '有新版本时提醒我']} checked="自动更新" />
    </div>
    <br />
    <div>
      <span>下载移动客户端</span>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <a href="https://itunes.apple.com/cn/app/wang-yi-yun-yin-le/id590338362?l=ch" className="ui_btn_small">
        <IconBrandApple size={16} className="fill-current" />
        iPhone版
      </a>
      &nbsp;
      &nbsp;
      <a href="https://itunes.apple.com/cn/app/wang-yi-yun-yin-lehd/id871041757?l=ch" className="ui_btn_small">
        <IconBrandApple size={16} className="fill-current" />
        iPad版
      </a>
      &nbsp;
      &nbsp;
      {/* "https://music.163.com/sso/login?token=&uid=46636813&url=/download&forceReplaceLogin=false" */}
      <a href="https://music.163.com/#/download" className="ui_btn_small">
        <IconBrandApple size={16} className="fill-current" />
        iPhone版
      </a>
      &nbsp;
      &nbsp;
      <a href="http://www.windowsphone.com/s?appid=db9dbdaa-464e-4370-a078-800fc7983d39" className="ui_btn_small">
        <IconBrandApple size={16} className="fill-current" />
        iPhone版
      </a>
    </div>
    <br />
    <br />
    <br />
    <div>
      <a href="https://music.163.com" className="underline text-gray-600 hover:text-gray-900">《网易云音乐官网》</a>
      &nbsp;
      &nbsp;
      <a href="https://music.163.com" className="underline text-gray-600 hover:text-gray-900">《网易云音乐社区管理细则》</a>
      &nbsp;
      &nbsp;
      <a href="https://music.163.com" className="underline text-gray-600 hover:text-gray-900">《服务条款》</a>
      &nbsp;
      &nbsp;
      <a href="https://music.163.com" className="underline text-gray-600 hover:text-gray-900">《隐私政策》</a>
      &nbsp;
      &nbsp;
      <a href="https://music.163.com" className="underline text-gray-600 hover:text-gray-900">《儿童隐私政策》</a>
    </div>
    <br />
    <br />
    <br />
  </>
);
