export type Coord = [number, number];

export function range(end: number, start: number = 0): number[] {
  return new Array(end - start).fill(0).map((_, i) => i + start);
}

export const CELL_COORDS: [number, number][] = range(9).flatMap((row) =>
  range(9).map((col): [number, number] => [row, col]),
);

export function shuffle<T>(arr: T[]): T[] {
  const shuffled: T[] = [];

  let remaining = [...arr];
  while (remaining.length > 0) {
    const index = Math.floor(Math.random() * remaining.length);

    shuffled.push(remaining[index]);
    remaining.splice(index, 1);
  }

  return shuffled;
}

export function classes(classArray: (string | [boolean, string])[]): string {
  return classArray
    .filter((x) => (Array.isArray(x) ? x[0] : true))
    .map((x) => (Array.isArray(x) ? x[1] : x))
    .join(" ");
}
