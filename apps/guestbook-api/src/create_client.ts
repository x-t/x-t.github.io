import { createClient } from "@supabase/supabase-js";

export const client = (() => {
  const url = process.env.SUPABASE_URL || "";
  const token = process.env.SUPABASE_TOKEN || "";
  if (!url || !token)
    throw new Error("SUPABASE_URL and SUPABASE_TOKEN must be set");
  return createClient(url, token);
})();
