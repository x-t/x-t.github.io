import { withSentry } from "@sentry/nextjs";
import { generateMainFeeds, apiRouteForFeed } from "../../../lib/feeds";

export default withSentry(
  apiRouteForFeed(
    generateMainFeeds().then((x) => x.rss2),
    "application/rss+xml"
  )
);
