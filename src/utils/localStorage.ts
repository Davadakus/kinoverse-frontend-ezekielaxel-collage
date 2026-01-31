import type { MovieEmotionsRecord } from "../types/emotion";

const storageKey = import.meta.env.VITE_STORAGE_KEY;

export function loadLocalStorage(): MovieEmotionsRecord {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return {};

  try {
    return JSON.parse(raw);
  } catch (error) {
    console.error("Failed to parse emotion data from localStorage:", error);
    return {};
  }
}

export function saveLocalStorage(record: MovieEmotionsRecord) {
  localStorage.setItem(storageKey, JSON.stringify(record));
}
