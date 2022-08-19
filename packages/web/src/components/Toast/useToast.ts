import { useContext } from "react";
import { setToast, context, hideToast } from "./Content";

interface Props {
  delay: number;
}

const defaultConfig: Props = {
  delay: 2000,
};

const useToast = (config?: Props) => {
  const { delay } = Object.assign(defaultConfig, config);
  const { state, dispatch } = useContext(context);
  return (text: string) => {
    if (state.id) clearTimeout(state.id);
    const id = setTimeout(() => dispatch(hideToast()), delay);
    dispatch(setToast({ text, id }));
  };
};

export default useToast;
