import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";
import "./style.css";

Sentry.init({
  dsn: "https://e326f95780c043dd983b5cc22df8b116@o987960.ingest.sentry.io/6139490",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 0.2,
});
