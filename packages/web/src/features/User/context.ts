import { createContext } from "react";

export const context = createContext<{ profile: any }>({ profile: {} });
export const { Provider } = context;
