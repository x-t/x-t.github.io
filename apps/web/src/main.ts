import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";
import Alpine from "alpinejs";
import "./font.css";
import "./style.css";

declare global {
  interface Window {
    Sentry: typeof Sentry;
    Alpine: typeof Alpine;
    botdPromise: Promise<any>;
  }
}

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
});

// @ts-ignore
window.endpoints = {
  fetch: import.meta.env.VITE_FETCH_ENDPOINT,
  form: import.meta.env.VITE_FORM_ENDPOINT,
};

window.Alpine = Alpine;
window.Sentry = Sentry;

Alpine.start();
