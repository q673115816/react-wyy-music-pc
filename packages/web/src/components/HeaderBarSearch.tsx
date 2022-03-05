import React, { FC, memo } from "react";
import { IconX, IconSearch } from "@tabler/icons";

interface iProps {
  search: string;
  setSearch: (keyword: string) => void;
  placeholder: string;
}

const HeaderBarSearch: FC<iProps> = ({
  search,
  setSearch,
  placeholder = "",
}) => (
  <div className="search">
    <input
      type="text"
      value={search}
      placeholder={placeholder}
      onChange={({ target }) => setSearch(target.value)}
    />
    <div className="ico">
      {search ? (
        <button type="button" onClick={() => setSearch("")}>
          <IconX size={16} />
        </button>
      ) : (
        <IconSearch size={16} />
      )}
    </div>
  </div>
);

export default memo(HeaderBarSearch);
