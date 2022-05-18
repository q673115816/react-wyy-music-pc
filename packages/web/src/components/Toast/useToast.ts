import { useCallback, useContext } from "react";
import { setToast, context, resetToast } from "./Content";

const defaultConfig = {
  delay: 2000,
};

const useToast = (config) => {
  const { delay } = Object.assign(defaultConfig, config);
  const [state, dispatch] = useContext(context);
  return (text: string) => {
    if (state.id) clearTimeout(state.id);
    const id = setTimeout(() => dispatch(resetToast()), delay);
    dispatch(setToast({ text, id }));
  };
};

export default useToast;