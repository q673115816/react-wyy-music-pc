import React, {
  CSSProperties,
  FC,
  memo,
  StyleHTMLAttributes,
  useMemo,
  useState,
} from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons";
import JsFileDownLoader from "js-file-downloader";

interface iProps {
  item: [];
  gap: string | number;
  width: string | number;
  className?: string;
}

const cols = {
  1: `span 12 / span 12`,
  2: `span 6 / span 6`,
  3: `span 4 / span 4`,
  4: `span 3 / span 3`,
};

const getGridColumn = (length: number, index: number): string => {
  const half = length >> 1;
  return cols[half + (length % 2 === 1 ? (index >= half ? 1 : 0) : 0)];
};

const Pics: FC<iProps> = ({
  item,
  gap = "0.25rem",
  width = 370,
  className = "",
}) => {
  if (!item) return null;
  const { length } = item;
  const [active, setActive] = useState(-1);
  gap = formatUnit(gap);
  width = formatUnit(width);

  const download = async (url: string) => {
    const result = await new JsFileDownLoader({
      url,
    }).catch((err) => {
      console.log(err);
    });
    return result;
  };

  const css: CSSProperties = {
    display: "grid",
    gap,
    width,
    gridTemplate: `1fr / repeat(12, 1fr)`,
    // gridTemplateAreas: areas[length],
  };
  if (active >= 0) {
    return (
      <div className="bg-gray-100 rounded overflow-hidden">
        <div className={`flex gap-4 p-2`}>
          <button type={"button"} onClick={() => setActive(-1)}>
            收起
          </button>
          <button type={"button"}>查看大图</button>
          <button
            type={"button"}
            onClick={() => download(item[active].originUrl)}
          >
            下载
          </button>
        </div>
        <div className={`mx-10 my-6 relative min-w-min flex-center`}>
          <button
            hidden={active === 0}
            type={`button`}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "1.5rem",
              cursor: "left",
            }}
            onClick={() => setActive((prev) => (prev > 0 ? prev - 1 : 0))}
          >
            <IconChevronLeft />
          </button>
          <img
            onClick={() => setActive(-1)}
            src={item[active].originUrl}
            style={{ cursor: "zoom-out", minWidth: "5rem", minHeight: "5rem" }}
            alt=""
          />
          <button
            hidden={active === length - 1}
            type={`button`}
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "1.5rem",
            }}
            onClick={() =>
              setActive((prev) => (prev < length - 1 ? prev + 1 : length - 1))
            }
          >
            <IconChevronRight />
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div style={css} className={className}>
        {item.map((pic, index) => (
          <div
            style={{ gridColumn: getGridColumn(length, index) }}
            key={pic.originUrl}
            className="relative rounded-lg overflow-hidden cursor-zoom-in"
            onClick={() => setActive(index)}
          >
            <img
              loading={`lazy`}
              src={pic.originUrl}
              className="w-full object-cover h-full aspect-square"
              alt=""
            />
            {pic.width / pic.height < 0.75 && (
              <div className="absolute bottom-0 right-0 mx-1 my-2 border leading-tight bg-black bg-opacity-20 text-white border-current px-1 rounded-full">
                长图
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const formatUnit = (val: string | number): string => {
  if (typeof val === "number") val = String(val) + "px";
  return val;
};

export default memo(Pics);
