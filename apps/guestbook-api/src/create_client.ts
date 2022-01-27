import { createClient } from "@urql/core";

const _importDynamic = new Function("modulePath", "return import(modulePath)");

async function fetch(...args: any) {
  const { default: f } = await _importDynamic("node-fetch");
  return f(...args);
}

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
