import React, { FC, memo } from "react";
import Checkbox from "@/components/CheckBox";
import { useToast } from "@/components/Toast";

interface iProps {
  list: [string, boolean?, string?][];
  name: string;
  handle?: () => void;
}

const CheckList: FC<iProps> = ({
  list = [],
  name = "",
  handle = () => null,
}) => {
  const toast = useToast();
  return (
    <div className="mt-6_content">
      {list.map(([item, checked, tips]) => (
        <div className="item leading-loose" key={item}>
          <label className="domSetting_check flex items-center" htmlFor={item}>
            <Checkbox name={item} onChange={() => toast("设置已更新")}>
              {item}
            </Checkbox>
            {tips && <span className="text-gray-400">{`（${tips}）`}</span>}
          </label>
        </div>
      ))}
    </div>
  );
};

export default memo(CheckList);
