// Years found in a free-text year field, e.g. "2024–2025" → [2024, 2025]
const yearsOf = (year: string | null) => (year?.match(/\d{4}/g) ?? []).map(Number);

// Most recent first: by end year, then start year. Ties keep the incoming order.
export function sortByMostRecent<T extends { year: string | null }>(studies: T[]): T[] {
  return studies.toSorted((a, b) => {
    const [ya, yb] = [yearsOf(a.year), yearsOf(b.year)];
    return (
      Math.max(0, ...yb) - Math.max(0, ...ya) ||
      Math.min(...yb, Infinity) - Math.min(...ya, Infinity) ||
      0
    );
  });
}
