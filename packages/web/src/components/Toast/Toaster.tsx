import { Toaster } from "sonner";

const Toast = () => (
  <Toaster
    position="top-center"
    toastOptions={{
      style: {
        background: "rgba(0,0,0,0.8)",
        color: "#fff",
        border: "none",
        borderRadius: "0.25em",
        fontSize: "18px",
      },
    }}
  />
);

export default Toast;
