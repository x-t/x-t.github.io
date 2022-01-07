import express, { Request, Response } from "express";
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";
import post from "./post";
import cors from "cors";
import get_cors_list from "./get_cors_list";

const app = express();
const port = process.env.PORT || 3000;
const corsOptions: cors.CorsOptions = {
  origin: get_cors_list,
};

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 0.2,
});

app.use(express.json());
app.use(cors(corsOptions));
// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

// Routes
app.get("/", async (req, res) => {
  res.send(
    `Welcome! This is the backend API for <a href="https://zxyz.gay/guestbook.html">the Guestbook</a>.`
  );
});
app.post("/post", post);
// ------

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err: any, req: Request, res: any, next: any) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(`Internal server error! Event reference: ${res.sentry}`);
});

module.exports = app;

if (require.main === module) {
  app.listen(port, () =>
    console.log(`Guestbook API listening on port ${port}!`)
  );
}
