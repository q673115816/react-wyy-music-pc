import React, {
  ChangeEventHandler,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import classNames from "classnames";
import { wordLength } from "@/common/utils";
import "./style.scss";

interface iProps {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  max?: number;
}

export default memo<iProps>(({ onChange, placeholder = "", max = 140 }) => {
  const [n, setN] = useState(0);
  const [text, setText] = useState("");
  const handleChanage: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (event) => {
      const value = event.target.value;
      setText(value);
    },
    []
  );
  // 全角半角判断
  useEffect(() => {
    setN(wordLength(text) >> 0);
  }, [text]);
  return (
    <div className="ui_write relative">
      <textarea
        onChange={handleChanage}
        value={text}
        className="textarea border rounded px-2 py-1"
        placeholder={placeholder}
      />
      <span
        className={classNames(
          "absolute right-0 bottom-0 mx-2",
          n > max ? "red" : "text-gray-300"
        )}
      >
        {max - n}
      </span>
    </div>
  );
});
