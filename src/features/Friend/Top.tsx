import React, { memo, useEffect, useState } from "react";
import TopicList from "./components/TopicList";
import { apiTopicDetail } from "@/api";
import classNames from "classnames";

export default memo(function TOP() {
  const [type, setType] = useState("day");
  const [list, setList] = useState([]);
  const handleInit = async () => {
    setList([
      {
        title: "你的恋爱人格是什么",
        count: 916,
      },
      {
        title: "你的恋爱人格是什么",
        count: 916,
      },
    ]);
  };

  useEffect(() => {
    handleInit();
  }, [type]);
  return (
    <div className={` h-full overflow-auto`}>
      <div className={`flex divide-x`}>
        <div className="flex-auto w-0">
          <div className="h-16 px-8 flex items-center">
            <span className={`text-lg font-bold`}>话题飙升榜</span>
            <div className={`ml-auto space-x-3 text-gray-300`}>
              <button
                type={"button"}
                onClick={() => setType("day")}
                className={classNames(
                  `hover:text-gray-700`,
                  type === "day" && "text-gray-700"
                )}
              >
                24小时
              </button>
              <span>|</span>
              <button
                type={"button"}
                onClick={() => setType("week")}
                className={classNames(
                  `hover:text-gray-700`,
                  type === "week" && "text-gray-700"
                )}
              >
                7天
              </button>
            </div>
          </div>
          <div>
            {list.map((item, index) => (
              <div
                key={index}
                className={classNames(
                  "flex items-center h-20 hover:bg-gray-100",
                  index % 2 === 1 && "bg-gray-50"
                )}
              >
                <div className={`w-16 flex-center text-sm `}>{index + 1}</div>
                <div className={`w-14 h-14`}>
                  <img src="" alt="" />
                </div>
                <div>
                  <div className={`text-lg`}>{item.title}</div>
                  <div className={`text-gray-300`}>{item.count}人参与</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="domFriend_right flex-none" style={{ width: 230 }}>
          <div className="p-4 text-sm text-gray-700">推荐话题</div>
          <TopicList limit={10} />
        </div>
      </div>
    </div>
  );
});
