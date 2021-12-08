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
