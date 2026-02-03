export function formatYear(date: string | undefined): string {
  return date?.slice(0, 4) || "TBA";
}
