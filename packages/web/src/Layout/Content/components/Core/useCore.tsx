import { useRef } from "react";
import Core from "./Core";

const useCore = () => {
  const core = useRef(new Core());
  return {};
};

export default useCore;
