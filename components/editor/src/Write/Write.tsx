import React, {
  ChangeEventHandler,
  FC,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import { wordLength } from "./core";
import styled, { css } from "styled-components";
const Textarea = styled.textarea`
  width: 100%;
  display: block;
  resize: none;
  height: 70px;
  border: 1px solid #ccc;
  padding: 0.5em 0.25em;
  border-radius: 0.25em;
`;

const Length = styled.span<{ readonly red: boolean }>`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0 0.5em;
  ${(props) => css`
    color: ${props.red ? "red" : "#ccc"};
  `}
`;

interface iProps {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  max?: number;
}

const Write: FC<iProps> = ({ onChange, placeholder = "", max = 140 }) => {
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
    <div style={{ position: "relative" }}>
      <Textarea
        onChange={handleChanage}
        value={text}
        placeholder={placeholder}
      />
      <Length red={n > max}>{max - n}</Length>
    </div>
  );
};

export default memo(Write);
