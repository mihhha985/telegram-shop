const storageKey = "arcadia-favorites";

export function getFavoriteIds(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const value = JSON.parse(window.localStorage.getItem(storageKey) ?? "[]");
    return Array.isArray(value) ? value.filter((id): id is number => typeof id === "number") : [];
  } catch {
    return [];
  }
}

export function toggleFavorite(id: number): boolean {
  const ids = getFavoriteIds();
  const active = !ids.includes(id);
  const next = active ? [...ids, id] : ids.filter((item) => item !== id);
  window.localStorage.setItem(storageKey, JSON.stringify(next));
  window.dispatchEvent(new Event("arcadia:favorites-change"));
  return active;
}
