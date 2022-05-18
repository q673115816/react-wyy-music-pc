import React, { memo } from "react";

const Argument = () => (
  <div className="flex items-center whitespace-nowrap">
    &nbsp;
    <span className="text-gray-400">同意</span>
    <a
      className="ui_link hover"
      target="_blank"
      rel="noopener noreferrer"
      href="https://st.music.163.com/official-terms/service"
    >
      《服务条款》
    </a>
    <a
      className="ui_link hover"
      target="_blank"
      rel="noopener noreferrer"
      href="https://st.music.163.com/official-terms/privacy"
    >
      《隐私条款》
    </a>
    <a
      className="ui_link hover"
      target="_blank"
      rel="noopener noreferrer"
      href="https://st.music.163.com/official-terms/children"
    >
      《儿童隐私条款》
    </a>
  </div>
);
export default memo(Argument);
