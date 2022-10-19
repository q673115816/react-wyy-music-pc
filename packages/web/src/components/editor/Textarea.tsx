import React, {
  ChangeEventHandler,
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useEffect,
  useState,
} from "react";
import classNames from "classnames";
import { wordLength } from "./core";
import style from "./write.module.scss";

interface iProps {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  max?: number;
}

const Textarea: ForwardRefRenderFunction<HTMLTextAreaElement, iProps> = (
  { onChange, placeholder = "", max = 140 },
  ref
) => {
  const [n, setN] = useState(0);
  const [text, setText] = useState("");
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (event) => {
      const value = event.target.value;
      setText(value);
      onChange(event);
    },
    []
  );
  // 全角半角判断
  useEffect(() => {
    setN(wordLength(text) >> 0);
  }, [text]);

  useEffect(() => () => setText(""), []);
  return (
    <div className="relative">
      <textarea
        ref={ref}
        onChange={handleChange}
        value={text}
        className={classNames(style.textarea, "border rounded px-2 py-1")}
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
};

export default forwardRef(Textarea);
