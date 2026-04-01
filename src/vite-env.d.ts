/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SCHEDULING_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

