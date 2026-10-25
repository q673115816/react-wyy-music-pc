import React, {
  FC,
  memo,
  MouseEventHandler,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router";
import { IconTrash, IconX } from "@tabler/icons-react";
import classNames from "classnames";
import { useSearchStore } from "@/stores";

const History = () => {
  const [isHidden, setIsHidden] = useState(false);
  const refHistory = useRef<HTMLDivElement>(null);
  const { history } = useSearchStore();
  const handleDeleteSearchHistory =
    (keywords: string): MouseEventHandler<HTMLButtonElement> =>
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      useSearchStore.getState().delHistory({ keywords });
    };
  const handleClearHistory = () => {
    useSearchStore.getState().clearHistory();
  };
  useLayoutEffect(() => {
    if (refHistory.current && refHistory.current.clientHeight > 64) {
      setIsHidden(true);
    }
  }, []);

  if (!history?.length) return null;
  return (
    <>
      <div className="subtitle flex items-center px-5 py-2 text-gray-500">
        <span className="text-sm">搜索历史</span>
        &nbsp;
        <button type="button" onClick={handleClearHistory}>
          <IconTrash size={16} />
        </button>
        {isHidden && (
          <button
            type="button"
            onClick={() => setIsHidden(false)}
            className="ml-auto ui_text_black_hover"
          >
            查看全部
          </button>
        )}
      </div>
      <div
        className={classNames("px-5 overflow-hidden", isHidden && `h-16`)}
        ref={refHistory}
      >
        <div className="searchHistory flex flex-wrap -m-1">
          {history.map((item) => (
            <Link
              key={item}
              to={`/search/${item}`}
              className="item group hover:bg-gray-100 border rounded-full relative m-1 py-1 px-4"
            >
              {item}
              <button
                type="button"
                className="ico absolute opacity-0 group-hover:opacity-100 inset-y-0 m-auto text-gray-400"
                onClick={handleDeleteSearchHistory(item)}
              >
                <IconX size={14} stroke={2} />
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(History);
