// Tracked App Store links (hq #208). Every App Store button on this site goes
// through storeLink() so App Store Connect can attribute installs by surface.
// The list of campaign names (ct) for every company surface lives in one place:
// hq docs/campaign-links.md. Keep the names here in step with that file.
//
// Apple only attributes a campaign link that carries the company's provider
// token (pt, App Store Connect > App Analytics > Campaigns). Until it is filled
// in below, links carry ct alone: harmless, and ready the day pt lands.
export const APPLE_PROVIDER_TOKEN = '';

export const APP_ID = '6768107296';

/** Untagged canonical listing, for structured data and press copy. */
export const STORE_URL_CANONICAL = 'https://apps.apple.com/us/app/cardhabit-tcg-habit-tracker/id6768107296';

export type Campaign = 'cardhabit-site' | 'cardhabit-invite' | 'cardhabit-share';

export function storeLink(ct: Campaign): string {
  const params = new URLSearchParams();
  if (APPLE_PROVIDER_TOKEN) params.set('pt', APPLE_PROVIDER_TOKEN);
  params.set('ct', ct);
  params.set('mt', '8');
  return `https://apps.apple.com/app/apple-store/id${APP_ID}?${params.toString()}`;
}
