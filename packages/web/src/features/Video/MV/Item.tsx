import React, { FC, memo, PropsWithChildren, ReactNode } from "react";
import { Link } from "react-router-dom";
import { IconChevronRight } from "@tabler/icons";

interface iProps extends PropsWithChildren {
  url: string;
  title: string;
  Category?: ReactNode;
}

const Item: FC<iProps> = ({ children, url, title, Category }) => {
  return (
    <div className="">
      <div className="mt-8 mb-5 flex justify-between items-center">
        <Link to={url} className="font-bold text-base flex items-center">
          {title}
          <IconChevronRight size={20} />
        </Link>
        {Category}
      </div>
      {children}
    </div>
  );
};

export default memo(Item);
