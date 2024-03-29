import { Link } from "react-router-dom";
import { IconUser } from "@tabler/icons";
import React, { FC, memo } from "react";
import { Artist } from "@/modules/services/discover";

interface iProps {
  item: Artist;
}

const Item: FC<iProps> = ({ item = {} }) => {
  return (
    <div className="item">
      <div className="cover boarder relative rounded overflow-hidden border">
        <Link to={`/artist/${item.id}`} className="">
          <img
            loading={`lazy`}
            className="aspect-square w-full h-full"
            src={`${item.img1v1Url}?param=200y200`}
            alt={item.name}
          />
        </Link>
      </div>
      <div className="info flex items-center justify-between mt-2 text-sm text-gray-600 hover:text-black">
        <Link to={`/artist/${item.id}`}>{item.name}</Link>
        {item.accountId && (
          <Link
            to={`/user/${item.accountId}`}
            className="bg-red-500 hover:bg-red-600 text-white rounded-full p-0.5"
          >
            <IconUser size={12} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default memo(Item);
