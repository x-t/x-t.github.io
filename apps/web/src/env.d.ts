/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORM_ENDPOINT: string;
  readonly VITE_SENTRY_DSN: string;
  readonly VITE_EMAILGUARD_ENDPOINT: string;
  readonly VITE_GUESTBOOK_FETCH_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
