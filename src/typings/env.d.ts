/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_PUBLIC_URL: string;
  readonly VITE_LIVE_URL: string;
  readonly VITE_API_URL: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const PUBLIC_URL: string;
declare const LIVE_URL: string;
declare const API_URL: string;
declare const NODE_ENV: string;
