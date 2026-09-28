// Shared card styling tokens, mirrored from the iOS app's live Guild Hall
// materials system so the site renders the same objects the app does.
//
// Category colors match the app's category hues (also used for the four
// archetype classes in Archetypes.astro — Ironclad/Sage/Alchemist/Phantom
// map 1:1 to Physical/Mental/Nutrition/Recovery).
export const CATEGORY_COLORS: Record<string, string> = {
  Physical: '#B8422E',
  Mental: '#3D77B5',
  Nutrition: '#3E8B5C',
  Recovery: '#7A4FA8',
  Wildcard: '#C08F2E',
};

// RARITY RAMP — FINAL (decided 2026-09-27, "app-true"): the site shows the
// product's live ramp. Standing rule: bronze/silver/gold metals belong to
// the app's MASTERY system and are never used for rarity.
// rarity ramp from an options page; this mirrors the live app's current
// ramp as of 2026-09-27 so the site isn't visually orphaned from the app in
// the meantime. Do not treat as final. When the owner decides, swap these
// five values only — nothing else in the card system depends on the exact
// hex, only on which tier a card renders as.
export const RARITY_RAMP: Record<
  'common' | 'uncommon' | 'rare' | 'epic' | 'legendary',
  string
> = {
  common: '#8A8068',
  uncommon: '#3E8B5C',
  rare: '#3D77B5',
  epic: '#7A4FA8',
  legendary: '#C08F2E', // base tone; legendary always renders as the gradient below
};

export const LEGENDARY_GRADIENT = 'linear-gradient(135deg, #C08F2E 0%, #E0A83C 100%)';

export type Rarity = keyof typeof RARITY_RAMP;

export const RARITY_GLOW: Record<Rarity, boolean> = {
  common: false,
  uncommon: false,
  rare: true,
  epic: true,
  legendary: true,
};
