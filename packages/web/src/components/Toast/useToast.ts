import { toast } from "sonner";

const useToast = (config?: { delay?: number }) => {
  const duration = config?.delay ?? 2000;
  return (text: string) => toast(text, { duration });
};

export default useToast;
