import {
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from "next-sanity";
import { sanityConfig as config } from "./config";
// @ts-ignore
import type { SubscriptionOptions } from "next-sanity/dist/useSubscription";
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import createImageUrlBuilder from "@sanity/image-url";

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor: (source: any) => ImageUrlBuilder = (source) =>
  createImageUrlBuilder(config).image(source);

// Set up the live preview subscription hook
export const usePreviewSubscription: <R = any>(
  query: string,
  options?: SubscriptionOptions<R>
) => {
  data: R;
  loading: boolean;
  error: Error;
} = createPreviewSubscriptionHook(config);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);