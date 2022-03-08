import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";
import Alpine from "alpinejs";
import "./font.css";
import "./style.css";

declare global {
  interface Window {
    blog_callback: (posts: any) => void;
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
  blog: import.meta.env.VITE_BLOG_ENDPOINT,
};

function import_jsonp() {
  let s = document.createElement("script");
  s.src = import.meta.env.VITE_BLOG_ENDPOINT;
  document.body.appendChild(s);
}

window.blog_callback = (posts) => {
  window.dispatchEvent(new CustomEvent("blog-fetch", { detail: posts }));
};

document.addEventListener("alpine:init", () => {
  import_jsonp();
});

window.Alpine = Alpine;
window.Sentry = Sentry;

Alpine.start();
