import InternalToast from "./Toast";
import Provider from "./Provider";
export { default as useToast } from "./useToast";

const Toast = InternalToast as typeof InternalToast & {
  Provider: typeof Provider;
};

Toast.Provider = Provider;
export default Toast;
