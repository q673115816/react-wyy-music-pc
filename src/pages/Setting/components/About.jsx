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
      <button type="button" className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full">检测更新</button>
    </div>
    <div className="domSetting_subBlock">
      <DomRadio name="更新" list={['自动更新', '有新版本时提醒我']} checked="自动更新" />
    </div>
    <br />
    <div className="flex items-center">
      <span className="mr-4">下载移动客户端</span>
      <a href="https://itunes.apple.com/cn/app/wang-yi-yun-yin-le/id590338362?l=ch" className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4">
        <IconBrandApple size={16} className="fill-current" />
        iPhone版
      </a>
      <a href="https://itunes.apple.com/cn/app/wang-yi-yun-yin-lehd/id871041757?l=ch" className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4">
        <IconBrandApple size={16} className="fill-current" />
        iPad版
      </a>
      {/* "https://music.163.com/sso/login?token=&uid=46636813&url=/download&forceReplaceLogin=false" */}
      <a href="https://music.163.com/#/download" className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4">
        <IconBrandApple size={16} className="fill-current" />
        iPhone版
      </a>
      <a href="http://www.windowsphone.com/s?appid=db9dbdaa-464e-4370-a078-800fc7983d39" className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4">
        <IconBrandApple size={16} className="fill-current" />
        iPhone版
      </a>
    </div>
    <div className="pt-8 pb-7">
      <a href="https://music.163.com" className="mr-2 underline text-gray-600 hover:text-black">《网易云音乐官网》</a>
      <a href="https://music.163.com" className="mr-2 underline text-gray-600 hover:text-black">《网易云音乐社区管理细则》</a>
      <a href="https://music.163.com" className="mr-2 underline text-gray-600 hover:text-black">《服务条款》</a>
      <a href="https://music.163.com" className="mr-2 underline text-gray-600 hover:text-black">《隐私政策》</a>
      <a href="https://music.163.com" className="mr-2 underline text-gray-600 hover:text-black">《儿童隐私政策》</a>
    </div>
  </>
);
