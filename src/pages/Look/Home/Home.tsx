import React, {useState, memo, useRef, useEffect} from 'react';
import useInfinite from '@/hooks/useInfinite';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useQuery} from "react-query";
import Loading from "@/components/Loading";
import Rea from 'react-error-boundary'
type iList = [string, iOptions][]

interface iOptions {
  password: string,
  title: string,
  user: string,
  banner: string
}

export default memo(() => {
  const [size, setSize] = useState(20);
  const DomScroll = useRef(null);
  const DomObserver = useRef(null);
  const [list, setList] = useState<iList>([])
  // useInfinite(() => { setSize((prev) => prev + 20); }, DomScroll, DomObserver);

  const {data, error, isLoading, isSuccess, status} = useQuery('look', async () => {
    const {data} = await axios.get('http://localhost:3333/list')
      .then((res) => res.data)
    return data
  })

  return (
    <div className="domLook overflow-auto max-h-full flex-auto" ref={DomScroll}>
      <div className="domLook_header ui_header">
        <span className="title h1">LOOK直播</span>
        <span className="text-gray-400 slogan ml-2">在这里，看见音乐</span>
        <Link to={({pathname}) => `${pathname}/my`} className="ml-2 py-1 px-2 rounded bg-red-500 text-white">我的直播</Link>
        <a href="https://look.163.com/hot" className="text-gray-400 ml-auto">更多 &gt;</a>
      </div>
      <div className="px-8">
        {isLoading && <div className={`pt-48 flex-center`}><Loading/></div>}
        {isSuccess && <LiveList list={data}/>}

        <div ref={DomObserver} />
      </div>
    </div>
  );
});

const LiveList = memo<{ list: iList }>(({list}) => (
  <div className={`grid grid-cols-3 gap-5`}>
    {
      list.map(([key, options]) => (
        <div key={key}>
          <Link to={({pathname}) => `${pathname}/${key}`}>
            <img className={`ui_aspect-ratio-16/9`} loading={`lazy`} src={options.banner} alt=""/>
          </Link>
          <div>
            <Link to={({pathname}) => `${pathname}/${key}`}>{options.title}</Link>
          </div>
          <div><Link to={`/`}>{options.user}</Link></div>
        </div>
      ))
    }
  </div>
))
