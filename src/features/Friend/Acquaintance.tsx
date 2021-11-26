import React, { memo } from "react";

export default memo(function Acquaintance() {
  return (
    <div className={``}>
      <div className={`text-xl p-8 font-bold`}>寻找并邀请好友</div>
      <div className={`px-8`}>
        <div className={`space-x-2 text-gray-500`}>
          <button type="button">已有1位好友加入</button>
          <span>|</span>
          <button type={"button"}>邀请另外3位好友加入</button>
        </div>
        <div>TODO</div>
      </div>
    </div>
  );
});
