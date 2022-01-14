import React, { memo } from "react";

const Coffee = () => {
  return (
    <a
      href="https://www.buymeacoffee.com/q673115816"
      rel="noreferrer"
      target="_blank"
      className={`fixed bottom-0 right-0 m-8 rounded-full shadow p-4 bg-white hover:bg-black text-xl`}
    >
      ☕
    </a>
  );
};

export default memo(Coffee);
