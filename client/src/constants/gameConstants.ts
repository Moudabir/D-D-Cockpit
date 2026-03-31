// DM Grimoire Game Constants

export const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Cinzel:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');`;

export const CLASSES = ["Fighter", "Wizard", "Rogue", "Cleric", "Ranger", "Paladin", "Barbarian", "Bard", "Druid", "Monk", "Sorcerer", "Warlock"];

export const P_ICONS = { 
  Fighter: "⚔️", 
  Wizard: "🔮", 
  Rogue: "🗡️", 
  Cleric: "✝️", 
  Ranger: "🏹", 
  Paladin: "🛡️", 
  Barbarian: "🪓", 
  Bard: "🎵", 
  Druid: "🌿", 
  Monk: "👊", 
  Sorcerer: "✨", 
  Warlock: "👁️" 
};

export const CASTERS = ["Wizard", "Cleric", "Druid", "Sorcerer", "Warlock", "Bard", "Paladin", "Ranger"];

export const SPELL_MAX = [4, 3, 3];

export const ENEMY_TYPES = ["Goblin", "Orc", "Skeleton", "Zombie", "Bandit", "Wolf", "Dragon", "Troll", "Vampire", "Lich", "Ogre", "Custom"];

export const E_ICONS = { 
  Goblin: "👺", 
  Orc: "👹", 
  Skeleton: "💀", 
  Zombie: "🧟", 
  Bandit: "🦹", 
  Wolf: "🐺", 
  Dragon: "🐉", 
  Troll: "👾", 
  Vampire: "🧛", 
  Lich: "☠️", 
  Ogre: "🗿", 
  Custom: "❓" 
};

export const DICE = [
  { sides: 4, color: "#f0a030", dark: "#3d2000", label: "d4", tip1: "Daggers, handaxes, fire bolt.", tip2: "Best for low-damage weapons and cantrips. Averages 2.5.", tip3: "Daggers (1d4), Handaxe (1d4), Bardic Inspiration die at level 1–4." },
  { sides: 6, color: "#e03030", dark: "#3a0808", label: "d6", tip1: "Shortswords, healing potions, Fireball.", tip2: "The most common die in D&D. Averages 3.5.", tip3: "Shortsword (1d6), Healing Potion (2d4+2), Fireball (8d6), Sneak Attack (1d6–12d6)." },
  { sides: 8, color: "#b030d0", dark: "#2a0840", label: "d8", tip1: "Longswords, Cure Wounds, Cleric HP.", tip2: "Standard martial weapon die. Averages 4.5.", tip3: "Longsword versatile (1d8), Cure Wounds (1d8+mod), Cleric/Druid/Monk hit die." },
  { sides: 10, color: "#2070e0", dark: "#081840", label: "d10", tip1: "Battleaxes, Bardic Inspiration, heavy weapons.", tip2: "Heavy one-handed weapons. Averages 5.5.", tip3: "Halberd/Pike (1d10), Heavy Crossbow (1d10), Bardic Inspiration d10 (levels 10–14)." },
  { sides: 12, color: "#20a050", dark: "#082010", label: "d12", tip1: "Greataxes, Barbarian HD. Rare but devastating.", tip2: "The rarest die. Only greataxes and Barbarian use it. Averages 6.5.", tip3: "Greataxe (1d12), Barbarian hit die. Highest average of all weapon dice." },
  { sides: 20, color: "#c9a227", dark: "#3a2800", label: "d20", tip1: "Attack rolls, ability checks, saving throws.", tip2: "THE die. Natural 20 = crit. Natural 1 = automatic fail.", tip3: "Attack rolls, Ability checks, Saving throws, Death saves (10+ = success), Wild Magic." },
  { sides: 100, color: "#888888", dark: "#181818", label: "d100", tip1: "Wild Magic surges, random tables, percentile checks.", tip2: "Roll two d10s — tens + units. Used for surge and encounter tables.", tip3: "Wild Mage surge table, Random Encounter tables, PHB Trinket tables." },
  { sides: 1000, color: "#a36be8", dark: "#2b134d", label: "d1000", tip1: "Massive tables, ultra-rare loot.", tip2: "For rolling on the d1000 mutation table or massive treasure hoards.", tip3: "Use it when standard percentile just isn't granular enough." }
];

export const SAVE_PREFIX = "dm_grimoire_slot_";
export const NUM_SLOTS = 5;
export const SAVE_VERSION = 7;
