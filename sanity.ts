import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "5bffb3em",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2024-01-01", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});
export interface linksTypes {
  [key: string]: "string";
}
export async function getSocialLinks(): Promise<linksTypes> {
  const request: linksTypes[] = await sanity.fetch(
    "*[_type == 'socialInfo']{fiverr, github, linkden}"
  );
  return request[0];
}
