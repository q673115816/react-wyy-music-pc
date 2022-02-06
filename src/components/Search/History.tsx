import React, {
  FC,
  memo, MouseEventHandler,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { IconTrash, IconX } from "@tabler/icons";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import { setSearchHistory } from "@/modules/reducers/search/slice";

interface iProps {
  handleSearch: () => void
}

const History: FC<iProps> = ({ handleSearch }) => {
  const dispatch = useAppDispatch();
  const [isHidden, setIsHidden] = useState(false);
  const refHistory = useRef<HTMLDivElement>(null);
  const { searchHistory } = useAppSelector(({ search }) => search);
  const handleDeleteSearchHistory = (keywords): MouseEventHandler<HTMLButtonElement> =>
    (e) =>  {
    e.preventDefault()
    e.stopPropagation()
    dispatch(
      setSearchHistory(searchHistory.filter((search) => search !== keywords))
    );
  };

  const handleDeleteAllSearchHistory = () => {
    dispatch(setSearchHistory([]));
  };

  useEffect(() => {
    if (refHistory.current && refHistory.current.clientHeight > 66) {
      setIsHidden(true);
    }
  }, []);

  return (
    <>
      <div className="subtitle flex items-center px-5 py-2 text-gray-500">
        <span className="text-sm">搜索历史</span>
        &nbsp;
        <button type="button" onClick={handleDeleteAllSearchHistory}>
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
        className="px-5"
        style={isHidden ? { height: 66, overflow: "hidden" } : null}
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

export default memo(History)
