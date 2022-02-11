import classNames from "classnames";
import React, { FC, memo } from "react";
import { Banner as BannerProps } from "@/modules/services/types";

interface iProps {
  banner: BannerProps;
}

const Banner: FC<iProps> = ({ banner, children }) => (
  <a
    {...{
      ...(banner.url
        ? { href: banner.url }
        : { onClick: (e) => e.preventDefault(), href: "#" }),
    }}
    className="block"
  >
    {children}
    <div
      className={classNames(
        "typeTitle px-3 py-2",
        banner.titleColor === "blue" ? "bg-blue-500" : "bg-red-600"
      )}
    >
      {banner.typeTitle}
    </div>
  </a>
);

export default memo(Banner);
