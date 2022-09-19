import React, { memo, useState } from "react";
const sizes = ["标清", "高清", "超清", "1080P", "没这功能"];

const Size = () => {
  const [sizeListShow, setSizeListShow] = useState(false);
  const [curr, setCurr] = useState("超清");
  const handleCheck = (br: string) => {
    setCurr(br);
    setSizeListShow(false);
  };
  return (
    <div className="relative w-16">
      <button
        onClick={() => setSizeListShow(!sizeListShow)}
        type="button"
        className="flex-center w-full group"
      >
        <span className="text-gray-400">{curr}</span>
      </button>
      {sizeListShow && (
        <div className="absolute left-0 right-0 bottom-full border text-white divide-y divide-gray-400 transform -translate-y-4 bg-black bg-opacity-80 border-gray-400 text-center">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              className="black w-full py-1"
              onClick={() => handleCheck(size)}
            >
              {size}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(Size);
