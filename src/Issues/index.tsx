import React, { memo, useEffect, useState } from "react";
import { IconBrandGithub, IconX } from "@tabler/icons";
import "./style.scss";

const issues =
  "https://api.github.com/repos/q673115816/wyy-pc/issues/1/comments";

const Content = memo(function Content({ setMinimum }) {
  const [data, setData] = useState([]);
  const handleInit = async () => {
    const data = await fetch(issues).then((res) => res.json());
    setData(data);
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="absolute border bottom-0 right-0 w-56 h-80 bg-white">
      <button
        type="button"
        onClick={() => setMinimum(true)}
        className="absolute flex-center text-white top-0 left-0 m-1 w-3 h-3 bg-red-500 rounded-full shadow"
      >
        <IconX size={8} stroke={2} />
      </button>
      <div className="w-full h-full overflow-auto p-4">
        {data.map((item) => (
          <div key={item.id} className="flex">
            <div className="w-10 h-10 rounded-full border">
              <img src={item.user.avatar_url} className="rounded-full" alt="" />
            </div>
            <div className="flex-auto px-1">
              <div>{item.user.login}</div>
              <div className="mt-1">{item.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

const Issues = () => {
  const [minimum, setMinimum] = useState(true);
  if (minimum) {
    return (
      <div className="absolute bottom-0 right-0 p-4">
        <button
          onClick={() => setMinimum(false)}
          type="button"
          className="text-white bg-black rounded-full w-10 h-10 flex-center"
        >
          <IconBrandGithub size={24} />
        </button>
      </div>
    );
  }
  // return <Content setMinimum={setMinimum}></Content>;
  return (
    <div
      onClick={() => setMinimum(false)}
      className={`absolute border bottom-0 right-0 w-56 h-80 bg-white`}
    >
      <script
        src="https://utteranc.es/client.js"
        repo="q673115816/react-wyy-music-pc"
        issue-term="comment"
        theme="github-light"
        crossOrigin="anonymous"
        async
      />
    </div>
  );
};

export default memo(Issues);
