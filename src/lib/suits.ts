// The five suits plus the Joker (decided 2026-11-10, brain CardHabit
// Decisions: "Suits replace archetypes" and "Fifth suit: Connection").
// Inks come from the look Z style bible; Connection's ink is the site's pick
// until the app's style bible adds one.
export type Suit = 'physical' | 'mind' | 'nutrition' | 'recovery' | 'connection' | 'joker';
export type Finish = 'plain' | 'foil' | 'gold';

export const SUITS: Record<Suit, { name: string; ink: string; plate: string; pip: string; line: string }> = {
  physical: {
    name: 'Physical',
    ink: '#9A2E2A',
    plate: '/z/plate-physical.webp',
    pip: 'mountain peak',
    line: 'Move your body. A walk, a set, a stretch that costs you something.',
  },
  mind: {
    name: 'Mind',
    ink: '#2C4A7A',
    plate: '/z/plate-mind.webp',
    pip: 'open book',
    line: 'Read, write, focus. Fifty pages, one page of honest notes, an hour of deep work.',
  },
  nutrition: {
    name: 'Nutrition',
    ink: '#2F6B3E',
    plate: '/z/plate-nutrition.webp',
    pip: 'leaf',
    line: 'Eat on purpose. A green plate, a real breakfast, an evening without sugar.',
  },
  recovery: {
    name: 'Recovery',
    ink: '#5E3C7A',
    plate: '/z/plate-recovery.webp',
    pip: 'crescent moon',
    line: 'Rest like it counts. Sleep, silence, a screen-free hour before bed.',
  },
  connection: {
    name: 'Connection',
    ink: '#2A6670',
    plate: '/z/plate-connection.webp',
    pip: 'linked rings',
    line: 'Reach someone. Call the friend, write the note, say the honest sentence.',
  },
  joker: {
    name: 'Joker',
    ink: '#9C7A2E',
    plate: '/z/plate-joker.webp',
    pip: 'star',
    line: 'The wild card. Two in the deck, and they ask for something you would not pick.',
  },
};

export const SUIT_ORDER: Suit[] = ['physical', 'mind', 'nutrition', 'recovery', 'connection', 'joker'];
