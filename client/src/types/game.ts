// DM Grimoire Core Types

export interface ToastMessage {
  text: string;
  color: string;
  hiding: boolean;
}

export interface Player {
  id: number;
  name: string;
  cls: string;
  hp: number;
  max: number;
  slots: number[];
  spellNames: string[];
  init: number;
  rollNote: string;
  abilities: any[];
  notes: string;
  ac: number;
  stats: { str: number, dex: number, con: number, int: number, wis: number, cha: number };
  preparedSpells: string[];
}

export interface Enemy {
  id: number;
  name: string;
  type: string;
  hp: number;
  max: number;
  abilities: any[];
  [key: string]: any;
}

export interface Chapter {
  id: number;
  name: string;
  summary: string;
  timestamp: string;
}

export interface LogEntry {
  id: number;
  t: string;
  msg: string;
  type: string;
  chapterId?: number;
}

export interface SlotMeta {
  index: number;
  empty?: boolean;
  corrupted?: boolean;
  reason?: string;
  savedAt?: string;
  players?: number;
  enemies?: number;
  log?: number;
  valid?: boolean;
}

export interface MapToken {
  id: number;
  x: number;
  y: number;
  icon: string;
  label: string;
  color: string;
  size: number;
  isEnemy: boolean;
  linkedId?: number; // Link to player/enemy ID
}

export interface MapTerritory {
  id: number;
  points: { x: number, y: number }[];
  color: string;
  label: string;
  filled: boolean;
}

export interface MapState {
  tokens: MapToken[];
  territories: MapTerritory[];
  gridVisible: boolean;
  gridSize: number;
  zoom: number;
  offsetX: number;
  offsetY: number;
  drawingTool: 'select' | 'token' | 'territory' | 'line' | 'eraser';
  selectedTokenId?: number;
  drawingTerritoryPoints?: { x: number, y: number }[];
}
