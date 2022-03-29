import { withSentry } from "@sentry/nextjs";
import { generateMainFeeds, apiRouteForFeed } from "../../../lib/feeds";

export default withSentry(
  apiRouteForFeed(
    generateMainFeeds().then((x) => x.json1),
    "application/feed+json"
  )
);
