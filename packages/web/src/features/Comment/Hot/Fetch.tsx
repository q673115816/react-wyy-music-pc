import React, { FC, memo, useEffect } from "react";
import { useIntersection } from "react-use";
import Item from "@/features/Comment/Hot/List";
import Loading from "@/components/Loading";

interface iProps {
  handleFetch: () => void;
}

const Fetch: FC<iProps> = ({ handleFetch }) => {};

export default memo(Fetch);
