// Comparison-page content. Lifted from the hand-written /vs/ pages on
// 2026-08-14; every string below already passed the brand + stranger-reader
// review, so edit prose here rather than rewriting it in the template.
//
// Rendering conventions inside `text`:
//   {phrase}      renders as gold italic emphasis
//   [label](url)  renders as a link

export type Block =
  | { kind: 'h2' | 'h3' | 'p'; text: string; margin?: string }
  | { kind: 'table'; rows: [string, string, string][] };

export interface Competitor {
  slug: string;
  name: string;
  title: string;
  description: string;
  updated: string;
  intro: string;
  introWidth: string;
  blocks: Block[];
}

export const competitors: Competitor[] = [
  {
    slug: '75-hard',
    name: '75 Hard',
    title: 'CardHabit vs 75 Hard: A Sustainable Alternative That Stays Hard',
    description: 'Looking for a sustainable alternative to 75 Hard? Most alternatives lower the bar. CardHabit keeps the bar and changes the shape: five habit cards dealt each morning, commit to what you can handle, friends who play Challenge cards, and a Streak Shield instead of a restart from Day 1.',
    updated: 'July 2026',
    intro: 'The common alternative to 75 Hard is 75 Soft, which lowers the bar. CardHabit keeps the bar and changes the shape: it deals you five habit cards each morning, you commit to what you can handle, and a missed day costs you a streak instead of weeks of progress.',
    introWidth: '640',
    blocks: [
      { kind: 'h2', text: 'The short version', margin: '0 0 1.5rem' },
      { kind: 'p', text: 'If you want a sustainable alternative to 75 Hard, almost every option on the table answers burnout the same way: by making the rules easier. 75 Soft cuts a workout and allows a drink. Softer programs cut more. CardHabit takes the other path. The daily bar stays hard; what changes is that the bar fits the day. Each morning it deals five habit cards across Physical, Mental, Nutrition, Recovery, and Wildcard, and you commit before your day starts.', margin: '0 0 1rem' },
      { kind: 'p', text: '75 Hard is a structured challenge for people who need extreme proof they can do something hard. It works for the few who finish, and most of the rest learn something valuable from trying.', margin: '0 0 1rem' },
      { kind: 'p', text: 'CardHabit is what comes after. A daily card system for people who already know they can push hard and now want a version that survives year two, year three, year ten. Hard things every day, not extreme things once.', margin: '0 0 2rem' },
      { kind: 'h2', text: 'At a glance', margin: '0 0 1.5rem' },
      {
        kind: 'table',
        rows: [
          ['Duration', 'Indefinite. The system survives.', '75 days, binary pass/fail.'],
          ['The rules', 'A fresh five-card deal every morning; you commit to what you can handle', 'One fixed list, identical all 75 days'],
          ['Daily commitment', '2-5 scoped cards', '2 × 45-min workouts + diet + reading + water + photo'],
          ['Missed day', 'Streak resets, or a friend\'s Streak Shield carries you through', 'Restart from Day 1.'],
          ['Categories', '5 (Physical, Mental, Nutrition, Recovery, Wildcard)', 'Fitness + mindset + diet (no recovery focus)'],
          ['Social mechanic', 'Friends play Challenge cards (Raise the Bar, The Tempter, Fog of War) into tomorrow\'s draw', 'Solo by design'],
          ['Recovery built in', 'Phantom archetype rewards rest', 'No rest day allowed'],
          ['Built for', 'Sustained persistence', 'Proof of extreme effort'],
        ],
      },
      { kind: 'h2', text: 'What 75 Hard taught you', margin: '0 0 1.5rem' },
      { kind: 'p', text: '75 Hard is a useful crucible. People who finish it learn something real about themselves: that they can do hard things, that discipline is a muscle, that the brain that quits at Day 4 isn\'t telling the truth. That\'s worth a lot.', margin: '0 0 1rem' },
      { kind: 'p', text: 'But 75 days end. The system was never designed for Day 76, Day 100, Day 365. The graduation problem is real: most people who finish 75 Hard don\'t successfully port the discipline to year two. The challenge gave them belief; it didn\'t give them an ongoing system.', margin: '0 0 2rem' },
      { kind: 'h2', text: 'What CardHabit is for', margin: '0 0 1.5rem' },
      { kind: 'p', text: 'CardHabit picks up where the challenge ended. Cards are scoped on purpose: small enough that you can actually do them every morning, hard enough to feel like work. Friends bring back the stakes that disappeared when the challenge clock ran out, because they can play Challenge cards that make your next morning\'s draw harder. And the system survives missed days, because real life has them.', margin: '0 0 1rem' },
      { kind: 'p', text: 'You already proved you can push through something extreme once. What you want now is something hard every day, and a system built to keep you doing it.', margin: '0' },
    ],
  },
  {
    slug: 'habitica',
    name: 'Habitica',
    title: 'CardHabit vs Habitica: A Sustainable Alternative to RPG Habit Tracking',
    description: 'How CardHabit compares to Habitica for second-time-around habit builders. Habitica is an open RPG over a custom to-do list. CardHabit is a structured five-card daily ritual built for people who burned out on extreme systems and want sustainable accountability with friends.',
    updated: 'July 2026',
    intro: 'Both are gamified habit apps. They\'re built for different people. Habitica is an open RPG you customize forever. CardHabit is a structured daily ritual for the second-time-around habit builder: someone who read Atomic Habits, tried 75 Hard, and wants a sustainable system with friend accountability instead of a fantasy MMO.',
    introWidth: '620',
    blocks: [
      { kind: 'h2', text: 'The short version', margin: '0 0 1.5rem' },
      { kind: 'p', text: 'Choose Habitica if you want a deep RPG with parties, quests, and a customizable to-do list at its center. Choose CardHabit if you want a tighter daily ritual: five cards drawn each morning, commitments you choose, friends who can spend cards to make tomorrow harder or better.', margin: '0 0 2rem' },
      { kind: 'h2', text: 'At a glance', margin: '0 0 1.5rem' },
      {
        kind: 'table',
        rows: [
          ['Platform', 'iOS', 'iOS, Android, web'],
          ['Core mechanic', 'Daily 5-card draw', 'Custom to-do list'],
          ['Social mechanic', 'Friends modify your next-day draw', 'Parties, quests, guild chat'],
          ['Classification', '4 emergent archetypes', '4 chosen classes (Warrior, Mage, Rogue, Healer)'],
          ['Categories', '5 fixed (Physical, Mental, Nutrition, Recovery, Wildcard)', 'User-defined'],
          ['Free tier', 'Yes (2 daily commits)', 'Yes (full features)'],
          ['Premium', 'Pro $4.99/mo or $39.99/yr (7-day trial)', '$4.99/mo cosmetics + Gems'],
        ],
      },
      { kind: 'h2', text: 'Where Habitica wins', margin: '0 0 1.5rem' },
      { kind: 'p', text: 'Habitica\'s library and customization depth are unmatched in this category: twelve-plus years of community-made content, custom rewards, party quests, and cross-platform sync. If you want one app that holds your to-do list, your habits, and an active community guild around them, Habitica is the answer.', margin: '0 0 1rem' },
      { kind: 'p', text: 'Habitica also wins on platform breadth: Android and web users have nowhere to go in CardHabit at launch.', margin: '0 0 2rem' },
      { kind: 'h2', text: 'Who CardHabit is for', margin: '0 0 1.5rem' },
      { kind: 'p', text: 'CardHabit is built for the Atomic Habits reader who tried 75 Hard and burned out: people who want steady improvement over years, not another 75-day grind, and who would rather do something hard every day than something extreme once. The friend accountability is built on confidence rather than surveillance. When a friend plays a Challenge card into your draw, they are saying they believe you can handle more.', margin: '0 0 1rem' },
      { kind: 'p', text: 'If that\'s not you, Habitica\'s open-ended customization is probably the better fit.', margin: '0 0 2rem' },
      { kind: 'h2', text: 'Where CardHabit is different', margin: '0 0 1.5rem' },
      { kind: 'p', text: 'CardHabit is opinionated where Habitica is open. The five-category structure forces you to think about your day across five dimensions instead of accumulating an unbounded checklist. The randomized morning draw means you don\'t pick your day from scratch. You\'re presented a hand and you commit.', margin: '0 0 1rem' },
      { kind: 'p', text: 'The social mechanic is different in kind. In Habitica, friends are your party and you take quests together. In CardHabit, friends raise the bar on your draw: they can swap a harder card into tomorrow\'s hand, lock in a commitment before you see the rest, or hide the draw so you pick blind. What you committed to today stays sealed. Tomorrow\'s hand is where your friends come in.', margin: '0' },
    ],
  },
  {
    slug: 'streaks',
    name: 'Streaks',
    title: 'CardHabit vs Streaks: Solo Checkbox vs Friend-Accountable Habit System',
    description: 'Streaks is a quiet checkbox habit tracker. CardHabit is a daily card ritual for second-time-around habit builders who want friend accountability without solo grinding. Different bets on what makes habits stick.',
    updated: 'July 2026',
    intro: 'Streaks is one of the best-designed checkbox habit apps on iOS. CardHabit answers a different question. Both are premium iOS-first apps with strong design; the difference is whether you want a solitary focus tool or a daily ritual that friends can play with.',
    introWidth: '620',
    blocks: [
      { kind: 'h2', text: 'The short version', margin: '0 0 1.5rem' },
      { kind: 'p', text: 'Choose Streaks if you want a quiet, minimal, well-engineered habit tracker that respects your focus and rewards consistency. Choose CardHabit if you\'ve tried solo trackers, kept the streak alive, and still didn\'t change, and want friends in the loop. Built for people who read Atomic Habits, want a sustainable system, and know they need accountability to stick with it.', margin: '0 0 2rem' },
      { kind: 'h2', text: 'At a glance', margin: '0 0 1.5rem' },
      {
        kind: 'table',
        rows: [
          ['Platform', 'iOS', 'iOS, watchOS, macOS'],
          ['Core mechanic', 'Daily 5-card draw + hold-to-complete', 'Daily checkbox + streak counter'],
          ['Social', 'Yes: friends affect next-day draws', 'No (solo by design)'],
          ['Gamification', 'Archetypes, vault, rarity tiers, XP', 'Streak counts only'],
          ['Habit limit', '5-card daily draw', 'Up to 24 tasks'],
          ['Price', 'Free, Pro $4.99/mo or $39.99/yr', '$4.99 one-time'],
          ['Watch app', 'Not at launch', 'Yes'],
        ],
      },
      { kind: 'h2', text: 'Where Streaks wins', margin: '0 0 1.5rem' },
      { kind: 'p', text: 'Streaks is one purchase, no subscription, and the price has held since 2016. The Apple Watch app is best-in-class for a habit tracker: tap-to-complete from the wrist. Health-app integration is deep. The design is famously restrained and the app respects your time.', margin: '0 0 1rem' },
      { kind: 'p', text: 'If you want a tool that gets out of your way and just keeps score, Streaks is the answer.', margin: '0 0 2rem' },
      { kind: 'h2', text: 'Where CardHabit is different', margin: '0 0 1.5rem' },
      { kind: 'p', text: 'CardHabit isn\'t trying to be quiet. The morning hand is dealt to you and it surprises you, you hold a card down to complete it rather than tapping a box, and every card you finish earns you another card to bank or spend. Friends are the whole point, and the three differences below all flow from that.', margin: '0 0 2rem' },
      { kind: 'h3', text: 'Fixed tasks vs a dealt hand', margin: '0 0 0.5rem' },
      { kind: 'p', text: 'Streaks asks you to define up to 24 tasks and repeat them. CardHabit deals a fresh hand of five habit cards each morning across Physical, Mental, Nutrition, Recovery, and Wildcard, so hard days and easy days get different hands. You commit to what you can handle before the day starts, and completed cards are immune to anything a friend plays later.', margin: '0 0 1.5rem' },
      { kind: 'h3', text: 'Other players at the table', margin: '0 0 0.5rem' },
      { kind: 'p', text: 'Streaks is solo by design. In CardHabit, your friend Alex can spend cards he earned to play a Challenge card into your next draw: Raise the Bar swaps in a harder card, Fog of War hides the hand so you pick blind, The Tempter dares you to hold the line. He can also send Buffs like Double XP, Streak Shield, Second Wind, or Gilded Draw. Every Challenge is a friend saying they believe you can handle more, and you set the consent terms per friendship.', margin: '0 0 1.5rem' },
      { kind: 'h3', text: 'A streak that isn\'t the whole game', margin: '0 0 0.5rem' },
      { kind: 'p', text: 'In Streaks, the streak count is the scoreboard. In CardHabit it\'s one system among several: XP builds toward an archetype (Ironclad, Sage, Alchemist, or Phantom, earned from your first ten completed cards), the vault holds what you\'ve banked, and a Streak Shield from a friend can carry you through a missed day without pretending the miss didn\'t happen.', margin: '0 0 1.5rem' },
      { kind: 'p', text: 'CardHabit treats habits as a game with stakes and other players. Streaks treats them as a personal contract. Different bets on what motivates you.', margin: '0' },
    ],
  },
  {
    slug: 'finch',
    name: 'Finch',
    title: 'CardHabit vs Finch: Card-Based vs Pet-Based Habit Tracker',
    description: 'CardHabit compared to Finch. Finch grows a virtual pet when you complete self-care tasks. CardHabit deals five habit cards every morning and lets friends affect tomorrow\'s hand. Different gamification: nurturing solo vs competitive social.',
    updated: 'July 2026',
    intro: 'Finch turned self-care into a beloved pet-care game with millions of installs. CardHabit takes a different angle on the same problem: both apps turn daily habits into a game, but they pull motivation from opposite places.',
    introWidth: '620',
    blocks: [
      { kind: 'h2', text: 'The short version', margin: '0 0 1.5rem' },
      { kind: 'p', text: 'Choose Finch if nurturing a small creature that depends on you sounds like the right motivational lever: soft, warm, low-pressure self-care gamified through pet ownership. Choose CardHabit if you\'d rather be in a daily ritual with friends who can make tomorrow harder, with stakes you earn through your own discipline.', margin: '0 0 2rem' },
      { kind: 'h2', text: 'At a glance', margin: '0 0 1.5rem' },
      {
        kind: 'table',
        rows: [
          ['Platform', 'iOS', 'iOS, Android'],
          ['Motivational lever', 'Friends + earned vault plays', 'Virtual pet care'],
          ['Tone', 'Ritualistic, premium, competitive', 'Soft, cozy, encouraging'],
          ['Social', 'Yes: friends modify your draws', 'Limited (friend codes, gifting)'],
          ['Daily structure', '5-card draw across 5 categories', 'User-defined goals'],
          ['Free tier', 'Yes (2 daily commits)', 'Yes (most features)'],
          ['Premium', 'Pro $4.99/mo or $39.99/yr (7-day trial)', '~$5.99/mo Finch Plus'],
        ],
      },
      { kind: 'h2', text: 'Where Finch wins', margin: '0 0 1.5rem' },
      { kind: 'p', text: 'Finch is gentle by design. The pet care metaphor turns "I need to drink water" into "Finch is thirsty too", externalizing the motivation in a way that lowers the activation cost of self-care. The platform reach is also broader (Android + iOS), and the soft tone is right for people who bounce off discipline-coded apps.', margin: '0 0 1rem' },
      { kind: 'p', text: 'If your habit-app history is "I keep downloading these and they make me feel bad," Finch\'s nurturing frame is built for you.', margin: '0 0 2rem' },
      { kind: 'h2', text: 'Where CardHabit is different', margin: '0 0 1.5rem' },
      { kind: 'p', text: 'CardHabit isn\'t soft, and it isn\'t extreme either. It deals you a hand of five habit cards every morning, you commit to what you can handle, and friends holding cards of their own can make tomorrow\'s hand harder. The aim is hard things every day, not extreme things once.', margin: '0 0 2rem' },
      { kind: 'h3', text: 'Friends play cards, not comments', margin: '0 0 0.5rem' },
      { kind: 'p', text: 'In Finch, a friend can send encouragement. In CardHabit, your friend Alex spends cards he earned by finishing his own morning to play Challenge cards into your next draw: Raise the Bar swaps in a harder card, Substitution changes the hand, The Tempter dares you to hold the line, Fog of War hides tomorrow\'s draw so you commit blind. Friends can only touch tomorrow, never today\'s commitments, and completed cards are immune.', margin: '0 0 1.5rem' },
      { kind: 'h3', text: 'Buffs instead of a pet to feed', margin: '0 0 0.5rem' },
      { kind: 'p', text: 'Finch\'s reward loop runs through the bird: complete tasks, the pet grows. CardHabit\'s reward loop runs through the deck. Buffs like Double XP, Streak Shield, Second Wind, and Gilded Draw change how a week plays out, and friends can send them when they see you grinding. A Streak Shield through a missed Wednesday says more than a sticker.', margin: '0 0 1.5rem' },
      { kind: 'h3', text: 'An identity you earn, not a pet you name', margin: '0 0 0.5rem' },
      { kind: 'p', text: 'Your first ten completed cards reveal one of four archetypes: Ironclad (Physical), Sage (Mental), Alchemist (Nutrition), or Phantom (Recovery). You don\'t pick it. The work you actually did determines it, and the archetype then bends your deck toward what makes you stronger.', margin: '0 0 1.5rem' },
      { kind: 'p', text: 'If Finch is a self-care companion, CardHabit is a daily ritual played with people who hold you accountable in real time. Different frames for different temperaments.', margin: '0' },
    ],
  },
  {
    slug: 'atoms',
    name: 'Atoms',
    title: 'CardHabit vs Atoms: Two Takes on the Atomic Habits Framework',
    description: 'CardHabit compared to Atoms, the official Atomic Habits app. Atoms is the canonical implementation of James Clear\'s Four Laws. CardHabit takes the same identity-based-habit idea and adds a daily card draw with rarity tiers and a friend layer that raises the bar on tomorrow\'s hand.',
    updated: 'July 2026',
    intro: 'Atoms is James Clear\'s own app, built to be the direct implementation of Atomic Habits. CardHabit reads the same book and builds a different kind of system: a daily card draw with stakes, rare cards to chase, and friends who can raise the bar on tomorrow. Both take identity-based habits seriously. They diverge on how you\'re held to them.',
    introWidth: '640',
    blocks: [
      { kind: 'h2', text: 'The short version', margin: '0 0 1.5rem' },
      { kind: 'p', text: 'Choose Atoms if you want the direct, official implementation of the Four Laws from the author himself, with habit science content and a minimalist tracker built around the book\'s structure. Choose CardHabit if you\'ve read the book, know the framework, and want a daily ritual with real stakes: a random morning draw, cards that run from Common to Legendary, and friends who can make tomorrow\'s hand harder because they believe you can handle it.', margin: '0 0 2rem' },
      { kind: 'h2', text: 'At a glance', margin: '0 0 1.5rem' },
      {
        kind: 'table',
        rows: [
          ['Platform', 'iOS', 'iOS, Android'],
          ['Core mechanic', 'Daily 5-card draw, scoped commitments', 'Identity-based habit tracking, Four Laws framework'],
          ['Social mechanic', 'Friends raise the bar on tomorrow\'s draw', 'Community feed, light friend accountability'],
          ['Gamification', 'Rarity tiers, vault cards, emergent archetypes', 'Streaks, progress charts'],
          ['Free tier', '2 daily commits', '1 habit tracked'],
          ['Missed-day system', 'Streak resets, Recovery Mode, friend streak shields', 'No dedicated missed-day system'],
          ['Price', 'Free, Pro $4.99/mo or $39.99/yr (7-day trial)', 'Subscription, roughly $70-120/yr depending on billing'],
        ],
      },
      { kind: 'h2', text: 'Where Atoms wins', margin: '0 0 1.5rem' },
      { kind: 'p', text: 'Atoms is the official app, built with James Clear\'s own team, and it stays closest to the book\'s actual language: the Four Laws, habit stacking, identity votes. If you want a minimalist tracker that mirrors the book chapter for chapter, with habit-science lessons built in, Atoms is the direct line to the source. It\'s also the broader platform: iOS and Android, where CardHabit is iOS only.', margin: '0 0 1rem' },
      { kind: 'p', text: 'If what you need is fidelity to the book itself, not a different system inspired by it, Atoms is the more literal choice.', margin: '0 0 2rem' },
      { kind: 'h2', text: 'Where CardHabit is different', margin: '0 0 1.5rem' },
      { kind: 'p', text: 'CardHabit starts from the same underlying idea: small actions compound, and identity is built through repetition. Then it turns that idea into something with visible stakes. The morning draw across Physical, Mental, Nutrition, Recovery, and Wildcard means you don\'t design a habit list from a blank page; the app puts a hand in front of you and you commit to what you can handle. Each card you complete earns a vault card, currency with a rarity structure that runs from Common to Legendary, and your first ten completed cards earn you an archetype: Ironclad, Sage, Alchemist, or Phantom. You don\'t pick your identity. You earn it.', margin: '0 0 1rem' },
      { kind: 'p', text: 'The friend layer is the biggest divergence. In CardHabit, friends can spend earned vault cards to raise the bar on your next draw, swap in a harder card, or hide the hand so you pick blind. It\'s built as the core loop, not an add-on feature. If Atoms is the book made into software, CardHabit is the book made into a ritual you play with people who believe you can handle more.', margin: '0' },
    ],
  },
];

export const bySlug = (slug: string) =>
  competitors.find((c) => c.slug === slug);
