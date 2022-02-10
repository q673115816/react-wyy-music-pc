import React, {
  FC,
  memo,
  MouseEventHandler,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { IconTrash, IconX } from "@tabler/icons";
import { HandleSearch } from "./types";
import { useLocalStorage } from "react-use";
import classNames from "classnames";

interface iProps {
  handleSearch: HandleSearch;
}

const History: FC<iProps> = ({ handleSearch }) => {
  const [isHidden, setIsHidden] = useState(false);
  const refHistory = useRef<HTMLDivElement>(null);
  const [searchHistory, setSearchHistory, removeSearchHistory] =
    useLocalStorage("searchHistory", []);

  const handleDeleteSearchHistory =
    (keywords: string): MouseEventHandler<HTMLButtonElement> =>
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setSearchHistory(searchHistory?.filter((search) => search !== keywords));
    };

  useLayoutEffect(() => {
    if (refHistory.current && refHistory.current.clientHeight > 64) {
      setIsHidden(true);
    }
  }, []);

  if (!searchHistory?.length) return null;
  return (
    <>
      <div className="subtitle flex items-center px-5 py-2 text-gray-500">
        <span className="text-sm">搜索历史</span>
        &nbsp;
        <button type="button" onClick={removeSearchHistory}>
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
          {searchHistory.map((item) => (
            <Link
              key={item}
              to={`/search/${item}`}
              onClick={() => handleSearch(item)}
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
