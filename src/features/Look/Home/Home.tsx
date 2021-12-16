import React, {
  useState,
  memo,
  useRef,
  useEffect,
  useCallback,
  MouseEventHandler,
  useContext,
} from "react";
import useInfinite from "@/hooks/useInfinite";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "@/components/Loading";
import Rea from "react-error-boundary";
import socket from "../socket";
import { iList } from "./types";
import LiveList from "./List";
import { LookContent } from "../Look";

export default memo(function Home() {
  const [size, setSize] = useState(20);
  const {
    lookReducer: { socket },
    lookDispatch,
  } = useContext(LookContent);

  const DomScroll = useRef(null);
  const DomObserver = useRef(null);
  const [list, setList] = useState<iList>([]);
  // useInfinite(() => { setSize((prev) => prev + 20); }, DomScroll, DomObserver);
  const { data = [], error, isLoading, isSuccess, status } = useQuery(
    "look",
    async () => {
      const { data } = await fetch(`${LIVE_URL}/list`).then((res) => res.json())
      return data;
    }
  );

  return (
    <div className="domLook overflow-auto max-h-full flex-auto" ref={DomScroll}>
      <div className="domLook_header ui_header">
        <span className="title h1">LOOK直播</span>
        <span className="text-gray-400 slogan ml-2">在这里，看见音乐</span>
        <Link
          to={`my`}
          className="ml-2 py-1 px-2 rounded bg-red-500 text-white"
        >
          我的直播
        </Link>
        <a href="https://look.163.com/hot" className="text-gray-400 ml-auto">
          更多 &gt;
        </a>
      </div>
      <div className="px-8">
        <LiveList list={data} />
        <div ref={DomObserver} />
      </div>
    </div>
  );
});
