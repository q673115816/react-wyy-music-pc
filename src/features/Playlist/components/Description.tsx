import classNames from "classnames";
import { IconCaretDown, IconCaretUp } from "@tabler/icons";
import React, { FC, memo, useState } from "react";

interface iDescription {
  description: string;
}

const Description: FC<iDescription> = ({ description = "" }) => {
  if (!description) return null;
  const [open, setOpen] = useState(false);
  const descriptionList = description.match(/^.*$/gm);
  return (
    <div className="relative pr-5">
      <div className="whitespace-pre-line leading-6">
        简介：
        <span
          className={classNames(
            "text-gray-500 select-text",
            !open && "truncate inline-block max-w-xs align-bottom"
          )}
        >
          {open ? description : descriptionList[0]}
        </span>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="absolute top-0 right-0 text-gray-500"
        >
          {open ? (
            <IconCaretUp size={16} className="fill-current" />
          ) : (
            <IconCaretDown size={16} className="fill-current" />
          )}
        </button>
      </div>
    </div>
  );
};

export default memo(Description);
