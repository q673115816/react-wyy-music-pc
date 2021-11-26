import React, { memo } from "react";
import CardBox from "./CardBox";

export default memo(
  ({ list = [], handleClick, handleLetter, isSelf, children }) => (
    // console.log(children);
    <>
      {list.length === 0 ? (
        children[0]
      ) : (
        <div className="flex flex-wrap justify-between">
          {list.map((item) => (
            <CardBox
              item={item}
              handleClick={handleClick}
              isSelf={isSelf}
              handleLetter={handleLetter}
              key={item.userId}
            />
          ))}
        </div>
      )}
      {children[1]}
    </>
  )
);
