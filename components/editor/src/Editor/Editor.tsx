import React, { FormEventHandler, memo } from "react";

const Editor = () => {
  const handleInput: FormEventHandler<HTMLDivElement> = (e) => {
    console.log(e);
  };
  return <div contentEditable={"true"} onInput={handleInput}></div>;
};

export default memo(Editor);
