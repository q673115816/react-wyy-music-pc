import React, { createElement, FC, memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { transTextEmoji } from "@/components/Emoji";

interface iProps {
  text: string;
}

const Parse: FC<iProps> = ({ text }) => {
  const result = useMemo(() => {
    const result = [];
    const decode = transTextEmoji(text);
    const reg = /@(?<user>.{2,}?)(?=\s)|#(?<event>.+?)#/g;
    let temp = null;
    let index = 0;
    while ((temp = reg.exec(decode))) {
      const word = temp.slice(index, temp.index);
      if (word) result.push(word);
      index = temp.index + temp[0].length;
      const { user, event } = temp.groups;
      if (user) {
        result.push(
          createElement(Link, { to: `/user/redirect/${user}` }, user)
        );
      }
      if (event) {
        result.push(
          createElement(Link, { to: `/friend/redirect/${event}` }, event)
        );
      }
    }
    return result;
  }, [text]);
  return <span>{transTextEmoji(text)}</span>;
};

export default memo(Parse);
