import { createClient } from "@urql/core";
import fetch from "node-fetch";

export const client = (() => {
  const url = process.env.NHOST_URL || "";
  const key = process.env.NHOST_KEY || "";
  if (!url || !key) throw new Error("NHOST_URL and NHOST_KEY must be set");
  return createClient({
    url: url,
    // @ts-ignore
    fetch: fetch,
    fetchOptions: () => ({
      headers: {
        "x-hasura-admin-secret": key,
      },
    }),
  });
})();
