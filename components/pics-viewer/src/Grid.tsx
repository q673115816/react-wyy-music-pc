import React, { FC, memo } from "react";
import GridList from "./components/GridList";
import { GridItem, Img } from "./components";
import { Active, iProps } from "./types";

const Grid: FC<iProps & Active> = ({
  gap,
  width,
  className,
  srcList,
  value,
  control,
}) => {
  const { length } = srcList;
  return (
    <GridList style={{ gap, width }} className={className}>
      {srcList.map((pic, index) => (
        <GridItem
          length={length}
          index={index}
          key={pic.originUrl}
          onClick={() => control.set(index)}
        >
          <Img loading={`lazy`} src={pic.originUrl} only={length === 1} />
          {/*{pic.width && pic.height && pic.width / pic.height < 0.75 && (
              <div className="absolute bottom-0 right-0 mx-1 my-2 border leading-tight bg-black bg-opacity-20 text-white border-current px-1 rounded-full">
                长图
              </div>
            )}*/}
        </GridItem>
      ))}
    </GridList>
  );
};

export default memo(Grid);
