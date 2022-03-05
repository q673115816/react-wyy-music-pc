import React, { FC, memo } from "react";
import CardBox from "./CardBox";

interface iProps {}

const CardList: FC<iProps> = ({
  list = [],
  handleClick,
  handleLetter,
  isSelf,
  children,
}) => (
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
);

export default memo(CardList);
