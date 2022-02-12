import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";
import Alpine from "alpinejs";
import "./font.css";
import "./style.css";

Sentry.init({
  dsn: "https://e326f95780c043dd983b5cc22df8b116@o987960.ingest.sentry.io/6139490",
  integrations: [new Integrations.BrowserTracing()],
});

// @ts-ignore
window.endpoints = {
  fetch: import.meta.env.VITE_FETCH_ENDPOINT,
  form: import.meta.env.VITE_FORM_ENDPOINT,
  blog: import.meta.env.VITE_BLOG_ENDPOINT,
};

// @ts-ignore
window.Alpine = Alpine;

// @ts-ignore
window.Sentry = Sentry;

Alpine.start();
