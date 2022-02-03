import express, { Request } from "express";
import helmet from "helmet";
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";
import cors from "cors";
import get_cors_list from "./get_cors_list";
import { constraints, v2_post } from "./v2_post";
import nunjucks from "nunjucks";
import path from "path";
import { get_posts } from "./get_posts";

const app = express();
const port = process.env.PORT || 3005;
const corsOptions: cors.CorsOptions = {
  origin: get_cors_list,
};

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({ app }),
  ],
  tracesSampleRate: 0.2,
});

app.use(express.urlencoded({ extended: false }));
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: [
          "'self'",
          "'sha256-6hF7somwAXJEjuPwym5rzKlnNRrVt/Oyp58uc1ApXwo='",
        ],
      },
    },
  })
);
app.use(cors(corsOptions));
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

nunjucks.configure(path.resolve(__dirname, "../views"), {
  autoescape: true,
  express: app,
});

app.get("/", async (req, res) => {
  res.redirect("https://zxyz.gay");
});
app.post("/api/post", ...constraints, v2_post);
app.get("/api/get_posts", get_posts);

app.use(Sentry.Handlers.errorHandler());

app.use(function onError(err: any, req: Request, res: any, next: any) {
  console.log(err);
  res.statusCode = 500;
  res.end(`Internal server error! Event reference: ${res.sentry}`);
});

module.exports = app;

if (require.main === module) {
  app.listen(port, () =>
    console.log(`Guestbook API listening on port ${port}!`)
  );
}
