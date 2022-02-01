/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FETCH_ENDPOINT: string;
  readonly VITE_FORM_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
