import type { NextApiRequest, NextApiResponse } from "next";
import { withSentry } from "@sentry/nextjs";
import { isValidRequest } from "@sanity/webhook";

const secret = process.env.SANITY_WEBHOOK_SECRET;

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(400).json({ success: false, message: "Wrong method" });
    return;
  }

  if (!isValidRequest(req, secret)) {
    res.status(401).json({ success: false, message: "Invalid signature" });
    return;
  }

  try {
    await Promise.all([
      res.unstable_revalidate("/"),
      res.unstable_revalidate("/posts"),
      res.unstable_revalidate("/posts/" + req.body.slug),
    ]);

    return res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
    // Let Sentry catch the error
    throw err;
  }
}

export default withSentry(handler);
