export function range(end: number, start: number = 0): number[] {
  return new Array(end - start).fill(0).map((_, i) => i + start);
}

export function classes(classArray: (string | [boolean, string])[]): string {
  return classArray
    .filter((x) => (Array.isArray(x) ? x[0] : true))
    .map((x) => (Array.isArray(x) ? x[1] : x))
    .join(" ");
}
