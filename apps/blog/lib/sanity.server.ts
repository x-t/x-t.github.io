import { createClient } from "next-sanity";
import { sanityConfig as config } from "./config";
import type { SanityClient } from "@sanity/client";

// Set up the client for fetching data in the getProps page functions
export const sanityClient: SanityClient = createClient(config);

// Set up a preview client with serverless authentication for drafts
export const previewClient: SanityClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview = false) =>
  usePreview ? previewClient : sanityClient;
