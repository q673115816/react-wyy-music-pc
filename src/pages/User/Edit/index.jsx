import React, { useState } from 'react';

export default () => {
  const [data] = useState();
  return (
    <div className="">
      <div className="h1 domUser_subpage_header ui_header">
        编辑个人信息
      </div>
      <div className="domUserEdit_main" />
    </div>
  );
};
