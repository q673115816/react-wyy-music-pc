import { useAppDispatch } from "@/modules/hooks";
import { useCallback } from "react";
import { setToast } from "@/modules/reducers/mask/slice";

const useToast = () => {
  const dispatch = useAppDispatch();
  return useCallback((message: string) => {
    dispatch(setToast(message));
  }, []);
};

export default useToast;
