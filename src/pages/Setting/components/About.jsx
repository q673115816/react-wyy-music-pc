import React from 'react';

export default () => (
  <>
    <div className="domSetting_block_title">关于网易云音乐</div>
    <div>
      <span>下载移动客户端</span>
      <a href="https://itunes.apple.com/cn/app/wang-yi-yun-yin-le/id590338362?l=ch" className="ui_btn_small">
        <i className="material-icons">get_app</i>
        iPhone版
      </a>
      <a href="https://itunes.apple.com/cn/app/wang-yi-yun-yin-lehd/id871041757?l=ch" className="ui_btn_small">
        <i className="material-icons">get_app</i>
        iPad版
      </a>
      {/* "https://music.163.com/sso/login?token=&uid=46636813&url=/download&forceReplaceLogin=false" */}
      <a href="https://music.163.com/#/download" className="ui_btn_small">
        <i className="material-icons">get_app</i>
        iPhone版
      </a>
      <a href="http://www.windowsphone.com/s?appid=db9dbdaa-464e-4370-a078-800fc7983d39" className="ui_btn_small">
        <i className="material-icons">get_app</i>
        iPhone版
      </a>
    </div>
  </>
);
