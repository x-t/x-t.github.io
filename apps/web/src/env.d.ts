/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FETCH_ENDPOINT: string;
  readonly VITE_FORM_ENDPOINT: string;
  readonly VITE_BLOG_ENDPOINT: string;
  readonly VITE_SENTRY_DSN: string;
  readonly VITE_EMAILGUARD_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
