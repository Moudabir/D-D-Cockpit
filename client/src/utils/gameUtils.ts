// DM Grimoire Game Utilities
import { Player, Enemy, LogEntry, Chapter, MapState, SlotMeta } from "../types/game";
import { SAVE_VERSION, NUM_SLOTS, SAVE_PREFIX } from "../constants/gameConstants";

// --- Dice & Colors ---
export function qColor(v: number, s: number): string {
  const p = v / s;
  if (p <= .05) return "#cc1818";
  if (p <= .25) return "#d43020";
  if (p <= .45) return "#d07020";
  if (p <= .60) return "#c9a227";
  if (p <= .79) return "#70a830";
  if (p <= .94) return "#28a040";
  return "#00cc55";
}

export function qLabel(v: number, s: number): string {
  const p = v / s;
  if (v === s) return "MAXIMUM! 🎉";
  if (v === 1) return "Minimum 😬";
  if (p <= .25) return "Poor";
  if (p <= .45) return "Below avg";
  if (p <= .60) return "Average";
  if (p <= .79) return "Good";
  if (p <= .94) return "Great ✨";
  return "Excellent ✨";
}

export function rDie(s: number): number {
  return Math.floor(Math.random() * s) + 1;
}

export function hpCol(p: number): string {
  return p > .6 ? "#3a9a3a" : p > .3 ? "#c8900a" : "#c02020";
}

// --- ID Generation ---
let _uid = 300;
export const uid = (): number => ++_uid;

// --- Player Creation ---
export const mkPlayer = (overrides: Partial<Player> = {}): Player => ({
  id: uid(),
  name: "Adventurer",
  cls: "Fighter",
  hp: 30,
  max: 30,
  ac: 14,
  stats: { str: 15, dex: 14, con: 13, int: 10, wis: 12, cha: 8 },
  slots: [0, 0, 0],
  spellNames: ["", "", ""],
  preparedSpells: [],
  init: 0,
  rollNote: "",
  abilities: [],
  notes: "",
  ...overrides
} as Player);

// --- Persistence & Checksum ---
export function checksum(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

export function buildSave(state: any) {
  const payload = {
    version: SAVE_VERSION,
    savedAt: new Date().toISOString(),
    players: state.players,
    enemies: state.enemies,
    log: state.log.slice(-100),
    chapters: state.chapters,
    activeChapterId: state.activeChapterId,
    diceHist: state.diceHist.slice(0, 12),
    combat: state.combat,
    order: state.order,
    turn: state.turn,
    mapState: state.mapState,
  };
  const json = JSON.stringify(payload);
  return { payload, checksum: checksum(json), size: json.length };
}

export function validateSave(slot: any) {
  if (!slot || typeof slot !== "object") return { ok: false, reason: "Empty slot" };
  if (!slot.payload || !slot.checksum) return { ok: false, reason: "Missing payload/checksum" };
  if (slot.payload.version !== SAVE_VERSION) return { ok: false, reason: `Version mismatch (${slot.payload.version})` };
  const json = JSON.stringify(slot.payload);
  if (checksum(json) !== slot.checksum) return { ok: false, reason: "Checksum failed — data corrupted" };
  if (!Array.isArray(slot.payload.players)) return { ok: false, reason: "Missing players array" };
  if (typeof slot.payload.savedAt !== "string") return { ok: false, reason: "Missing timestamp" };
  return { ok: true, reason: "Valid" };
}

// --- Storage Interactions (Synchronous LocalStorage) ---
export function writeSlot(slotIndex: number, save: any): boolean {
  try {
    localStorage.setItem(SAVE_PREFIX + slotIndex, JSON.stringify(save));
    return true;
  } catch { return false; }
}

export function readSlot(slotIndex: number): any {
  try {
    const raw = localStorage.getItem(SAVE_PREFIX + slotIndex);
    if (!raw) return null;
    const slot = JSON.parse(raw);
    const { ok, reason } = validateSave(slot);
    return ok ? slot : { corrupted: true, reason, slotIndex };
  } catch { return null; }
}

export function deleteSlotStorage(slotIndex: number) {
  try { localStorage.removeItem(SAVE_PREFIX + slotIndex); } catch { }
}

export function findBestSave(): any {
  let best = null;
  for (let i = 0; i < NUM_SLOTS; i++) {
    const slot = readSlot(i);
    if (!slot || slot.corrupted) continue;
    if (!best || slot.payload.savedAt > best.payload.savedAt) best = slot;
  }
  return best;
}

export function readAllSlotMeta(): SlotMeta[] {
  const results: SlotMeta[] = [];
  for (let i = 0; i < NUM_SLOTS; i++) {
    const raw = readSlot(i);
    if (!raw) { results.push({ index: i, empty: true }); continue; }
    if (raw.corrupted) { results.push({ index: i, corrupted: true, reason: raw.reason }); continue; }
    results.push({
      index: i,
      savedAt: raw.payload.savedAt,
      players: raw.payload.players?.length ?? 0,
      enemies: raw.payload.enemies?.length ?? 0,
      log: raw.payload.log?.length ?? 0,
      valid: true,
    });
  }
  return results;
}
