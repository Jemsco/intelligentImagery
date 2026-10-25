import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "oilrp1f7",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
  perspective: "published",
});
